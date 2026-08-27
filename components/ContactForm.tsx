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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Consulta — ${values.name || siteConfig.name}`
    );
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nEmail: ${values.email}\nTeléfono: ${values.phone}\n\n${values.message}`
    );
    window.location.href = `mailto:${siteConfig.emails.despacho}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full border-b border-line bg-transparent py-3 text-base text-ink placeholder:text-stone/70 focus:border-oxblood transition-colors duration-300 outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="eyebrow block text-stone">
            {dict.formName}
          </label>
          <input
            id="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={field}
            placeholder={dict.formName}
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block text-stone">
            {dict.formEmail}
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={field}
            placeholder={dict.formEmail}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="eyebrow block text-stone">
          {dict.formPhone}
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          className={field}
          placeholder={dict.formPhone}
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block text-stone">
          {dict.formMessage}
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={`${field} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-3 bg-oxblood text-paper rounded-full px-8 py-4 text-[0.72rem] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 hover:bg-oxblood-deep self-start"
        >
          {dict.formSubmit}
          <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
        </button>
        <p className="max-w-md text-xs leading-relaxed text-stone">{dict.formNote}</p>
      </div>
    </form>
  );
}
