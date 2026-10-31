export default function SectionHeading({
  label,
  children,
  centered = false,
  description,
  dark = false,
}) {
  return (
    <div className={`section-heading reveal${centered ? " centered" : ""}`}>
      <p className={`eyebrow${dark ? " dark" : ""}`}>
        <span />
        {label}
      </p>
      <h2>{children}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
