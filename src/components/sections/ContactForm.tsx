"use client";

import { useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import {
  submitContactForm,
  type ContactFormState,
} from "@/actions/contact";
import { Loader2 } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_LOCATION } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little more — at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors, dirtyFields, isValid },
    trigger,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
    mode: "onBlur",
  });

  const values = watch();

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message);
    } else if (state.message && !state.errors) {
      toast.error(state.message);
    }
  }, [state]);

  const handleFormAction = async (formData: FormData) => {
    const valid = await trigger();
    if (!valid) return;
    await formAction(formData);
  };

  const ticket = (
    <aside className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
      <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
      <p className="eyebrow mb-6">
        {state.success ? "Received" : "Your note"}
      </p>
      <dl className="space-y-5">
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">To</dt>
          <dd className="mt-1 text-[15px] font-medium text-warm-800">
            {COMPANY_EMAIL}
          </dd>
        </div>
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">From</dt>
          <dd className="mt-1 text-[15px] font-medium text-warm-800">
            {values.name || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">Practice</dt>
          <dd className="mt-1 text-[15px] font-medium text-warm-800">
            {values.service || "—"}
          </dd>
        </div>
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">Note</dt>
          <dd className="mt-1 text-[15px] leading-relaxed font-medium text-warm-800">
            {values.message
              ? values.message.slice(0, 160)
              : "A sentence on the product is enough."}
          </dd>
        </div>
      </dl>
    </aside>
  );

  const details = (
    <div className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:p-8">
      <dl className="space-y-6">
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">Email</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="text-[15px] font-semibold text-brand-orange hover:text-brand-coral"
            >
              {COMPANY_EMAIL}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">Location</dt>
          <dd className="mt-1 text-[15px] font-medium text-warm-800">
            {COMPANY_LOCATION}
          </dd>
        </div>
        <div>
          <dt className="text-[13px] font-semibold text-warm-700">
            Response time
          </dt>
          <dd className="mt-1 text-[15px] font-medium text-warm-800">
            Within 24 hours
          </dd>
        </div>
      </dl>
      <p className="mt-8 text-[15px] leading-relaxed font-medium text-warm-800">
        Prefer email? Drop us a line at{" "}
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="font-semibold text-brand-orange hover:text-brand-coral"
        >
          {COMPANY_EMAIL}
        </a>{" "}
        and we&apos;ll get back to you within one business day.
      </p>
    </div>
  );

  if (state.success) {
    return (
      <FadeIn>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:col-span-7 lg:p-8">
            <p className="eyebrow mb-4">Received</p>
            <h3 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
              We have your note.
            </h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed font-medium text-warm-800">
              {state.message} If it&apos;s urgent, write us directly — we keep
              the same inbox.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-5">
            {ticket}
            {details}
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn direction="up">
      <div className="grid items-start gap-8 lg:grid-cols-12">
        <form
          ref={formRef}
          action={handleFormAction}
          className="space-y-6 rounded-xl bg-white p-6 shadow-[0_12px_28px_rgba(238,122,72,0.08)] lg:col-span-7 lg:p-8"
          noValidate
        >
          <Input
            label="Your name"
            placeholder="How should we address you?"
            error={errors.name?.message || state.errors?.name?.[0]}
            valid={Boolean(
              dirtyFields.name && values.name.length >= 2 && !errors.name
            )}
            {...register("name")}
          />

          <Input
            label="Work email"
            type="email"
            placeholder="you@company.com"
            error={errors.email?.message || state.errors?.email?.[0]}
            valid={Boolean(
              dirtyFields.email && values.email.includes("@") && !errors.email
            )}
            {...register("email")}
          />

          <Input
            label="Company"
            placeholder="Optional"
            error={errors.company?.message || state.errors?.company?.[0]}
            {...register("company")}
          />

          <div className="space-y-1.5">
            <label
              htmlFor="service"
              className="block text-[15px] font-semibold text-warm-800"
            >
              What are you building?
            </label>
            <select
              id="service"
              className={cn(
                "w-full appearance-none rounded-none border-0 border-b bg-transparent px-0 py-3",
                "text-[15px] text-warm-800",
                "transition-colors duration-200",
                "focus:border-brand-orange focus:ring-0 focus:outline-none",
                "border-warm-300 hover:border-warm-400",
                "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22none%22%20stroke%3D%22%239c9589%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m4%206%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
                "bg-[length:16px_16px] bg-[position:right_0_center] bg-no-repeat pr-8"
              )}
              defaultValue=""
              {...register("service")}
            >
              <option value="" disabled>
                Pick a practice (optional)
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other">Other / not sure yet</option>
            </select>
          </div>

          <Textarea
            label="Tell us what you're building"
            placeholder="A sentence on the product, the constraint, or the deadline is enough."
            rows={5}
            error={errors.message?.message || state.errors?.message?.[0]}
            valid={Boolean(
              dirtyFields.message &&
                values.message.length >= 10 &&
                !errors.message
            )}
            {...register("message")}
          />

          {state.message && !state.success && state.errors && (
            <div
              className="border-l-2 border-error px-4 py-3 text-[15px] text-error"
              role="alert"
            >
              {state.message}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full sm:w-auto"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              "Send it over"
            )}
          </Button>
          {!isValid && (
            <p className="text-[13px] font-medium text-warm-700">
              We read every note.
            </p>
          )}
        </form>

        <div className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
          {ticket}
          {details}
        </div>
      </div>
    </FadeIn>
  );
}
