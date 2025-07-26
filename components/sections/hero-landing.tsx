'use client';

import React, { useState, useContext } from "react";
import { ModalContext } from "@/components/modals/providers";

interface HeroLandingProps {
  isPaid?: boolean;
}

export default function HeroLanding({ isPaid = false }: HeroLandingProps) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { setBillingModal } = useContext(ModalContext);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleHumanize = async () => {
    // If user is not paid, show billing modal instead of processing
    if (!isPaid) {
      setBillingModal(true);
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");
    try {
      const res = await fetch("/api/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });
      const data = await res.json();
      if (res.ok) {
        setOutput(data.humanized);
      } else {
        setError(data.error || "An error occurred.");
      }
    } catch (err) {
      setError("An error occurred while connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 p-8">
      <h1 className="text-2xl font-bold mb-4">Text Humanizer</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        <div className="flex-1 flex flex-col">
          <label htmlFor="input" className="mb-2 font-medium">Original Text</label>
          <textarea
            id="input"
            className="border rounded p-2 min-h-[120px] resize-vertical"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your text here..."
          />
        </div>
        <div className="flex flex-col items-center justify-center md:justify-end md:items-start md:mt-8">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded shadow mb-4 md:mb-0 disabled:opacity-50"
            onClick={handleHumanize}
            type="button"
            disabled={loading || !input.trim()}
          >
            {loading ? "Humanizing..." : isPaid ? "Humanize" : "Upgrade to Humanize"}
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
        <div className="flex-1 flex flex-col">
          <label htmlFor="output" className="mb-2 font-medium">Humanized Text</label>
          <textarea
            id="output"
            className="border rounded p-2 min-h-[120px] bg-gray-100 resize-vertical"
            value={output}
            readOnly
            placeholder="The humanized text will appear here..."
          />
        </div>
      </div>
    </section>
  );
}
