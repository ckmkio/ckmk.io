# PROFILE.MD

Personal/content data to migrate from the old `ckmk.io` (Next.js) site into this new `new.ckmk.io` (React + Vite + TypeScript + Bun) project. Source files referenced are under `../ckmk.io/ckmk.io/app/`.

## Identity

- Name: Kelvin Cheong
- Title: Senior Software Engineer
- Avatar: placeholder initials "KC" (no actual avatar image file in the old repo — `flowbite-react` `Avatar` used `placeholderInitials="KC"`)
- Tagline / bio (from `app/page.tsx`):
  > 8 years in full stack and mobile development, including significant roles at Google and Fitbit. Proven track record in driving successful product launches and experience in major acquisitions: Doki > Fitbit > Google.

## Social links

- GitHub: https://github.com/ckmkio
- LinkedIn: https://www.linkedin.com/in/ckmkio/

## Site metadata

- Page title: "Kelvin Cheong's Portfolio"
- Meta description: "Senior software engineer"

## Career timeline

(from `app/components/careertimeline.tsx`, most recent first)

1. **May 2023 - May 2024** — System Analyst @ United Asia
   Developed and maintained iOS and Android apps (ReactNative, Flutter), frontend (Next.js), backend (SpringBoot) and internal loan system (SpringBoot). Maintained lending and credit card (MasterCard) system.
2. **Feb 2021 - May 2023** — Software Engineer @ Google
   Developed and maintained the Fitbit service and the Clock (Alarm, Timer, Stopwatch) app in the Google Pixel Watch I and II.
3. **Oct 2019 - Feb 2021** — Software Engineer @ Fitbit
   Developed and maintained Android and iOS apps (Native) and backend (Go, GraphQL) for an unreleased wearable product for kids and elders.
4. **May 2019 - Oct 2019** — Software Developer @ Doki
   Developed and maintained an Android based kids smart watch, which provided video call, geo fencing and fitness features.
5. **May 2018 - Oct 2019** — Mobile App Developer @ Digisalad
   Developed and maintained Android and iOS apps (Native, React Native), frontend (Laravel) and backend (Laravel).
6. **May 2019 - Oct 2019** — Junior Programmer @ KanHan
   Developed and maintained Android and iOS apps (Native, React Native), backend (PHP) for departments of Hong Kong government and NGOs.
7. **Sep 2014 - Jun 2016** — Hong Kong Institute of Vocational Education
   Higher Diploma in Cloud and Data Centre Administration

> Note: entries 4 and 6 both list "May 2019 - Oct 2019" in the original site — this overlap exists in the source content itself and should be double-checked with the user before/while migrating.

## Skills — Languages

(from `app/components/languagecarousel.tsx`, icon set via `react-devicons`, rendered as an infinite scroll marquee)

Java, Kotlin, Objective-C, Swift, Dart, Go, PHP, JavaScript, TypeScript, HTML5, CSS3, Sass, Tailwind CSS

## Skills — Frameworks / Tools

(from `app/components/frameworkcarousel.tsx`, icon set via `react-devicons`, rendered as an infinite scroll marquee, reverse direction)

Android Studio, Xcode, Flutter, React, Redux, Node.js, Next.js, Spring, Laravel, GraphQL, MySQL, MongoDB, PostgreSQL

## Navigation

- "Home" (`/`) — active
- "Projects" (`/projects`) — present in the old repo's `navbar.tsx` but **commented out**; the `/projects` route exists (`app/projects/page.tsx`) but is minimal/WIP and was never linked live. Decide whether to bring this back in the new site.

## Visual/UX notes worth preserving (optional, not hard data)

- Dark navbar (`bg-black`) with white social icons.
- Marquee/carousel styling: gradient fade mask on left/right edges (`mask-image: linear-gradient(...)`), 60s linear infinite scroll animation, duplicated `<ul>` lists for seamless looping, icon color `#9ca3af`, icon size `4em`.
- Body font: `Open_Sans` (aliased as `jura` in code, weight 400) via `next/font/google`.
