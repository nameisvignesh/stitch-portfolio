"use client";

import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import CustomCursor from "@/components/CustomCursor";

export default function Work() {
  return (
    <>
      <CustomCursor />
      <main className="pt-xl min-h-screen relative overflow-hidden pb-12">
        {/* Background glow decoration */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Hero Section */}
        <header className="relative px-gutter pt-xl pb-lg max-w-container-max mx-auto">
          <div className="relative z-10">
            <p className="font-code-sm text-code-sm text-primary uppercase mb-sm tracking-[0.2em]">
              Deployment: Production
            </p>
            <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg max-w-3xl mb-md">
              Neural <span className="text-primary italic">Manifestations</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A curated repository of architectural software experiments and deep learning
              modules, optimized for technical scalability and creative expression.
            </p>
          </div>
        </header>

        {/* Bento Grid Portfolio */}
        <section className="px-gutter pb-xl max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
            {/* Large Featured Card */}
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl ai-module-border scanline-effect min-h-[500px]">
              <TiltCard className="w-full h-full p-md flex flex-col justify-end relative z-10">
                <div className="absolute inset-0 z-0">
                  <img
                    className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                    alt="A sophisticated dark tech visualization of an AI neural network with glowing nodes and cyan connection lines."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4tgCdqwZPN_mSAZ_adv6PNtdgwXu6EC8l2WAuYKzjLVUZTQ6ojn0qWtevPRuHR_spzyvBEHHwxO4Y23tANQsylE0S-6kF0xq_jwayHEx4R0WGIM4x1jsl0oF7Ol0WjhnDEs3Noe3Hn_2Dkby-Nc6-X7O1WDrrBnngGhbyt3qfLX_YKoIEb5zh6wQ99-TCnTF5XbXOG22wxaHi7y4aLYSZFhVuGqae0AmPAPgKfr1wxxaqzy4cbF3DUJTOXwgY5beUeAzwkD1noRo"
                  />
                </div>
                <div className="relative z-10 bg-surface/60 backdrop-blur-md p-lg rounded-lg border border-white/5">
                  <div className="flex flex-wrap gap-xs mb-sm">
                    <span className="bg-primary/10 text-primary px-xs py-1 rounded text-[10px] font-label-caps border border-primary/20">
                      PYTORCH
                    </span>
                    <span className="bg-primary/10 text-primary px-xs py-1 rounded text-[10px] font-label-caps border border-primary/20">
                      CUDA
                    </span>
                    <span className="bg-primary/10 text-primary px-xs py-1 rounded text-[10px] font-label-caps border border-primary/20">
                      NEXT.JS
                    </span>
                  </div>
                  <h3 className="font-headline-xl text-headline-xl mb-xs">
                    Aegis Neural Kernel
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-xl">
                    Real-time edge detection and predictive analysis engine for autonomous
                    drone swarms. Achieving 45fps on mobile silicon with 99.2% accuracy.
                  </p>
                  <div className="flex items-center gap-md">
                    <a
                      className="flex items-center gap-xs font-label-caps text-label-caps text-primary hover:underline"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        terminal
                      </span>
                      View Source
                    </a>
                    <a
                      className="flex items-center gap-xs font-label-caps text-label-caps text-on-surface hover:text-primary transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        open_in_new
                      </span>
                      Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Vertical Card */}
            <div className="md:col-span-4 group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,219,233,0.1)] border border-white/5">
              <TiltCard className="glass-panel w-full h-full p-md flex flex-col justify-between">
                <div className="h-48 rounded-lg overflow-hidden mb-md border border-white/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-110"
                    alt="Abstract 3D glass structures floating in a dark void."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1r5hZe0eSraB7Hl40tzFekxF7QKWOfjXaufijaS4BcfC_hVY6aik2Zr_t18l8w7kytW90HA70o3aUVHLoQxMP2Xm43RwvCoaZ_2sTnsoyXasu_5hMO-SggU1BURtgqn30u-3mQhuPCe6M-q3fn_BJl4ZYNC_tcvpY25g7K6kjs7pPXIGAcKbmNvILvAq8kpjr3xGqI85FQrecnQZy0T1uYVAuDcxq77y-EIaWPkJvQ8o3lqGGkIspHwO14ME-v74C8WhCapik5Ro"
                  />
                </div>
                <div>
                  <div className="flex gap-xs mb-sm">
                    <span className="bg-secondary/10 text-secondary-fixed-dim px-xs py-1 rounded text-[10px] font-label-caps">
                      TYPESCRIPT
                    </span>
                    <span className="bg-secondary/10 text-secondary-fixed-dim px-xs py-1 rounded text-[10px] font-label-caps">
                      RUST
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-xs">
                    Prism DB
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                    A distributed vector database built for high-concurrency LLM
                    embeddings.
                  </p>
                </div>
                <a
                  className="flex items-center justify-between font-label-caps text-label-caps text-outline hover:text-on-surface transition-all"
                  href="#"
                >
                  <span>EST. 2023</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </TiltCard>
            </div>

            {/* Secondary Grid Layer */}
            <div className="md:col-span-4 rounded-xl border border-white/5">
              <TiltCard className="glass-panel p-md h-full hover:bg-surface-container-high transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-lg">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        dataset
                      </span>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline">
                      v0.4.2
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-xs">
                    Ether Ledger
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                    Smart contract auditor with automated threat detection and gas
                    optimization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-white/5">
                  <span className="text-[10px] font-code-sm text-outline">Solidity</span>
                  <span className="text-[10px] font-code-sm text-outline">Hardhat</span>
                  <span className="text-[10px] font-code-sm text-outline">React</span>
                </div>
              </TiltCard>
            </div>

            <div className="md:col-span-4 rounded-xl border border-white/5">
              <TiltCard className="glass-panel p-md h-full hover:bg-surface-container-high transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-lg">
                    <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center text-tertiary">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        psychology
                      </span>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline">
                      Active
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-xs">
                    Synapse UI
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                    A design system generator powered by semantic analysis of user brand
                    assets.
                  </p>
                </div>
                <div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-white/5">
                  <span className="text-[10px] font-code-sm text-outline">Python</span>
                  <span className="text-[10px] font-code-sm text-outline">Tailwind</span>
                  <span className="text-[10px] font-code-sm text-outline">GPT-4</span>
                </div>
              </TiltCard>
            </div>

            <div className="md:col-span-4 rounded-xl border border-white/5">
              <TiltCard className="glass-panel p-md h-full hover:bg-surface-container-high transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-lg">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary-fixed-dim">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        terminal
                      </span>
                    </div>
                    <span className="font-code-sm text-code-sm text-outline">
                      Stable
                    </span>
                  </div>
                  <h4 className="font-headline-md text-headline-md mb-xs">
                    Onyx Shell
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                    A performant terminal emulator written in C++ with integrated AI
                    co-pilot.
                  </p>
                </div>
                <div className="flex flex-wrap gap-xs mt-auto pt-md border-t border-white/5">
                  <span className="text-[10px] font-code-sm text-outline">C++</span>
                  <span className="text-[10px] font-code-sm text-outline">OpenGL</span>
                  <span className="text-[10px] font-code-sm text-outline">Lua</span>
                </div>
              </TiltCard>
            </div>

            {/* Statistics / Technical Stats Bento Cell */}
            <div className="md:col-span-12 glass-panel rounded-xl p-lg border border-white/5 flex flex-col md:flex-row items-center justify-between gap-lg overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-headline-md text-headline-md mb-xs">
                  Engineering Metrics
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  System performance across global deployments.
                </p>
              </div>
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-xl w-full md:w-auto">
                <div className="text-center md:text-left">
                  <span className="font-display-lg text-[32px] text-primary block">
                    14.2k
                  </span>
                  <span className="font-code-sm text-code-sm text-outline">COMMITS</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-display-lg text-[32px] text-secondary-fixed-dim block">
                    99.9%
                  </span>
                  <span className="font-code-sm text-code-sm text-outline">UPTIME</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-display-lg text-[32px] text-tertiary block">
                    2.4ms
                  </span>
                  <span className="font-code-sm text-code-sm text-outline">LATENCY</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="font-display-lg text-[32px] text-on-surface block">
                    ∞
                  </span>
                  <span className="font-code-sm text-code-sm text-outline">
                    ITERATIONS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-container-max mx-auto px-gutter py-xl">
          <div className="ai-module-border rounded-2xl p-xl flex flex-col items-center text-center">
            <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-md">
              Ready for the <span className="text-primary italic">next sync?</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
              I'm currently accepting partnerships for high-impact AI engineering
              projects and architectural consulting.
            </p>
            <div className="flex flex-col md:flex-row gap-md">
              <Link
                href="/connect"
                className="bg-primary text-on-primary font-label-caps text-label-caps px-xl py-md rounded-lg neon-glow transition-all active:scale-95 text-center"
              >
                Initialize Connection
              </Link>
              <button className="glass-panel border border-primary/30 text-primary font-label-caps text-label-caps px-xl py-md rounded-lg hover:bg-primary/5 transition-all active:scale-95 text-center">
                Download Manifest
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
