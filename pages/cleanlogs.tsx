import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Check, Copy } from 'lucide-react';
import { useMemo, useState } from 'react';

type CleaningOptions = {
  removeStackLines: boolean;
  removeFrameworkNoise: boolean;
  keepOnlyErrorLines: boolean;
  dedupeLines: boolean;
};

const defaultOptions: CleaningOptions = {
  removeStackLines: true,
  removeFrameworkNoise: true,
  keepOnlyErrorLines: true,
  dedupeLines: true,
};

function cleanLogs(raw: string, options: CleaningOptions): string {
  const lines = raw.split(/\r?\n/);

  const errorRegex = /Alpine Expression Error:|Uncaught ReferenceError:|TypeError:|SyntaxError:/i;

  const cleaned: string[] = [];

  for (let line of lines) {
    const original = line;

    // Normalize trailing whitespace to make comparisons consistent
    line = line.replace(/\s+$/g, '');

    if (!line.trim()) {
      cleaned.push('');
      continue;
    }

    if (options.removeStackLines && /^\s*at\s+.+/.test(line)) {
      continue;
    }

    if (
      options.removeFrameworkNoise &&
      (/^installHook\.js:\d+/.test(line) ||
        /^livewire\.js\?id=/.test(line) ||
        /flushHandlers|deferHandlingDirectives|initTree|morph2/.test(line))
    ) {
      continue;
    }

    if (options.keepOnlyErrorLines && !errorRegex.test(line)) {
      continue;
    }

    cleaned.push(original);
  }

  const compressed: string[] = [];
  let blankStreak = 0;

  for (const line of cleaned) {
    if (!line.trim()) {
      blankStreak += 1;
      if (blankStreak > 1) continue;
    } else {
      blankStreak = 0;
    }
    compressed.push(line);
  }

  let result = compressed.join('\n');

  if (options.dedupeLines) {
    const seen = new Set<string>();
    const deduped: string[] = [];

    for (const line of compressed) {
      const key = line.trim();
      if (!key) {
        deduped.push(line);
        continue;
      }

      if (seen.has(key)) continue;
      seen.add(key);
      deduped.push(line);
    }

    result = deduped.join('\n');
  }

  return result.trim();
}

export default function CleanLogsPage() {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<CleaningOptions>(defaultOptions);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState<string | null>(null);

  const output = useMemo(() => cleanLogs(input, options), [input, options]);

  const handleOptionChange = (key: keyof CleaningOptions) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopy = async () => {
    setCopyError(null);
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
      setCopyError('Copy failed, please select and copy manually.');
    }
  };

  return (
    <>
      <Head>
        <title>Console Log Cleaner</title>
        <meta
          name="description"
          content="Paste noisy console logs and clean them for Alpine and Livewire stacks."
        />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-brand-50/40 to-accent-50/30">
        <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-brand-200 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
            <div className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800">
              <span>Utility</span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8 space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Cleanup helper
            </p>
            <h1 className="text-3xl font-bold text-zinc-900">Console Log Cleaner</h1>
            <p className="text-zinc-600">
              Paste your Chrome DevTools console output on the left. Toggle the filters to
              strip framework noise, trim stacks, and keep only the error lines you care
              about.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex min-h-[60vh] flex-col">
              <label className="mb-2 text-sm font-semibold text-zinc-800">
                Raw console output
              </label>
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Paste logs from Chrome DevTools here..."
                className="h-full min-h-[60vh] w-full rounded-2xl border border-zinc-200 bg-white/80 p-4 font-mono text-sm text-zinc-800 shadow-sm transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div className="flex min-h-[60vh] flex-col">
              <div className="mb-3 flex flex-wrap items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 px-3 py-3 shadow-sm">
                <span className="text-sm font-semibold text-zinc-900">Options</span>

                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-200"
                    checked={options.removeStackLines}
                    onChange={() => handleOptionChange('removeStackLines')}
                  />
                  remove stack frames
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-200"
                    checked={options.removeFrameworkNoise}
                    onChange={() => handleOptionChange('removeFrameworkNoise')}
                  />
                  remove Livewire/Alpine noise
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-200"
                    checked={options.keepOnlyErrorLines}
                    onChange={() => handleOptionChange('keepOnlyErrorLines')}
                  />
                  keep only error lines
                </label>

                <label className="flex items-center gap-2 text-sm text-zinc-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-zinc-300 text-brand-600 focus:ring-brand-200"
                    checked={options.dedupeLines}
                    onChange={() => handleOptionChange('dedupeLines')}
                  />
                  dedupe identical lines
                </label>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="ml-auto inline-flex items-center gap-2 rounded-full border border-brand-600 bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-200 focus:ring-offset-2"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'Copied' : 'Copy cleaned'}
                </button>
              </div>

              <label className="mb-2 text-sm font-semibold text-zinc-800">
                Cleaned output
              </label>
              <textarea
                readOnly
                value={output}
                placeholder="Cleaned logs will appear here..."
                className="h-full min-h-[60vh] w-full rounded-2xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm text-zinc-800 shadow-inner transition focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
              {copyError && (
                <p className="mt-2 text-sm text-danger-600">{copyError}</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
