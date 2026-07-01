"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";

export default function Stack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      name: "LLM Orchestration (LangChain/LlamaIndex)",
      level: 98,
      desc: "Building complex RAG pipelines and autonomous agentic workflows.",
    },
    {
      name: "Transformer Fine-tuning",
      level: 85,
      desc: "PEFT, LoRA, and QLoRA strategies for domain-specific model adaptation.",
    },
    {
      name: "Computer Vision (PyTorch/OpenCV)",
      level: 92,
      desc: "Real-time object detection and semantic segmentation for edge devices.",
    },
    {
      name: "Vector Databases (Pinecone/Milvus)",
      level: 95,
      desc: "Designing high-concurrency similarity search systems and metadata schemas.",
    },
  ];

  return (
    <main className="pt-xl pb-xl max-w-container-max mx-auto px-gutter min-h-screen relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-[30%] -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header Section */}
      <header className="mb-xl pt-lg relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md">
          <div className="max-w-2xl">
            <div className="flex items-center gap-xs mb-sm">
              <span className="material-symbols-outlined text-primary text-sm">
                terminal
              </span>
              <span className="font-code-sm text-code-sm text-primary uppercase tracking-[0.2em]">
                System Capability Matrix
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface mb-md">
              Architectural <span className="text-primary-fixed-dim">Stack.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A comprehensive overview of the technical frameworks and cognitive
              architectures I leverage to build production-grade AI systems.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="font-code-sm text-code-sm text-outline mb-xs">
              LAST_SYNC: {new Date().getFullYear()}.11.08
            </div>
            <div className="font-code-sm text-code-sm text-outline">
              STATUS: OPTIMIZED_FOR_SCALE
            </div>
          </div>
        </div>
      </header>

      {/* Main Stack Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-md items-start relative z-10">
        {/* Column 1: AI/ML Engineering (Large Featured Section) */}
        <section className="lg:col-span-8 flex flex-col gap-md">
          <TiltCard className="ai-module rounded-xl p-lg glass-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-md mb-lg">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary text-[32px]">
                  neurology
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">
                  AI & Neural Architecture
                </h2>
              </div>
              <span className="px-sm py-xs bg-primary/10 border border-primary/20 rounded-full font-label-caps text-label-caps text-primary self-start sm:self-auto">
                Core Specialization
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-label-caps text-label-caps text-on-surface uppercase">
                      {skill.name}
                    </span>
                    <span className="font-code-sm text-code-sm text-secondary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-primary rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                      style={{
                        width: mounted ? `${skill.level}%` : "0%",
                      }}
                    >
                      <div className="absolute inset-0 progress-shimmer"></div>
                    </div>
                  </div>
                  <p className="font-body-md text-on-surface-variant opacity-70">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Core Development Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <TiltCard className="glass-card rounded-xl p-md">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary">
                  code_blocks
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Core Systems
                </h3>
              </div>
              <div className="flex flex-wrap gap-xs">
                <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface-variant font-code-sm text-code-sm border border-white/5">
                  Python (Expert)
                </span>
                <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface-variant font-code-sm text-code-sm border border-white/5">
                  Rust (Advanced)
                </span>
                <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface-variant font-code-sm text-code-sm border border-white/5">
                  TypeScript
                </span>
                <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface-variant font-code-sm text-code-sm border border-white/5">
                  Go
                </span>
                <span className="px-sm py-xs bg-surface-container-highest rounded text-on-surface-variant font-code-sm text-code-sm border border-white/5">
                  C++
                </span>
              </div>
              <div className="mt-lg pt-md border-t border-white/5">
                <p className="font-body-md text-on-surface-variant italic">
                  "Performance-first code generation with an emphasis on memory safety."
                </p>
              </div>
            </TiltCard>

            <TiltCard className="glass-card rounded-xl p-md border-primary/20">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary">
                  database
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Data Engine
                </h3>
              </div>
              <div className="space-y-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    Distributed Pipelines
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    Real-time Streaming
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
                    <div className="w-2 h-2 rounded-full bg-surface-container-highest"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-on-surface">
                    ETL/ELT Logic
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary glow-cyan"></div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Column 2: Architecture & Tools (Sidebar) */}
        <aside className="lg:col-span-4 flex flex-col gap-md h-full">
          <TiltCard className="glass-card rounded-xl p-md flex-grow">
            <div className="flex items-center gap-sm mb-lg">
              <span className="material-symbols-outlined text-primary">hub</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Architecture
              </h3>
            </div>
            <div className="space-y-lg">
              <div className="group">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    cloud
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface">
                    Cloud Native (AWS/GCP)
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm border-l-2 border-primary/20 pl-sm ml-2">
                  Serverless functions, container orchestration via K8s, and IAM
                  security protocols.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    monitoring
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface">
                    MLOps & Monitoring
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm border-l-2 border-primary/20 pl-sm ml-2">
                  Automated model deployment (CI/CD), drift detection, and
                  observability with Prometheus.
                </p>
              </div>
              <div className="group">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    security
                  </span>
                  <span className="font-label-caps text-label-caps text-on-surface">
                    AI Safety & Ethics
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant text-sm border-l-2 border-primary/20 pl-sm ml-2">
                  Implementation of guardrails, adversarial testing, and bias
                  mitigation frameworks.
                </p>
              </div>
            </div>
            <div className="mt-xl p-md bg-primary-container/10 rounded-lg border border-primary/10">
              <div className="font-code-sm text-code-sm text-primary mb-xs">
                ARCH_PRINCIPLE_01
              </div>
              <p className="font-body-md text-on-surface text-sm">
                Scalability is not an afterthought; it's the foundation of the neural
                design process.
              </p>
            </div>
          </TiltCard>

          {/* Tech Icon Grid */}
          <TiltCard className="glass-card rounded-xl p-md">
            <h4 className="font-label-caps text-label-caps text-outline mb-md uppercase">
              Ecosystem Tools
            </h4>
            <div className="grid grid-cols-4 gap-sm">
              {[
                "terminal",
                "storage",
                "api",
                "cloud_done",
                "memory",
                "rocket_launch",
                "settings_ethernet",
                "biotech",
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="aspect-square glass-card rounded flex items-center justify-center hover:bg-primary/10 transition-colors group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </TiltCard>
        </aside>
      </div>

      {/* Call to Action Area */}
      <section className="mt-xl text-center relative z-10">
        <TiltCard className="glass-card p-xl rounded-xl inline-block border-secondary/20">
          <h2 className="font-headline-md text-headline-md mb-md">
            Ready to build the future of intelligence?
          </h2>
          <div className="flex gap-md justify-center">
            <Link
              href="/work"
              className="px-lg py-sm bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:glow-cyan transition-all duration-300 text-center"
            >
              View Projects
            </Link>
            <button className="px-lg py-sm border border-secondary text-secondary rounded-lg font-label-caps text-label-caps hover:bg-secondary/10 transition-all text-center">
              Download CV
            </button>
          </div>
        </TiltCard>
      </section>
    </main>
  );
}
