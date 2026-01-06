"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b
        ${dark ? "bg-black/70 border-white/10 text-white"
               : "bg-white/70 border-black/10 text-black"}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg">Minimal</span>

          <button
            onClick={() => setDark(!dark)}
            className="text-sm opacity-70 hover:opacity-100 transition"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* Main */}
      <main
        className={`min-h-screen pt-32 transition-colors duration-500
        ${dark ? "bg-black text-white" : "bg-white text-black"}`}
      >
        {/* Hero */}
        <section
          className={`text-center px-6 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Simplicity.
          </h1>

          <p className="mt-6 text-lg opacity-70 max-w-xl mx-auto">
            Experience a clean, focused interface inspired by Apple’s design philosophy.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <AppleButton dark={dark} text="Learn more" />
            <AppleButton dark={dark} text="Get started" filled />
          </div>
        </section>

        {/* Divider */}
        <div className="my-32 border-t opacity-10" />

        {/* Feature Section */}
        <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            "Precision",
            "Performance",
            "Elegance",
          ].map((item) => (
            <div
              key={item}
              className="group transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-medium">{item}</h3>
              <p className="mt-3 opacity-60 group-hover:opacity-80 transition">
                Designed to feel effortless and intuitive.
              </p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-40 py-10 text-center text-sm opacity-50">
          Crafted with care • Inspired by Apple
        </footer>
      </main>
    </>
  );
}

/* Apple-style button */
function AppleButton({
  text,
  filled,
  dark,
}: {
  text: string;
  filled?: boolean;
  dark: boolean;
}) {
  return (
    <button
      className={`px-6 py-3 rounded-full text-sm font-medium transition-all
      ${
        filled
          ? dark
            ? "bg-white text-black hover:scale-105"
            : "bg-black text-white hover:scale-105"
          : dark
          ? "border border-white/30 hover:bg-white hover:text-black"
          : "border border-black/30 hover:bg-black hover:text-white"
      }`}
    >
      {text}
    </button>
  );
}
