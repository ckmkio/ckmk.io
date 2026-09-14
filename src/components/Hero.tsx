import { IDENTITY, SOCIAL_LINKS } from '../content'

export function Hero() {
  return (
    <section className="hero">
      <div className="avatar glass glass--thin">{IDENTITY.initials}</div>
      <div className="hero__identity">
        <h1>{IDENTITY.name}</h1>
        <h2>{IDENTITY.title}</h2>
        <p className="hero__bio">{IDENTITY.bio}</p>
        <div className="social-links">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              className="social-link glass glass--thin"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
            >
              {link.short}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
