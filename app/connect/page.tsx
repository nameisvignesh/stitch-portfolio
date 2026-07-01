"use client";

import React, { useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import TiltCard from "@/components/TiltCard";

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "collab",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "transmitting" | "success">("idle");
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStatus !== "idle") return;

    setFormStatus("transmitting");

    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "collab",
        message: "",
      });

      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <ParticleBackground />
      <div className="bg-glow"></div>

      <main className="flex-grow flex items-center justify-center pt-xl px-gutter max-w-container-max mx-auto w-full min-h-screen relative z-10 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-start w-full py-xl">
          {/* Left Column: Branding & Info */}
          <div className="md:col-span-5 flex flex-col gap-lg mt-12 md:mt-24">
            <div className="space-y-md">
              <span className="font-code-sm text-code-sm text-primary uppercase tracking-[0.2em] flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                Status: Receiving Incoming Connections
              </span>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-surface leading-tight">
                Initiate
                <br />
                Transmission.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Have a complex architectural challenge or a visionary project? Open a
                communication channel. I specialize in turning high-level concepts into
                scalable machine-level reality.
              </p>
            </div>

            <div className="space-y-md">
              <h3 className="font-label-caps text-label-caps text-on-surface/50 uppercase">
                Global Nodes
              </h3>
              <div className="flex flex-col gap-sm">
                <a
                  className="group flex items-center gap-md p-sm glass-panel rounded-xl hover:bg-white/5 transition-all duration-300"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container text-primary">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface">
                      GitHub
                    </span>
                    <span className="font-code-sm text-code-sm text-outline">
                      /vignesh-exe-dev
                    </span>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="group flex items-center gap-md p-sm glass-panel rounded-xl hover:bg-white/5 transition-all duration-300"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container text-primary">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-label-caps text-on-surface">
                      LinkedIn
                    </span>
                    <span className="font-code-sm text-code-sm text-outline">
                      /in/vignesh-exe
                    </span>
                  </div>
                  <span className="material-symbols-outlined ml-auto text-outline group-hover:text-primary transition-colors">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            <div className="p-md border-l-2 border-primary/30 bg-primary/5 rounded-r-xl">
              <p className="font-code-sm text-code-sm text-on-surface-variant italic">
                "The best way to predict the future is to build it, line by line."
              </p>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="md:col-span-7 mt-12 md:mt-24">
            <TiltCard className="glass-panel p-lg rounded-xl relative overflow-hidden">
              {/* Subtle Corner Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px]"></div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-md relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-caps text-label-caps text-on-surface uppercase flex items-center"
                      htmlFor="name"
                    >
                      Identity
                      {focusedInput === "name" && (
                        <span className="terminal-cursor"></span>
                      )}
                    </label>
                    <input
                      className="bg-surface-container-lowest border border-white/10 rounded-lg p-md font-code-sm text-code-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all placeholder:text-outline/30 uppercase"
                      id="name"
                      placeholder="E.G. ALAN TURING"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("name")}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                  <div className="flex flex-col gap-xs">
                    <label
                      className="font-label-caps text-label-caps text-on-surface uppercase flex items-center"
                      htmlFor="email"
                    >
                      Return Path
                      {focusedInput === "email" && (
                        <span className="terminal-cursor"></span>
                      )}
                    </label>
                    <input
                      className="bg-surface-container-lowest border border-white/10 rounded-lg p-md font-code-sm text-code-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all placeholder:text-outline/30"
                      id="email"
                      placeholder="USER@PROTO.DOMAIN"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-caps text-label-caps text-on-surface uppercase flex items-center"
                    htmlFor="subject"
                  >
                    Header Code
                    {focusedInput === "subject" && (
                      <span className="terminal-cursor"></span>
                    )}
                  </label>
                  <select
                    className="bg-surface-container-lowest border border-white/10 rounded-lg p-md font-code-sm text-code-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all appearance-none cursor-pointer"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("subject")}
                    onBlur={() => setFocusedInput(null)}
                  >
                    <option value="collab">COLLABORATION_REQUEST</option>
                    <option value="consult">ARCHITECTURE_CONSULT</option>
                    <option value="hire">RECRUITMENT_INQUIRY</option>
                    <option value="other">GENERIC_PACKET</option>
                  </select>
                </div>

                <div className="flex flex-col gap-xs">
                  <label
                    className="font-label-caps text-label-caps text-on-surface uppercase flex items-center"
                    htmlFor="message"
                  >
                    Payload
                    {focusedInput === "message" && (
                      <span className="terminal-cursor"></span>
                    )}
                  </label>
                  <textarea
                    className="bg-surface-container-lowest border border-white/10 rounded-lg p-md font-code-sm text-code-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none transition-all placeholder:text-outline/30 resize-none uppercase"
                    id="message"
                    placeholder="DESCRIBE THE MISSION PARAMETERS..."
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-md mt-sm">
                  <div className="flex items-center gap-xs">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="font-code-sm text-code-sm text-outline uppercase tracking-tighter">
                      Encryption: AES-256 Enabled
                    </span>
                  </div>

                  <button
                    className={`font-label-caps text-label-caps px-xl py-md rounded-lg flex items-center gap-sm group transition-all duration-300 w-full sm:w-auto justify-center ${
                      formStatus === "transmitting"
                        ? "bg-primary/50 text-on-primary cursor-not-allowed"
                        : formStatus === "success"
                        ? "bg-green-500 text-white"
                        : "bg-primary text-on-primary hover:scale-105 active:scale-95 neon-glow-hover"
                    }`}
                    type="submit"
                    disabled={formStatus !== "idle"}
                  >
                    {formStatus === "transmitting" ? (
                      <>
                        <span className="material-symbols-outlined animate-spin text-[18px]">
                          sync
                        </span>
                        Transmitting...
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <span className="material-symbols-outlined text-[18px]">
                          check_circle
                        </span>
                        Transmission Received
                      </>
                    ) : (
                      <>
                        Send Transmission
                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                          send
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </TiltCard>
          </div>
        </div>
      </main>
    </>
  );
}
