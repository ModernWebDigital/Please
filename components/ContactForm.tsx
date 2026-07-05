"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const supabase = createClient();
    const { error } = await supabase.from("leads").insert({
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      business: data.get("business") || null,
      email: data.get("email"),
      phone: data.get("phone") || null,
      service: data.get("service") || null,
      message: data.get("message") || null,
    });

    if (error) {
      setStatus("error");
      return;
    }

    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input type="text" id="first_name" name="first_name" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input type="text" id="last_name" name="last_name" placeholder="Smith" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="business">Business Name</label>
        <input type="text" id="business" name="business" placeholder="Your Business Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="you@yourbusiness.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" />
      </div>
      <div className="form-group">
        <label htmlFor="service">What Are You Looking For?</label>
        <select id="service" name="service" defaultValue="">
          <option value="">Select a service...</option>
          <option>New Website Design</option>
          <option>Redesign Existing Website</option>
          <option>Website Management Only</option>
          <option>eCommerce Website</option>
          <option>Full Service (Design + Ongoing Management)</option>
          <option>Not Sure Yet — Let&apos;s Talk</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Tell Us About Your Vision</label>
        <textarea
          id="message"
          name="message"
          placeholder="Describe your business, your ideal website, any specific features you want, or anything else that will help us understand what you're looking for..."
        />
      </div>
      <button type="submit" className="btn-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send My Project Inquiry →"}
      </button>
      {status === "success" && (
        <p className="form-status success">Thanks! We&apos;ll be in touch within 24 hours.</p>
      )}
      {status === "error" && (
        <p className="form-status error">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
