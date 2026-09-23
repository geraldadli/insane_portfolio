import ScrollReveal from "./motion/ScrollReveal";
import Icon from "./ui/Icon";

const certificates = [
  {
    id: "ibm-data-science",
    name: "IBM Data Science",
    date: "November 15, 2024",
    isoDate: "2024-11-15",
    courses: 12,
    description:
      "Python, SQL, data analysis, visualization, and machine learning.",
    verification: "https://coursera.org/verify/professional-cert/023ID0TZ3W6Q",
  },
  {
    id: "meta-data-analyst",
    name: "Meta Data Analyst",
    date: "October 6, 2024",
    isoDate: "2024-10-06",
    courses: 5,
    description: "Spreadsheets, SQL, Python, statistics, and data management.",
    verification: "https://coursera.org/verify/professional-cert/21LP58B3RLPO",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="certificates-section"
      aria-labelledby="certificates-title"
    >
      <div className="container">
        <ScrollReveal className="section-heading">
          <div>
            <p className="eyebrow">MY CERTIFICATIONS</p>
            <h2 id="certificates-title">
              Certificates<span className="accent">.</span>
            </h2>
          </div>
          <p>Professional certificates I’ve completed.</p>
        </ScrollReveal>
        <div className="research-card-grid">
          {certificates.map((certificate) => (
            <ScrollReveal key={certificate.id}>
              <article
                className="universe-card certificate-card"
                aria-labelledby={`${certificate.id}-title`}
              >
                <div className="universe-card-meta">
                  <span>Professional Certificate</span>
                  <span>{certificate.courses} courses</span>
                </div>
                <h3 id={`${certificate.id}-title`}>{certificate.name}</h3>
                <p className="certificate-date">
                  Completed{" "}
                  <time dateTime={certificate.isoDate}>{certificate.date}</time>
                </p>
                <img
                  className="certificate-preview"
                  src={`/certificates/${certificate.id}.jpg`}
                  width="1200"
                  height="928"
                  loading="lazy"
                  decoding="async"
                  alt={`${certificate.name} certificate awarded to Gerald Adli on ${certificate.date}`}
                />
                <p className="universe-description">
                  {certificate.description}
                </p>
                <div className="certificate-actions">
                  <a
                    className="text-link"
                    href={`/certificates/${certificate.id}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF <Icon name="diagonal" />
                    <span className="sr-only">
                      : {certificate.name} (opens in a new tab)
                    </span>
                  </a>
                  <a
                    className="text-link"
                    href={certificate.verification}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify on Coursera <Icon name="diagonal" />
                    <span className="sr-only">
                      : {certificate.name} (opens in a new tab)
                    </span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
