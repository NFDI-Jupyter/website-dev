import { LuArrowLeft } from "react-icons/lu";

const sections = [
  {
    title: "Forschungszentrum Jülich GmbH",
    content: (
      <>
        <p>
          Wilhelm-Johnen-Straße
          <br />
          52428 Jülich
        </p>
        <p>
          Entered in the Commercial Register of the District Court of Düren,
          Germany: No. HR B 3498
        </p>
        <p>
          Value Added Tax ID No. in accordance with § 27 a of the German VAT Law
          (Umsatzsteuergesetz): DE 122624631 Tax No.: 213/5700/0033
        </p>
        <p>
          <strong>Board of Directors</strong>
          <br />
          Prof. Dr. Astrid Lambrecht (Chair of the Board of Directors)
          <br />
          Karsten Beneke (Vice-Chairman)
          <br />
          Prof. Dr. Ir. Pieter Jansens
        </p>
        <p>
          <strong>Supervisory Board</strong>
          <br />
          Ministerialdirektor Stefan Müller
        </p>
      </>
    ),
  },
  {
    title: "Contact",
    content: (
      <p>
        <strong>General inquiries:</strong> +49 2461 61-0
        <br />
        <strong>General fax no.:</strong> +49 2461 61-8100
        <br />
        <strong>Internet:</strong>{" "}
        <a href="http://www.fz-juelich.de">http://www.fz-juelich.de</a>
        <br />
        <strong>Email address:</strong>{" "}
        <a href="mailto:info@fz-juelich.de">info@fz-juelich.de</a>
      </p>
    ),
  },
  {
    title: "Copyright",
    content: (
      <p>
        Copyright and all other rights concerning this website are held by
        Forschungszentrum Jülich GmbH. Use of the information contained on the
        website, including excerpts, is permitted for educational, scientific or
        private purposes, provided the source is quoted (unless otherwise
        expressly stated on the respective website). Use for commercial purposes
        is not permitted unless explicit permission has been granted by
        Forschungszentrum Jülich.
      </p>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <p>
        <strong>Contents of this Website</strong> This website has been compiled
        with due diligence. However, Forschungszentrum Jülich neither guarantees
        nor accepts liability for the information being continually up-to-date,
        complete or accurate.
      </p>
    ),
  },
  {
    title: "Links to External Websites",
    content: (
      <p>
        This website may contain links to external third-party websites. These
        links to third-party sites do not imply approval of their contents.
        Responsibility for the content of these websites lies solely with the
        respective provider or operator of the site. Illegal contents were not
        recognizable at the time of setting the link. We do not accept any
        liability for the continual accessibility or up-to-dateness,
        completeness or correctness of the contents of such websites. If we
        become aware of any infringements of the law, we will remove such links
        immediately.
      </p>
    ),
  },
  {
    title: "Data protection",
    content: (
      <p>
        Every time a user accesses a website hosted by Forschungszentrum Jülich
        GmbH and every time a file is requested, data connected to these
        processes are stored in a log. These data do not contain personal
        information; we are unable to trace which user accessed what
        information. Personal user profiles therefore cannot be created. The
        data that is saved will be used for statistical purposes only. This
        information will not be disclosed to third parties.
      </p>
    ),
  },
];

export default function ImprintPage() {
  return (
    <main className="min-h-screen bg-[#edf5f7] px-6 py-12 text-[#102b3d] lg:px-8">
      <article className="mx-auto max-w-4xl">
        <a
          href="./"
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#087ca6] hover:text-[#102b3d]"
        >
          <LuArrowLeft aria-hidden="true" size={16} />
          Back to home
        </a>

        <div className="rounded-3xl bg-white px-6 py-10 shadow-sm sm:px-10 lg:px-16 lg:py-14">
          <h1 className="text-4xl font-bold tracking-[-0.02em] md:text-5xl">
            Imprint
          </h1>

          <div className="mt-10 space-y-10 text-base leading-relaxed text-[#587080]">
            {sections.map(({ title, content }) => (
              <section key={title} aria-labelledby={title}>
                <h2
                  id={title}
                  className="mb-3 text-2xl font-bold tracking-[-0.02em] text-[#102b3d]"
                >
                  {title}
                </h2>
                {content}
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
