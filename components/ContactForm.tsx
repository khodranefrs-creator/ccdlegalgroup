"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

type FormDict = {
  formName: string;
  formEmail: string;
  formPhone: string;
  formMessage: string;
  formSubmit: string;
  formNote: string;
};

export default function ContactForm({ dict }: { dict: FormDict }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(
      `Consulta — ${values.name || siteConfig.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nEmail: ${values.email}\nTeléfono: ${values.phone}\n\n${values.message}`
    );
    window.location.href = `mailto:${siteConfig.emails.despacho}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-basalt/60 focus:border-oxblood transition-colors duration-300 outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email two-up */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <label htmlFor="name" className="block">
          <span className="flex items-baseline gap-3">
            <span className="editorial-number text-oxblood">01</span>
            <span className="eyebrow text-basalt">{dict.formName}</span>
          </span>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={`${field} mt-2`}
            placeholder={dict.formName}
          />
        </label>

        <label htmlFor="email" className="block">
          <span className="flex items-baseline gap-3">
            <span className="editorial-number text-oxblood">02</span>
            <span className="eyebrow text-basalt">{dict.formEmail}</span>
          </span>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={`${field} mt-2`}
            placeholder={dict.formEmail}
          />
        </label>
      </div>

      {/* Phone */}
      <label htmlFor="phone" className="block">
        <span className="flex items-baseline gap-3">
          <span className="editorial-number text-oxblood">03</span>
          <span className="eyebrow text-basalt">{dict.formPhone}</span>
        </span>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          className={`${field} mt-2`}
          placeholder={dict.formPhone}
        />
      </label>

      {/* Message */}
      <label htmlFor="message" className="block">
        <span className="flex items-baseline gap-3">
          <span className="editorial-number text-oxblood">04</span>
          <span className="eyebrow text-basalt">{dict.formMessage}</span>
        </span>
        <textarea
          id="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={`${field} mt-2 resize-none`}
        />
      </label>

      <div className="flex flex-col gap-5 pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 bg-ink text-paper rounded-full px-8 py-4 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 hover:bg-oxblood self-start disabled:opacity-60"
        >
          {dict.formSubmit}
          <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
        </button>
        <p className="max-w-md text-xs leading-relaxed text-basalt">{dict.formNote}</p>
      </div>
    </form>
  );
}
