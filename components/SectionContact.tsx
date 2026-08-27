import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { siteConfig, type Locale } from "@/config/site";

type ContactDict = {
  eyebrow: string;
  heading1: string;
  heading2: string;
  body: string;
  callLabel: string;
  emailLabel: string;
  locationLabel: string;
  locationValue: string;
  formTitle: string;
  note: string;
};
type FormDict = {
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  matterLabel: string;
  messageLabel: string;
  submit: string;
  privacyNote: string;
};

export default function SectionContact({
  t,
  form,
}: {
  locale: Locale;
  t: ContactDict;
  form: FormDict;
}) {
  return (
    <section id="contact" className="bg-navy text-ivory border-t border-line-navy">
      <div className="mx-auto max-w-[1360px] px-gutter py-20 md:py-32">
        <Reveal>
          <div className="grid grid-cols-12 gap-x-4 gap-y-12 md:gap-x-8">
            {/* Heading + direct contact */}
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow text-ivory/50">{t.eyebrow}</p>
              <h2 className="mt-6 font-display text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[1.0] font-medium">
                {t.heading1} <span className="italic font-normal text-ivory/80">{t.heading2}</span>
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ivory/70">{t.body}</p>

              <div className="mt-12 space-y-6 border-t border-line-navy pt-6">
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-ivory/40">{t.callLabel}</span>
                  <span className="flex flex-col">
                    {siteConfig.phones.map((ph) => (
                      <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline font-display text-xl font-light">
                        {ph.label}
                      </a>
                    ))}
                  </span>
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-ivory/40">{t.emailLabel}</span>
                  <a href={`mailto:${siteConfig.email}`} className="link-underline font-display text-lg font-light">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-baseline gap-6">
                  <span className="w-24 eyebrow text-ivory/40">{t.locationLabel}</span>
                  <span className="font-display text-lg font-light leading-snug">{t.locationValue}</span>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="border border-line-navy bg-navy-2 p-6 md:p-10">
                <p className="eyebrow text-ivory/40">{t.formTitle}</p>
                <div className="mt-6">
                  <ContactForm dict={form} dark />
                </div>
              </div>
              <p className="mt-4 text-[0.68rem] uppercase tracking-[0.16em] text-ivory/40">{t.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
