import { useState } from 'react'
import { Backdrop } from './components/Backdrop'
import { Hero } from './components/Hero'
import { Timeline } from './components/Timeline'
import { SkillsMarquee } from './components/SkillsMarquee'
import { NavDock, type View } from './components/NavDock'
import { ProjectsOverlay } from './components/ProjectsOverlay'
import { useThemeChoice } from './useThemeChoice'
import { LANGUAGES, FRAMEWORKS } from './content'

function App() {
  const { choice, setChoice } = useThemeChoice()
  const [view, setView] = useState<View>('home')

  return (
    <>
      <Backdrop />
      <main className="page">
        <Hero />
        <Timeline />
        <SkillsMarquee title="Languages" items={LANGUAGES} />
        <SkillsMarquee title="Frameworks & Tools" items={FRAMEWORKS} reverse />
      </main>
      <NavDock active={view} onNavigate={setView} themeChoice={choice} onThemeChange={setChoice} />
      <ProjectsOverlay open={view === 'projects'} onClose={() => setView('home')} />
    </>
  )
}

export default App
