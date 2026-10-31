import { useEffect, useRef, useState } from "react";
import wardrobeHome from "../../assets/wardrobe-home.jpg";
import myWardrobe from "../../assets/my-wardrobe.jpg";
import savedOutfits from "../../assets/saved-outfits.jpg";
import accessories from "../../assets/wardrobe-accessories.jpg";
import outfitCustomizer from "../../assets/outfit-customizer.jpg";
import shoes from "../../assets/wardrobe-shoes.jpg";
import tops from "../../assets/wardrobe-tops.jpg";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    number: "02 / 07",
    title: "My Wardrobe",
    description: "Organized clothing collection with categories and search.",
    image: myWardrobe,
    alt: "My Wardrobe screen",
    categories: ["app", "ui"],
  },
  {
    number: "03 / 07",
    title: "Saved Outfits",
    description: "Saved combinations presented in a simple visual layout.",
    image: savedOutfits,
    alt: "Saved outfits screen",
    categories: ["app", "feature"],
  },
  {
    number: "04 / 07",
    title: "Accessory Library",
    modalTitle: "Accessories Collection",
    description: "Visual browsing for watches, necklaces, and accessories.",
    image: accessories,
    alt: "Wardrobe accessories screen",
    categories: ["ui", "feature"],
  },
  {
    number: "05 / 07",
    title: "Outfit Customizer",
    description: "Build an outfit by choosing tops, bottoms, shoes, and more.",
    image: outfitCustomizer,
    alt: "Outfit customizer screen",
    categories: ["ui", "app"],
  },
  {
    number: "06 / 07",
    title: "Shoe Collection",
    description: "Category-based browsing with clear product cards.",
    image: shoes,
    alt: "Wardrobe shoes screen",
    categories: ["ui"],
  },
  {
    number: "07 / 07",
    title: "Top Collection",
    description: "Filterable clothing cards with season information.",
    image: tops,
    alt: "Wardrobe tops screen",
    categories: ["ui", "feature"],
  },
];

const filters = [
  ["all", "All"],
  ["ui", "UI Design"],
  ["app", "App"],
  ["feature", "Features"],
];

function ProjectCard({ project, onPreview }) {
  const { number, title, description, image, alt, categories, modalTitle } =
    project;

  return (
    <article className="project-card project-item" data-category={categories.join(" ")}>
      <div className="project-image">
        <img src={image} alt={alt} loading="lazy" />
        <button
          className="view-btn"
          type="button"
          onClick={() => onPreview({ title: modalTitle || title, image, alt })}
        >
          View
        </button>
      </div>
      <div className="project-meta">
        <span>{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose, closeButtonRef }) {
  useEffect(() => {
    if (!project) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      previouslyFocused?.focus();
    };
  }, [project, onClose, closeButtonRef]);

  if (!project) return null;

  return (
    <div className="modal open" aria-hidden="false">
      <button
        className="modal-backdrop"
        type="button"
        aria-label="Close project preview"
        onClick={onClose}
      />
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Close project preview"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>
        <img src={project.image} alt={project.alt} />
        <div className="modal-caption">
          <p className="eyebrow dark">
            <span />
            PROJECT SCREEN
          </p>
          <h2 id="modalTitle">{project.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [previewProject, setPreviewProject] = useState(null);
  const closeButtonRef = useRef(null);
  const closePreview = () => setPreviewProject(null);

  return (
    <section className="work section-light" id="work">
      <div className="container">
        <div className="work-top">
          <SectionHeading label="SELECTED PROJECT" dark>
            My <em>Work</em>
          </SectionHeading>
          <div className="filters reveal" role="group" aria-label="Project filters">
            {filters.map(([filter, label]) => (
              <button
                className={`filter${selectedFilter === filter ? " active" : ""}`}
                type="button"
                data-filter={filter}
                aria-pressed={selectedFilter === filter}
                key={filter}
                onClick={() => setSelectedFilter(filter)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="featured-project reveal">
          <div className="featured-image">
            <img
              src={wardrobeHome}
              alt="Wardrobe application home screen"
              loading="lazy"
            />
            <div className="image-overlay">
              <span>FEATURED PROJECT</span>
            </div>
          </div>
          <div className="featured-info">
            <p className="project-tag">01 / 07 — MOBILE APPLICATION</p>
            <h3>
              Wardrobe
              <br />
              <em>Reimagined.</em>
            </h3>
            <p>
              A modern wardrobe management concept focused on organizing
              clothing, creating outfits, saving combinations, and making
              everyday style decisions easier.
            </p>
            <div className="tech-stack">
              <span>UI/UX</span>
              <span>Flutter</span>
              <span>Mobile</span>
              <span>Product Design</span>
            </div>
            <a className="text-link" href="#projectGallery">
              View project screens <span>↗</span>
            </a>
          </div>
        </div>
        <div className="project-grid" id="projectGallery">
          {projects
            .filter(
              (project) =>
                selectedFilter === "all" ||
                project.categories.includes(selectedFilter),
            )
            .map((project) => (
              <ProjectCard
                project={project}
                onPreview={setPreviewProject}
                key={project.number}
              />
            ))}
        </div>
      </div>
      <ProjectModal
        project={previewProject}
        onClose={closePreview}
        closeButtonRef={closeButtonRef}
      />
    </section>
  );
}
