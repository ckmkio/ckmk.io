import { useEffect, useRef, useState } from 'react'

const EXIT_DURATION_MS = 240

type Props = {
  open: boolean
  onClose: () => void
}

export function ProjectsOverlay({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(open)
  const [closing, setClosing] = useState(false)
  const timeoutRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (open) {
      window.clearTimeout(timeoutRef.current)
      setMounted(true)
      setClosing(false)
      return
    }
    if (mounted) {
      setClosing(true)
      timeoutRef.current = window.setTimeout(() => {
        setMounted(false)
        setClosing(false)
      }, EXIT_DURATION_MS)
    }
    return () => window.clearTimeout(timeoutRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!mounted) return null

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label="Projects">
      <div className={`overlay__scrim${closing ? ' overlay__scrim--out' : ''}`} onClick={onClose} />
      <div className={`projects-panel panel glass${closing ? ' projects-panel--out' : ''}`}>
        <div className="panel__head projects-panel__head">
          <h3 className="section-title">Projects</h3>
          <button type="button" className="projects-panel__close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="panel__body">
          <div className="well">
            <p className="timeline-entry__desc" style={{ padding: '14px 4px' }}>
              Project write-ups are on their way. In the meantime, take a look at the career
              timeline or reach out on GitHub / LinkedIn from the home tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
