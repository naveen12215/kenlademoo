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
import { Magnetic } from "@/components/animations/Magnetic";
import { HeroDust } from "@/components/animations/HeroDust";
import { GradientText } from "@/components/ui/GradientText";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import {
  submitContactForm,
  type ContactFormState,
} from "@/actions/contact";
import { Loader2 } from "lucide-react";
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_CONTACT_NAME,
  COMPANY_EMAIL,
  COMPANY_FOUNDED,
  COMPANY_LEGAL_NAME,
  COMPANY_PHONE,
  COMPANY_REACH_EMAIL,
  COMPANY_WEB,
} from "@/lib/constants";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email address").max(120),
  company: z.string().max(100).optional(),
  service: z.string().max(120).optional(),
  message: z
    .string()
    .min(10, "Tell us a little more — at least 10 characters")
    .max(4000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const promises = [
  { index: "01", label: "Adyar, Chennai" },
  { index: "02", label: COMPANY_CONTACT_NAME },
  { index: "03", label: `Since ${COMPANY_FOUNDED}` },
];

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    formState: { errors, dirtyFields },
    trigger,
    watch,
    setValue,
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
    if (isPending) return;
    const valid = await trigger();
    if (!valid) return;
    try {
      await formAction(formData);
    } catch {
      toast.error("Something went wrong. Please try again in a moment.");
    }
  };

  const ticket = (
    <aside className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:p-8">
      <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
      <p className="ghost-type pointer-events-none absolute -top-3 right-3 text-[5.5rem] lg:text-[7rem]">
        06
      </p>
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <p className="eyebrow">
            {state.success ? "Received" : "Your note"}
          </p>
          <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
            KS-06
          </p>
        </div>
        <dl className="space-y-5">
          <div>
            <p className="index-num mb-1">01</p>
            <dt className="text-[13px] font-semibold text-warm-700">To</dt>
            <dd className="mt-1 text-[15px] font-medium text-warm-800">
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="hover:text-brand-orange"
              >
                {COMPANY_EMAIL}
              </a>
              {" · "}
              <a
                href={`mailto:${COMPANY_REACH_EMAIL}`}
                className="hover:text-brand-orange"
              >
                {COMPANY_REACH_EMAIL}
              </a>
            </dd>
          </div>
          <div>
            <p className="index-num mb-1">02</p>
            <dt className="text-[13px] font-semibold text-warm-700">From</dt>
            <dd className="mt-1 text-[15px] font-medium text-warm-800">
              {values.name || "—"}
            </dd>
          </div>
          <div>
            <p className="index-num mb-1">03</p>
            <dt className="text-[13px] font-semibold text-warm-700">Service</dt>
            <dd className="mt-1 text-[15px] font-medium text-warm-800">
              {values.service || "—"}
            </dd>
          </div>
          <div>
            <p className="index-num mb-1">04</p>
            <dt className="text-[13px] font-semibold text-warm-700">Note</dt>
            <dd className="mt-1 text-[15px] leading-relaxed font-medium text-warm-800">
              {values.message
                ? values.message.slice(0, 160)
                : "A sentence on the product is enough."}
            </dd>
          </div>
        </dl>
        <div className="mt-8 border-t border-warm-100 pt-5">
          <p className="text-[13px] font-semibold text-warm-700">Reach us</p>
          <p className="mt-1 text-[15px] font-medium text-dark">
            {COMPANY_CONTACT_NAME}
          </p>
          <a
            href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
            className="mt-1 block text-[15px] font-medium text-warm-800 hover:text-brand-orange"
          >
            {COMPANY_PHONE}
          </a>
          <a
            href={`mailto:${COMPANY_REACH_EMAIL}`}
            className="mt-1 block text-[15px] font-semibold text-brand-orange hover:text-brand-coral"
          >
            {COMPANY_REACH_EMAIL}
          </a>
          <a
            href={`https://${COMPANY_WEB}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 block text-[15px] font-medium text-warm-800 hover:text-brand-orange"
          >
            {COMPANY_WEB}
          </a>
          <p className="mt-4 text-[13px] font-medium text-warm-700">
            Notes through this form go to {COMPANY_EMAIL} and {COMPANY_REACH_EMAIL}.
          </p>
        </div>
      </div>
    </aside>
  );

  return (
    <>
      <section className="construction-hero relative overflow-x-clip pt-8 pb-10 lg:pt-10 lg:pb-12">
        <HeroDust />
        <Container className="relative">
          <FadeIn>
            <p className="eyebrow mb-4">Contact</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.06}>
            <h1 className="display-h1 max-w-3xl font-extrabold tracking-tight text-dark">
              For new work and{" "}
              <GradientText shimmer>partnerships</GradientText>
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed font-medium text-dark">
              For new work and partnerships. Primary engineering office in
              Adyar, Chennai — we deliver to the United States, India, and the
              Middle East.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {promises.map((item) => (
                <li
                  key={item.index}
                  className="flex items-center gap-2.5 rounded-full bg-white/70 px-4 py-2 shadow-[0_8px_20px_rgba(238,122,72,0.08)] backdrop-blur-sm"
                >
                  <span className="index-num">{item.index}</span>
                  <span className="text-[13px] font-semibold text-warm-800">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <div className="ink-draw mt-8 h-px max-w-xl bg-gradient-to-r from-brand-gold via-brand-orange to-transparent lg:mt-10" />
        </Container>
      </section>

      <section className="pb-10 lg:pb-12">
        <Container>
          <StaggerChildren className="grid gap-4 md:grid-cols-2">
            <StaggerItem>
              <article className="studio-value group relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] md:p-8">
                <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                <p className="ghost-type pointer-events-none absolute -top-3 right-3 text-[5rem]">
                  01
                </p>
                <p className="index-num mb-4">01</p>
                <p className="eyebrow mb-3">Office</p>
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                  Chennai
                </h2>
                <address className="mt-4 not-italic text-[17px] leading-relaxed font-semibold text-dark">
                  {COMPANY_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
                <p className="mt-6 text-[13px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                  {COMPANY_LEGAL_NAME}
                </p>
              </article>
            </StaggerItem>
            <StaggerItem>
              <article className="studio-value group relative h-full overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] md:p-8">
                <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                <p className="ghost-type pointer-events-none absolute -top-3 right-3 text-[5rem]">
                  02
                </p>
                <p className="index-num mb-4">02</p>
                <p className="eyebrow mb-3">Reach us</p>
                <h2 className="font-heading text-2xl font-extrabold tracking-tight text-dark">
                  {COMPANY_CONTACT_NAME}
                </h2>
                <dl className="mt-4 space-y-4 text-[17px] font-semibold text-dark">
                  <div>
                    <dt className="text-[13px] font-semibold tracking-[0.12em] text-warm-700 uppercase">
                      Mobile
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}
                        className="hover:text-brand-orange"
                      >
                        {COMPANY_PHONE}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold tracking-[0.12em] text-warm-700 uppercase">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${COMPANY_REACH_EMAIL}`}
                        className="text-brand-orange hover:text-brand-coral"
                      >
                        {COMPANY_REACH_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[13px] font-semibold tracking-[0.12em] text-warm-700 uppercase">
                      Web
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`https://${COMPANY_WEB}`}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-brand-orange"
                      >
                        {COMPANY_WEB}
                      </a>
                    </dd>
                  </div>
                </dl>
                <p className="mt-6 text-[13px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                  Software engineering since {COMPANY_FOUNDED}
                </p>
              </article>
            </StaggerItem>
          </StaggerChildren>
        </Container>
      </section>

      <section className="pb-14 lg:pb-16">
        <Container>
          {state.success ? (
            <FadeIn>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="relative overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:col-span-7 lg:p-10">
                  <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                  <p className="eyebrow mb-4">Received</p>
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-dark lg:text-3xl">
                    We have your note.
                  </h3>
                  <p className="mt-3 max-w-md text-lg leading-relaxed font-medium text-warm-800">
                    {state.message} If it&apos;s urgent, write us directly — we
                    keep the same inbox.
                  </p>
                  <p className="mt-8 font-mono text-[12px] font-semibold tracking-[0.16em] text-brand-orange uppercase">
                    Since {COMPANY_FOUNDED}
                  </p>
                </div>
                <div className="lg:col-span-5">{ticket}</div>
              </div>
            </FadeIn>
          ) : (
            <FadeIn direction="up">
              <div className="grid items-start gap-8 lg:grid-cols-12">
                <form
                  ref={formRef}
                  action={handleFormAction}
                  className="relative space-y-7 overflow-hidden rounded-xl bg-white p-6 shadow-[0_18px_40px_rgba(238,122,72,0.1)] lg:col-span-7 lg:p-10"
                  noValidate
                >
                  <div className="brand-gradient-bg absolute inset-x-0 top-0 h-1" />
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="eyebrow mb-2">Intake</p>
                      <p className="font-heading text-xl font-extrabold tracking-tight text-dark">
                        Send it over
                      </p>
                    </div>
                    <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                      Live ticket
                    </p>
                  </div>

                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Input
                    label="Your name"
                    placeholder="How should we address you?"
                    maxLength={80}
                    autoComplete="name"
                    error={errors.name?.message || state.errors?.name?.[0]}
                    valid={Boolean(
                      dirtyFields.name &&
                        values.name.length >= 2 &&
                        !errors.name
                    )}
                    {...register("name")}
                  />

                  <Input
                    label="Work email"
                    type="email"
                    placeholder="you@company.com"
                    maxLength={120}
                    autoComplete="email"
                    error={errors.email?.message || state.errors?.email?.[0]}
                    valid={Boolean(
                      dirtyFields.email &&
                        values.email.includes("@") &&
                        !errors.email
                    )}
                    {...register("email")}
                  />

                  <Input
                    label="Company"
                    placeholder="Optional"
                    maxLength={100}
                    autoComplete="organization"
                    error={errors.company?.message || state.errors?.company?.[0]}
                    {...register("company")}
                  />

                  <div>
                    <p className="mb-3 text-[15px] font-semibold text-warm-800">
                      What are you building?
                    </p>
                    <input type="hidden" {...register("service")} />
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => {
                        const selected = values.service === service.title;
                        return (
                          <button
                            key={service.slug}
                            type="button"
                            onClick={() =>
                              setValue(
                                "service",
                                selected ? "" : service.title,
                                { shouldDirty: true }
                              )
                            }
                            className={cn(
                              "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
                              selected
                                ? "brand-gradient-bg text-white shadow-sm"
                                : "bg-warm-100 text-warm-800 hover:bg-white hover:text-dark"
                            )}
                          >
                            {service.title}
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() =>
                          setValue(
                            "service",
                            values.service === "Other" ? "" : "Other",
                            { shouldDirty: true }
                          )
                        }
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors",
                          values.service === "Other"
                            ? "brand-gradient-bg text-white shadow-sm"
                            : "bg-warm-100 text-warm-800 hover:bg-white hover:text-dark"
                        )}
                      >
                        Other / not sure yet
                      </button>
                    </div>
                  </div>

                  <Textarea
                    label="Tell us what you're building"
                    placeholder="A sentence on the product, the constraint, or the deadline is enough."
                    rows={5}
                    maxLength={4000}
                    error={
                      errors.message?.message || state.errors?.message?.[0]
                    }
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

                  <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center">
                    <Magnetic>
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
                    </Magnetic>
                    <p className="text-[13px] font-medium text-warm-700">
                      We read every note.
                    </p>
                  </div>
                </form>

                <div className="lg:sticky lg:top-24 lg:col-span-5">{ticket}</div>
              </div>
            </FadeIn>
          )}
        </Container>
      </section>
    </>
  );
}
