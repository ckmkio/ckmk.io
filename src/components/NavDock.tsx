import type { ThemeChoice } from '../useThemeChoice'

export type View = 'home' | 'projects'

const TABS: { id: View; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
]

const THEME_OPTIONS: { id: ThemeChoice; label: string; glyph: string }[] = [
  { id: 'system', label: 'System theme', glyph: '◐' },
  { id: 'light', label: 'Light theme', glyph: '☀' },
  { id: 'dark', label: 'Dark theme', glyph: '☽' },
]

type Props = {
  active: View
  onNavigate: (view: View) => void
  themeChoice: ThemeChoice
  onThemeChange: (choice: ThemeChoice) => void
}

export function NavDock({ active, onNavigate, themeChoice, onThemeChange }: Props) {
  return (
    <nav className="nav-dock glass glass--thin" aria-label="Primary">
      <div className="nav-dock__tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className="nav-dock__tab"
            data-active={active === tab.id}
            aria-pressed={active === tab.id}
            onClick={() => onNavigate(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="nav-dock__divider" />
      <div className="nav-dock__theme" role="group" aria-label="Theme">
        {THEME_OPTIONS.map((opt) => (
          <button
            key={opt.id}
            type="button"
            className="nav-dock__theme-btn"
            data-active={themeChoice === opt.id}
            aria-pressed={themeChoice === opt.id}
            aria-label={opt.label}
            title={opt.label}
            onClick={() => onThemeChange(opt.id)}
          >
            {opt.glyph}
          </button>
        ))}
      </div>
    </nav>
  )
}
