"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const INTRO_VIDEO = "/videos/intro.mp4";

const LOGOS = [
  { alt: "OpenAI", src: "/logos/openai.svg" },
  { alt: "Anthropic", src: "/logos/anthropic.svg" },
  { alt: "Google Cloud", src: "/logos/googlecloud.svg" },
  { alt: "Amazon Web Services", src: "/logos/amazon.svg" },
  { alt: "Stripe", src: "/logos/stripe.svg" },
  { alt: "HubSpot", src: "/logos/hubspot.svg" },
  { alt: "Vercel", src: "/logos/vercel.svg" },
  { alt: "Supabase", src: "/logos/supabase.svg" },
  { alt: "Notion", src: "/logos/notion.svg" },
  { alt: "Figma", src: "/logos/figma.svg" },
];

function AnnouncementPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
      <span className="relative flex h-6 w-6 items-center justify-center rounded-md bg-brand-gradient brand-glow">
        <Image
          src="/logo.png"
          alt="Livingstone"
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
          priority
        />
      </span>
      <span className="text-xs font-medium uppercase tracking-wider text-white/75">
        The Agent-Based Growth System
      </span>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="inline-block rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
      <a
        href="#contact"
        className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-6 pr-2 text-sm font-semibold text-[#0f2340] transition hover:bg-white/90"
      >
        Book a 15-min call
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient brand-glow">
          <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    if (!next) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
    setMuted(next);
  };

  return (
    <div className="relative z-10 -mt-[150px] w-full">
      <video
        ref={videoRef}
        src={INTRO_VIDEO}
        className="w-full h-auto"
        autoPlay
        loop
        playsInline
        preload="auto"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#010409] via-transparent to-[#010409]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#010409] via-transparent to-[#010409]" />
      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Unmute intro video" : "Mute intro video"}
        className="group absolute bottom-8 right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-black/70 md:bottom-12 md:right-12"
      >
        {muted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

function LogoCloud() {
  return (
    <section className="relative z-20 border-t border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <div className="shrink-0 text-center md:text-left md:max-w-[200px]">
            <p className="text-xs font-medium uppercase tracking-wider text-[#E8B84F]">
              Partnering across
            </p>
            <p className="mt-1 text-sm font-medium text-white/80 leading-snug">
              Leading platforms &amp; infrastructure
            </p>
          </div>
          <div
            className="hidden h-10 w-px bg-white/10 md:block"
            aria-hidden="true"
          />
          <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#010409] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#010409] to-transparent" />
            <InfiniteSlider gap={64} duration={40} durationOnHover={120}>
              {LOGOS.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
                  style={{
                    filter:
                      "invert(100%) brightness(1.4) grayscale(100%) contrast(1.1)",
                  }}
                />
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#010409] pt-32 md:pt-40">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,123,183,0.22),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(232,184,79,0.12),transparent_70%)] blur-3xl" />

        <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
          <div className="flex justify-center">
            <AnnouncementPill />
          </div>

          <h1 className="mt-8 text-[48px] font-semibold leading-[1.02] tracking-tight md:text-[64px] lg:text-[80px]">
            <span className="block text-white">Engineered Growth.</span>
            <span className="block gradient-text">Powered by AI.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-xl">
            We don&apos;t just build your product — we make sure the world sees
            it, trusts it, and buys from it. A true marketing operating system
            for scaling businesses.
          </p>

          <div className="mt-10 flex justify-center">
            <CtaButton />
          </div>
        </div>

        <HeroVideo />
      </section>

      <LogoCloud />
    </>
  );
}
