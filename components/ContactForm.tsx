"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

type FormDict = {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  matterLabel: string;
  messageLabel: string;
  submit: string;
  privacyNote: string;
};

export default function ContactForm({
  dict,
  dark = false,
}: {
  dict: FormDict;
  dark?: boolean;
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(
      `${dict.matterLabel}: ${values.matter || ""} — ${values.name || siteConfig.name}`
    );
    const body = encodeURIComponent(
      `${dict.nameLabel}: ${values.name}\n${dict.emailLabel}: ${values.email}\n${dict.phoneLabel}: ${values.phone}\n${dict.matterLabel}: ${values.matter}\n\n${dict.messageLabel}:\n${values.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  const wrap = dark
    ? "text-ivory caret-ivory"
    : "text-navy caret-navy";
  const label = dark ? "text-ivory/60" : "text-stone";
  const border = dark ? "border-line-navy focus:border-oxblood-2" : "border-line focus:border-oxblood";
  const placeholder = dark ? "placeholder:text-ivory/35" : "placeholder:text-stone/60";

  const field = `w-full border-b bg-transparent py-3 text-[0.95rem] outline-none transition-colors duration-300 ${wrap} ${border} ${placeholder}`;

  const input = (
    key: keyof typeof values,
    labelText: string,
    type = "text"
  ) => (
    <label htmlFor={key} className="block">
      <span className={`eyebrow block ${label}`}>{labelText}</span>
      <input
        id={key}
        type={type}
        required={key === "name" || key === "email"}
        autoComplete={key === "email" ? "email" : key === "name" ? "name" : key === "phone" ? "tel" : "off"}
        value={values[key]}
        onChange={(e) => setValues({ ...values, [key]: e.target.value })}
        className={field}
        placeholder={labelText}
      />
    </label>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {input("name", dict.nameLabel)}
        {input("email", dict.emailLabel, "email")}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {input("phone", dict.phoneLabel, "tel")}
        {input("matter", dict.matterLabel)}
      </div>
      <div>
        <label htmlFor="message" className="block">
          <span className={`eyebrow block ${label}`}>{dict.messageLabel}</span>
          <textarea
            id="message"
            required
            rows={5}
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
            className={`${field} resize-none`}
            placeholder={dict.messageLabel}
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center justify-center gap-3 bg-oxblood px-7 py-4 text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-ivory transition-colors duration-300 hover:bg-oxblood-2 disabled:opacity-60 self-start"
        >
          {dict.submit}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
        <p className={`max-w-md text-xs leading-relaxed ${dark ? "text-ivory/40" : "text-stone"}`}>
          {dict.privacyNote}
        </p>
      </div>
    </form>
  );
}
