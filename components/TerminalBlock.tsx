import React, { useEffect, useRef, useState } from "react";

function useTypeLines(lines: string[], isActive: boolean, speed = 24, lineDelay = 350) {
  const [typed, setTyped] = useState(Array(lines.length).fill(""));
  useEffect(() => {
    if (!isActive) return;
    let lineIdx = 0;
    let charIdx = 0;
    let timer: NodeJS.Timeout;
    setTyped(Array(lines.length).fill(""));

    const typeNext = () => {
      const current = lines[lineIdx] ?? "";
      if (charIdx < current.length) {
        setTyped((prev) => {
          const copy = [...prev];
          copy[lineIdx] = current.slice(0, charIdx + 1);
          return copy;
        });
        charIdx += 1;
        timer = setTimeout(typeNext, speed);
      } else {
        lineIdx += 1;
        charIdx = 0;
        if (lineIdx < lines.length) timer = setTimeout(typeNext, lineDelay);
      }
    };

    typeNext();
    return () => clearTimeout(timer);
  }, [lines, isActive, speed, lineDelay]);
  return typed;
}

function BlinkingCursor() {
  return <span className="inline-block w-2 translate-y-[2px] border-l-2 border-brand-400 animate-pulse" aria-hidden="true"/>;
}

interface TerminalBlockProps {
  title: string;
  lines: string[];
}

export default function TerminalBlock({ title, lines }: TerminalBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const typed = useTypeLines(lines, inView, 18, 280);

  return (
    <div ref={ref} className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 border-b border-zinc-800/50 p-4 bg-zinc-900/50">
        <div className="h-3 w-3 rounded-full bg-danger-500 shadow-lg shadow-danger-500/30" />
        <div className="h-3 w-3 rounded-full bg-warning-500 shadow-lg shadow-warning-500/30" />
        <div className="h-3 w-3 rounded-full bg-success-500 shadow-lg shadow-success-500/30" />
        <span className="ml-3 text-sm text-zinc-400 font-medium">{title}</span>
      </div>
      <div className="p-6 min-h-[280px] flex flex-col justify-center">
        <code className="block whitespace-pre-wrap text-base leading-7">
          {typed.map((t, i) => (
            <div key={i} className="font-mono mb-2">
              <span className="text-success-400 font-bold">$</span>{" "}
              <span className="text-zinc-100">{t}</span>
              {i === typed.length - 1 && <BlinkingCursor />}
            </div>
          ))}
        </code>
      </div>
    </div>
  );
}
