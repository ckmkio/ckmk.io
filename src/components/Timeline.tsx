import { TIMELINE } from '../content'

export function Timeline() {
  return (
    <section>
      <div className="panel timeline-panel">
        <div className="panel__head">
          <h3 className="section-title">Career</h3>
        </div>
        <div className="panel__body">
          <div className="well">
            {TIMELINE.map((entry) => (
              <div className="timeline-entry" key={`${entry.org}-${entry.dates}`}>
                <div className="timeline-entry__meta">
                  <span className="timeline-entry__role">{entry.role}</span>
                  <span className="timeline-entry__org">@ {entry.org}</span>
                </div>
                <div className="timeline-entry__dates">{entry.dates}</div>
                <p className="timeline-entry__desc">{entry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
