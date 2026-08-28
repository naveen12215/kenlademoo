"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { COMPANY_EMAIL, COMPANY_FOUNDED, COMPANY_NAME } from "@/lib/constants";

const PROMPT = "kenla ~";

const replies: Record<string, string> = {
  help: "whoami · stack · contact · projects · clear",
  whoami: `${COMPANY_NAME} — custom software services since ${COMPANY_FOUNDED}. Chennai engineering. Delivery for the United States, India, and the Middle East.`,
  stack:
    "custom software · public sector · generative AI · healthcare · cloud, mobile, blockchain.",
  contact: `Venkat Munsif · +91 95000 62603 · venkatm@kenlasystems.com · ${COMPANY_EMAIL}`,
  projects:
    "LMA · Field Information System · IPOR/IV&V · Insight 360 · Annie ACS · Saguaro Health. Type `open projects` to go look.",
};

interface TerminalEasterEggProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TerminalEasterEgg({
  open,
  onOpenChange,
}: TerminalEasterEggProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<string[]>([
    "Kenla console. Type help.",
  ]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);
      if (event.key === "`" && !event.metaKey && !event.ctrlKey && !typing) {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 30);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  function run(command: string) {
    const cmd = command.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setLines([]);
      return;
    }

    if (cmd === "open projects") {
      window.location.href = "/projects";
      return;
    }

    const reply = replies[cmd] ?? `command not found: ${cmd}. Try help.`;
    setLines((current) => [...current, `${PROMPT} ${command}`, reply]);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-4 right-4 z-[60] w-[min(100%-2rem,22rem)] overflow-hidden rounded-md border border-warm-200 bg-warm-50 shadow-xl"
        >
          <div className="flex items-center justify-between border-b border-warm-200 px-3 py-2">
            <p className="font-mono text-[11px] font-medium tracking-wide text-warm-600">
              kenla — console
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="text-xs text-warm-500 hover:text-dark"
            >
              close
            </button>
          </div>
          <div className="max-h-56 overflow-y-auto px-3 py-3 font-mono text-[11px] leading-relaxed text-warm-700">
            {lines.map((line, index) => (
              <p key={`${line}-${index}`} className="whitespace-pre-wrap">
                {line}
              </p>
            ))}
          </div>
          <form
            className="flex items-center gap-2 border-t border-warm-200 px-3 py-2"
            onSubmit={(event) => {
              event.preventDefault();
              run(value);
              setValue("");
            }}
          >
            <span className="font-mono text-[11px] text-brand-orange">
              {PROMPT}
            </span>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="flex-1 bg-transparent font-mono text-[11px] text-dark focus:outline-none"
              aria-label="Console command"
            />
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
