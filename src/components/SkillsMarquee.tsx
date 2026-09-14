type Props = {
  title: string
  items: string[]
  reverse?: boolean
}

export function SkillsMarquee({ title, items, reverse }: Props) {
  const doubled = [...items, ...items]

  return (
    <section>
      <h3 className="section-title">{title}</h3>
      <div className={`marquee${reverse ? ' marquee--reverse' : ''}`}>
        <div className="marquee__track">
          {doubled.map((item, i) => (
            <span className="pill glass glass--thin" key={`${item}-${i}`}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
