"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { IndexSpine } from "./IndexSpine";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";
import { TerminalEasterEgg } from "./TerminalEasterEgg";
import { InkCursor } from "./InkCursor";
import { LogoIntro } from "@/components/animations/LogoIntro";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {(pathname === "/" || pathname === "") && <LogoIntro />}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="kenla-icon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6ba29" />
            <stop offset="50%" stopColor="#ee7a48" />
            <stop offset="100%" stopColor="#e95559" />
          </linearGradient>
        </defs>
      </svg>
      <InkCursor />
      <div className="studio-chrome" aria-hidden="true" />
      <Header onSearch={() => setPaletteOpen(true)} />
      <IndexSpine />
      {children}
      <Footer />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
      <TerminalEasterEgg open={terminalOpen} onOpenChange={setTerminalOpen} />
    </>
  );
}
