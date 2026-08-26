"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { mainNavItems, spineActive, spineItems } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { X, ChevronDown } from "lucide-react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onSearch: () => void;
}

export function MobileMenu({ open, onClose, onSearch }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-warm-900/20 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="paper fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-warm-200 px-5 py-4">
                <Image
                  src="/logo.svg"
                  alt="Kenla Systems"
                  width={120}
                  height={42}
                  className="h-7 w-auto"
                />
                <button
                  onClick={onClose}
                  className="p-2 text-warm-600 hover:text-dark"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav
                className="flex-1 overflow-y-auto px-3 py-4"
                aria-label="Mobile navigation"
              >
                <p className="font-mono mb-3 px-3 text-[10px] tracking-[0.2em] text-warm-400">
                  INDEX
                </p>
                <ul>
                  {spineItems.map((item) => {
                    const active = spineActive(pathname, item.href);
                    const services = mainNavItems.find((nav) => nav.children);
                    return (
                      <li key={item.href}>
                        {item.href === "/services" && services?.children ? (
                          <div>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedItem(
                                  expandedItem === item.href ? null : item.href
                                )
                              }
                              className={cn(
                                "flex w-full items-center justify-between px-3 py-3 text-left",
                                active ? "text-dark" : "text-warm-700"
                              )}
                            >
                              <span className="flex items-center gap-3">
                                <span className="index-num">{item.index}</span>
                                <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
                                  {item.label}
                                </span>
                              </span>
                              <ChevronDown
                                className={cn(
                                  "h-4 w-4 transition-transform duration-200",
                                  expandedItem === item.href && "rotate-180"
                                )}
                              />
                            </button>
                            <AnimatePresence>
                              {expandedItem === item.href && (
                                <motion.ul
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden pl-10"
                                >
                                  <li>
                                    <Link
                                      href={item.href}
                                      onClick={onClose}
                                      className="block py-2.5 text-sm font-medium text-brand-orange"
                                    >
                                      All practices
                                    </Link>
                                  </li>
                                  {services.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        onClick={onClose}
                                        className="block py-2.5 text-sm text-warm-600 hover:text-dark"
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                              "flex items-center gap-3 px-3 py-3",
                              active ? "text-dark" : "text-warm-700"
                            )}
                          >
                            <span className="index-num">{item.index}</span>
                            <span className="font-mono text-[12px] tracking-[0.12em] uppercase">
                              {item.label}
                            </span>
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="space-y-2 border-t border-warm-200 px-5 py-4">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full justify-center"
                  onClick={() => {
                    onClose();
                    onSearch();
                  }}
                >
                  Search
                </Button>
                <Button
                  href="/contact"
                  size="lg"
                  className="w-full justify-center"
                  onClick={onClose}
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
