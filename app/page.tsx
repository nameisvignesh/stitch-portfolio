"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [step, setStep] = useState(0);

  const command = "initialize_agent --mode=autonomous";
  const secondCommand = "vignesh.status";

  useEffect(() => {
    if (step === 0) {
      // Type first command
      if (typingIndex < command.length) {
        const timeout = setTimeout(() => {
          setCurrentInput((prev) => prev + command[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [...prev, `$ ${command}`]);
          setCurrentInput("");
          setTypingIndex(0);
          setStep(1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    } else if (step === 1) {
      // Print logs
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [
          ...prev,
          "// Connecting to neural-network-cluster-7...",
        ]);
        setStep(2);
      }, 400);
      return () => clearTimeout(timeout);
    } else if (step === 2) {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, "✔ Handshake verified."]);
        setStep(3);
      }, 300);
      return () => clearTimeout(timeout);
    } else if (step === 3) {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, "✔ Latency: 14ms"]);
        setStep(4);
      }, 200);
      return () => clearTimeout(timeout);
    } else if (step === 4) {
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, "✔ Knowledge base: Synced"]);
        setStep(5);
      }, 300);
      return () => clearTimeout(timeout);
    } else if (step === 5) {
      // Type second command
      if (typingIndex < secondCommand.length) {
        const timeout = setTimeout(() => {
          setCurrentInput((prev) => prev + secondCommand[typingIndex]);
          setTypingIndex((prev) => prev + 1);
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setTerminalLines((prev) => [...prev, `$ ${secondCommand}`]);
          setCurrentInput("");
          setStep(6);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [step, typingIndex]);

  return (
    <main className="relative min-h-screen pt-xl neural-grid overflow-hidden flex flex-col justify-center">
      {/* Background radial glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-container-max mx-auto px-gutter w-full py-20 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          {/* Hero Content */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="mb-sm self-start inline-flex items-center gap-xs px-sm py-xs glass-panel rounded-full border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-code-sm text-code-sm text-primary uppercase tracking-widest">
                Architecting Autonomous Systems
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg mb-md leading-none">
              <span className="text-on-surface block">Designing the</span>
              <span className="text-primary text-glow">Neural Future.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
              Vignesh is a systems architect bridging the gap between raw compute
              and human intuition. Specializing in high-performance AI infrastructure
              and distributed intelligence.
            </p>
            <div className="flex flex-wrap items-center gap-md">
              <Link
                href="/work"
                className="bg-primary text-on-primary font-label-caps text-label-caps px-lg py-md rounded transition-all hover:scale-105 active:scale-95 neon-glow-primary text-center"
              >
                Explore Projects
              </Link>
              <Link
                href="/#terminal"
                className="glass-panel text-on-surface font-label-caps text-label-caps px-lg py-md rounded transition-all hover:bg-white/5 flex items-center gap-sm group text-center"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                Launch Terminal
              </Link>
            </div>
          </div>

          {/* Terminal Visual */}
          <div className="md:col-span-5 relative hidden md:block" id="terminal">
            <TiltCard className="glass-panel rounded-lg overflow-hidden border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Terminal Header */}
              <div className="bg-surface-container-highest px-md py-sm flex items-center justify-between border-b border-white/5">
                <div className="flex gap-xs">
                  <div className="w-3 h-3 rounded-full bg-error/40"></div>
                  <div className="w-3 h-3 rounded-full bg-tertiary/40"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim/40"></div>
                </div>
                <span className="font-code-sm text-code-sm text-outline opacity-50">
                  vignesh --bash
                </span>
              </div>
              {/* Terminal Body */}
              <div className="p-md font-code-sm text-code-sm text-on-surface-variant leading-relaxed min-h-[220px]">
                {terminalLines.map((line, i) => {
                  if (line.startsWith("$")) {
                    return (
                      <div key={i} className="flex gap-sm mb-xs">
                        <span className="text-primary">$</span>
                        <span>{line.substring(2)}</span>
                      </div>
                    );
                  } else if (line.startsWith("✔")) {
                    return (
                      <div
                        key={i}
                        className="text-secondary-fixed-dim mb-xs flex items-center gap-sm"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          check_circle
                        </span>
                        {line.substring(2)}
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="text-outline mb-sm italic">
                        {line}
                      </div>
                    );
                  }
                })}
                {step !== 6 && (
                  <div className="flex gap-sm">
                    {step === 0 || step === 5 ? (
                      <>
                        <span className="text-primary">$</span>
                        <span>
                          {currentInput}
                          <span className="terminal-cursor"></span>
                        </span>
                      </>
                    ) : (
                      <span className="terminal-cursor"></span>
                    )}
                  </div>
                )}
                {step === 6 && (
                  <div className="text-primary font-bold mt-sm animate-pulse">
                    SYS_STATUS: ACTIVE & COGNITIVE
                  </div>
                )}
              </div>
            </TiltCard>

            {/* Floating Tech Badge */}
            <div className="absolute -bottom-6 -left-6 glass-panel p-md rounded-lg border-primary/20 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-sm mb-xs">
                <span className="material-symbols-outlined text-primary">
                  psychology
                </span>
                <span className="font-label-caps text-label-caps">
                  Core Competency
                </span>
              </div>
              <div className="font-headline-md text-headline-md text-on-surface">
                LLM Orchestration
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Section (Work) */}
      <section className="py-xl bg-surface-container-lowest relative z-10" id="work">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-lg">
            <div>
              <span className="font-code-sm text-code-sm text-primary uppercase tracking-widest mb-xs block">
                Portfolio
              </span>
              <h2 className="font-headline-xl text-headline-xl">Selected Systems</h2>
            </div>
            <Link
              href="/work"
              className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-xs"
            >
              View Archive
              <span className="material-symbols-outlined text-[14px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Large Project */}
            <Link
              href="/work"
              className="md:col-span-2 relative overflow-hidden rounded-xl group cursor-pointer block h-[450px]"
            >
              <TiltCard className="glass-panel w-full h-full p-md flex flex-col justify-end relative z-10">
                <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9vQwHR57bkANB8jbeGn065tS2nIOf5AFiU1A3KQ2nKIFJHH_25n-D1reINGYsh79AQuxgXpL_uGO6Bc3MYTp35UC8DHNH6HVPno-gfDSJ_5fddAx2ysLAzJpqRGG7xrTfGSgvqv3GK2e-KOU4MBfL5uSag2oYR7yzpzyejFPm6raA1LRLtfM_6-qcoEoIRjYZsvCe5ywxB6ZYdTbXCl7u7jK1TVDhu4uUFgQTpklVrMiEz5AntVKyIpOU8fPETQLF2sZ_hBYBAwo')",
                    }}
                  ></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="flex gap-xs mb-sm">
                    <span className="bg-primary/20 text-primary px-sm py-xs rounded text-label-caps font-label-caps">
                      Infrastructure
                    </span>
                    <span className="bg-white/10 text-on-surface-variant px-sm py-xs rounded text-label-caps font-label-caps">
                      2024
                    </span>
                  </div>
                  <h3 className="font-headline-xl text-headline-xl mb-xs group-hover:text-primary transition-colors">
                    OmniCore Engine
                  </h3>
                  <p className="text-on-surface-variant max-w-md font-body-md">
                    A distributed inference engine capable of processing 4 trillion tokens
                    per second across heterogeneous GPU clusters.
                  </p>
                </div>
              </TiltCard>
            </Link>

            {/* Secondary Projects */}
            <div className="flex flex-col gap-md">
              <Link href="/work" className="group cursor-pointer">
                <TiltCard className="glass-panel rounded-xl p-md border-white/5 hover:border-primary/30 transition-all">
                  <div className="w-full h-32 rounded bg-surface mb-md overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBB3QYXIQsKWtBmKFcLf0umNPk4e-xPlnoPstcqrhIhZgNoIOIgm8su8kza5iT6b5lHUmF5kuxM1mekrlaW_CRDEGVYKU8WlLfOoKAJZPv_n-p9bHwEOcRmkXswNsRl_Tgg058Bz7dvym9FVdMj_0fGNrQ5URd0Z_UFwlabl2kzABjYvF7Grg-p9Oa77Yeqruxs223QUIU-4AkOfBRWRKLusSdcz2GPxlDR_CMLMhYY-0ZKJ3VTF0a0-ZcAwx712rGi70OsADfzaik')",
                      }}
                    ></div>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-xs group-hover:text-primary transition-colors">
                    Synapse v2
                  </h4>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    Low-latency vector database for real-time agent memory retrieval.
                  </p>
                </TiltCard>
              </Link>

              <Link href="/work" className="group cursor-pointer">
                <TiltCard className="glass-panel rounded-xl p-md border-white/5 hover:border-primary/30 transition-all">
                  <div className="w-full h-32 rounded bg-surface mb-md overflow-hidden relative">
                    <div
                      className="w-full h-full bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAJsCoeJl3XI7tsuEfr19bXO_TRcTuZ6lIowbvzfNZwK4FkAzhgdmvfYSFh3H1fekZKWAYQv8A6HPrBQnyCuZsqnPUb-cUajC00486QGnejgKvZYZsgs5AGgMlOsLIUVX5Ot6B8QQ5UrASk2Bp0L31KNihjAgqEUvko-KluVISbHT8IeunkEx11Jpgeartl3dawifpcrPVgxkc9LCHX-CuLPAIv4EXpmAubRz9mUPhCB_wamWf2qjTUK4BkYzTdULkJAUBQRpCtF4')",
                      }}
                    ></div>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-xs group-hover:text-primary transition-colors">
                    Guardian Protocol
                  </h4>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    Automated security layering for autonomous LLM deployments.
                  </p>
                </TiltCard>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section className="py-xl relative z-10" id="stack">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-xl">
            <h2 className="font-headline-xl text-headline-xl mb-md">The Toolchain</h2>
            <p className="text-on-surface-variant font-body-lg max-w-2xl mx-auto">
              Systems are only as strong as their components. I build with
              industry-leading technologies that prioritize scalability and resilience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
            <Link href="/stack" className="block">
              <TiltCard className="flex flex-col items-center p-lg glass-panel rounded-xl hover:bg-primary/5 transition-colors group text-center h-full">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-primary mb-md transition-colors">
                  terminal
                </span>
                <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  Rust
                </span>
                <span className="font-code-sm text-code-sm text-outline">
                  Memory Safety
                </span>
              </TiltCard>
            </Link>

            <Link href="/stack" className="block">
              <TiltCard className="flex flex-col items-center p-lg glass-panel rounded-xl hover:bg-primary/5 transition-colors group text-center h-full">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-primary mb-md transition-colors">
                  memory
                </span>
                <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  PyTorch
                </span>
                <span className="font-code-sm text-code-sm text-outline">
                  Model Architecture
                </span>
              </TiltCard>
            </Link>

            <Link href="/stack" className="block">
              <TiltCard className="flex flex-col items-center p-lg glass-panel rounded-xl hover:bg-primary/5 transition-colors group text-center h-full">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-primary mb-md transition-colors">
                  cloud
                </span>
                <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  Kubernetes
                </span>
                <span className="font-code-sm text-code-sm text-outline">
                  Orchestration
                </span>
              </TiltCard>
            </Link>

            <Link href="/stack" className="block">
              <TiltCard className="flex flex-col items-center p-lg glass-panel rounded-xl hover:bg-primary/5 transition-colors group text-center h-full">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-primary mb-md transition-colors">
                  database
                </span>
                <span className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  PostgreSQL
                </span>
                <span className="font-code-sm text-code-sm text-outline">
                  Persistence
                </span>
              </TiltCard>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
