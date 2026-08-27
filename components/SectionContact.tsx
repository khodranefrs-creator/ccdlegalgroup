import ContactForm from "./ContactForm";
import { siteConfig } from "@/config/site";

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
  disclaimer: string;
};

export default function SectionContact({
  t,
  form,
}: {
  t: ContactDict;
  form: FormDict;
}) {
  return (
    <section id="contact" className="bg-ink text-paper border-t border-line-ink">
      <div className="mx-auto max-w-[1360px] px-gutter py-16 md:py-24">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12 md:gap-x-12">
          {/* Heading + direct contact */}
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-paper/45">{t.eyebrow}</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.6vw,3.3rem)] leading-[1.05] font-medium tracking-[-0.01em] text-paper">
              {t.heading1}
              <span className="text-paper/70"> {t.heading2}</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-paper/70">{t.body}</p>

            <div className="mt-10 space-y-5 border-t border-line-ink pt-6">
              <div className="grid grid-cols-12 gap-4">
                <span className="col-span-4 eyebrow text-paper/45">{t.callLabel}</span>
                <div className="col-span-8 flex flex-col text-paper">
                  {siteConfig.phones.map((ph) => (
                    <a key={ph.tel} href={`tel:${ph.tel}`} className="link-underline w-fit text-[1.05rem]">
                      {ph.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <span className="col-span-4 eyebrow text-paper/45">{t.emailLabel}</span>
                <div className="col-span-8">
                  <a href={`mailto:${siteConfig.email}`} className="link-underline text-[1.02rem] text-paper">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <span className="col-span-4 eyebrow text-paper/45">{t.locationLabel}</span>
                <div className="col-span-8">
                  <p className="text-[1rem] leading-snug text-paper">{t.locationValue}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="border border-line-ink bg-ink-2 p-6 md:p-10">
              <p className="eyebrow text-paper/45">{t.formTitle}</p>
              <div className="mt-7">
                <ContactForm dict={form} dark />
              </div>
            </div>
            <p className="mt-4 text-[0.7rem] uppercase leading-relaxed tracking-[0.12em] text-paper/40">
              {t.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
