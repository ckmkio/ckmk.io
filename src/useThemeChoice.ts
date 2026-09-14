import { useCallback, useEffect, useLayoutEffect, useState } from 'react'

export type ThemeChoice = 'system' | 'dark' | 'light'

const STORAGE_KEY = 'chrome-theme'

function resolveSystem(): 'dark' | 'light' {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(choice: ThemeChoice) {
  const resolved = choice === 'system' ? resolveSystem() : choice
  document.documentElement.setAttribute('data-chrome', resolved)
}

function readStored(): ThemeChoice {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light' || stored === 'system') return stored
  } catch {
    // private browsing / blocked storage — fall back to system
  }
  return 'system'
}

export function useThemeChoice() {
  const [choice, setChoiceState] = useState<ThemeChoice>(readStored)

  // Layout effect so the attribute lands before first paint — the stylesheet's
  // default is the dark block, and a stored light preference would otherwise
  // flash dark for one frame.
  useLayoutEffect(() => {
    applyTheme(choice)
  }, [choice])

  useEffect(() => {
    if (choice !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const listener = () => applyTheme('system')
    mq.addEventListener('change', listener)
    return () => mq.removeEventListener('change', listener)
  }, [choice])

  const setChoice = useCallback((next: ThemeChoice) => {
    setChoiceState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore — quota full or storage blocked
    }
  }, [])

  return { choice, setChoice }
}
