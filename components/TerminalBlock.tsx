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
  return <span className="inline-block w-2 translate-y-[2px] border-l-2 border-blue-400 animate-pulse" aria-hidden="true"/>;
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
    <div ref={ref} className="rounded-2xl border bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100 shadow-lg">
      <div className="flex items-center gap-2 border-b border-zinc-800/50 p-3 bg-zinc-900/30">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-3 text-xs text-zinc-400">{title}</span>
      </div>
      <div className="p-4">
        <code className="block whitespace-pre-wrap text-sm leading-6">
          {typed.map((t, i) => (
            <div key={i} className="font-mono">
              <span className="text-zinc-400">$</span> {t}{i === typed.length - 1 && <BlinkingCursor />}
            </div>
          ))}
        </code>
      </div>
    </div>
  );
}
