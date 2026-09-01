"use client";

import { useState } from "react";

// Reservation form — posts to /api/reserve, which writes each submission
// into the "BC Website Leads" database in Notion.
const FORM_ENDPOINT = "/api/reserve";

export default function InterestForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="form-card">
      <h2>Join the Reservation List</h2>
      <p className="sub">
        Be first in line for floor plans, pricing, and the spring 2027
        move-in wave.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="message">Anything you&apos;d like us to know? (optional)</label>
          <textarea id="message" name="message" rows={3} />
        </div>
        <button className="cta" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Reserve My Spot"}
        </button>
        {status === "ok" && (
          <div className="notice ok">
            Thanks — you&apos;re on the reservation list. We&apos;ll be in
            touch soon.
          </div>
        )}
        {status === "err" && (
          <div className="notice err">
            Something went wrong. Please try again in a moment.
          </div>
        )}
      </form>
    </div>
  );
}
