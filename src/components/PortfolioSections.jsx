import profileImage from "../../assets/profile.jpg";
import SectionHeading from "./SectionHeading.jsx";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Responsive websites built with organized HTML, CSS, and JavaScript.",
    link: "01 — BUILD",
  },
  {
    number: "02",
    icon: "◈",
    title: "UI / UX Design",
    description:
      "Clean layouts, visual hierarchy, and interfaces designed for real users.",
    link: "02 — DESIGN",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Interactive Features",
    description:
      "Useful JavaScript interactions such as filters, menus, modals, and dynamic content.",
    link: "03 — INTERACT",
  },
];

const steps = [
  ["01", "Discover", "Understand the goal, audience, and core problem."],
  ["02", "Design", "Plan the structure, visual hierarchy, and interface."],
  ["03", "Develop", "Turn the design into responsive, functional code."],
  ["04", "Refine", "Test, improve, and polish the final experience."],
];

function BrandCodeCard() {
  return (
    <div className="hero-visual reveal">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="code-card">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>portfolio.js</span>
        </div>
        <pre>
          <code>
            <span className="purple">const</span> developer = {"{"}
            {"\n"}  name: <span className="green">"Pike-Pike"</span>,{"\n"}  role:{" "}
            <span className="green">"Web Developer"</span>,{"\n"}  skills: [{"\n"}{" "}
            <span className="green">"HTML"</span>,{"\n"}{" "}
            <span className="green">"CSS"</span>,{"\n"}{" "}
            <span className="green">"JavaScript"</span>,{"\n"}{" "}
            <span className="green">"UI Design"</span>
            {"\n"}  ],{"\n"}  passion:{" "}
            <span className="green">"Build & Create"</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
      <div className="floating-badge badge-one">
        HTML <b>5</b>
      </div>
      <div className="floating-badge badge-two">
        CSS <b>3</b>
      </div>
      <div className="floating-badge badge-three">
        JS <b>↯</b>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero section-dark" id="home">
      <div className="hero-grid" />
      <div className="container hero-content">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span />
            CREATIVE DEVELOPER • UI DESIGNER
          </p>
          <h1>
            Turning ideas into <span>clean digital experiences.</span>
          </h1>
          <p className="hero-text">
            I design and build modern, responsive interfaces with a focus on
            usability, visual quality, and practical functionality.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              Explore My Work <span>↗</span>
            </a>
            <a className="btn btn-outline" href="#contact">
              Let&apos;s Connect
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>01</strong>
              <span>Featured App</span>
            </div>
            <div>
              <strong>07+</strong>
              <span>UI Screens</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Student Project</span>
            </div>
          </div>
        </div>
        <BrandCodeCard />
      </div>
      <a className="scroll-cue" href="#about">
        Scroll to explore <span>↓</span>
      </a>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about section-light" id="about">
      <div className="container">
        <SectionHeading label="ABOUT ME" dark>
          Building with purpose,
          <br />
          <em>designing with detail.</em>
        </SectionHeading>
        <div className="about-grid">
          <div className="profile-panel reveal">
            <div className="profile-art">
              <img src={profileImage} alt="Pike-Pike profile" />
            </div>
            <div className="profile-info">
              <p className="label">CURRENT FOCUS</p>
              <h3>Web Development &amp; UI Design</h3>
              <p>
                Student developer passionate about transforming concepts into
                polished, functional interfaces.
              </p>
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="large-copy">
              Hello! I&apos;m <strong>Pike-Pike</strong>, a student developer
              who enjoys creating websites and applications that are both
              attractive and easy to use.
            </p>
            <p>
              My approach combines structured HTML, thoughtful CSS, and
              JavaScript interactions to turn an idea into a complete digital
              experience. My featured project is a wardrobe management concept
              designed around organization, personalization, and modern UI.
            </p>
            <div className="skill-list">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "Responsive Design",
                "UI/UX",
                "GitHub",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="services section-dark" id="services">
      <div className="container">
        <SectionHeading
          label="WHAT I DO"
          centered
          description="Practical digital solutions with a strong focus on clean interfaces and user experience."
        >
          Services &amp; <em>Skills</em>
        </SectionHeading>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.number}>
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">{service.link}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="process section-dark">
      <div className="container">
        <SectionHeading label="MY PROCESS" centered>
          From concept to <em>creation.</em>
        </SectionHeading>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <div className="process-step reveal" key={number}>
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
