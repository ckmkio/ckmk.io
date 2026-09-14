export const IDENTITY = {
  name: 'Kelvin Cheong',
  title: 'Senior Software Engineer',
  initials: 'KC',
  bio: '8 years in full stack and mobile development, including significant roles at Google and Fitbit. Proven track record in driving successful product launches and experience in major acquisitions: Doki > Fitbit > Google.',
}

export const SOCIAL_LINKS = [
  { label: 'GitHub', short: 'GH', href: 'https://github.com/ckmkio' },
  { label: 'LinkedIn', short: 'in', href: 'https://www.linkedin.com/in/ckmkio/' },
]

export type TimelineEntry = {
  dates: string
  role: string
  org: string
  description: string
}

export const TIMELINE: TimelineEntry[] = [
  {
    dates: 'May 2023 – May 2024',
    role: 'System Analyst',
    org: 'United Asia',
    description:
      'Developed and maintained iOS and Android apps (React Native, Flutter), frontend (Next.js), backend (Spring Boot) and internal loan system (Spring Boot). Maintained lending and credit card (MasterCard) system.',
  },
  {
    dates: 'Feb 2021 – May 2023',
    role: 'Software Engineer',
    org: 'Google',
    description:
      'Developed and maintained the Fitbit service and the Clock (Alarm, Timer, Stopwatch) app on the Google Pixel Watch I and II.',
  },
  {
    dates: 'Oct 2019 – Feb 2021',
    role: 'Software Engineer',
    org: 'Fitbit',
    description:
      'Developed and maintained Android and iOS apps (Native) and backend (Go, GraphQL) for an unreleased wearable product for kids and elders.',
  },
  {
    dates: 'May 2019 – Oct 2019',
    role: 'Software Developer',
    org: 'Doki',
    description:
      'Developed and maintained an Android-based kids smart watch, which provided video call, geo-fencing and fitness features.',
  },
  {
    dates: 'May 2018 – Oct 2019',
    role: 'Mobile App Developer',
    org: 'Digisalad',
    description:
      'Developed and maintained Android and iOS apps (Native, React Native), frontend (Laravel) and backend (Laravel).',
  },
  {
    dates: 'May 2019 – Oct 2019',
    role: 'Junior Programmer',
    org: 'KanHan',
    description:
      'Developed and maintained Android and iOS apps (Native, React Native), backend (PHP) for departments of the Hong Kong government and NGOs.',
  },
  {
    dates: 'Sep 2014 – Jun 2016',
    role: 'Higher Diploma',
    org: 'Hong Kong Institute of Vocational Education',
    description: 'Higher Diploma in Cloud and Data Centre Administration.',
  },
]

export const LANGUAGES = [
  'Java', 'Kotlin', 'Objective-C', 'Swift', 'Dart', 'Go', 'PHP',
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS',
]

export const FRAMEWORKS = [
  'Android Studio', 'Xcode', 'Flutter', 'React', 'Redux', 'Node.js',
  'Next.js', 'Spring', 'Laravel', 'GraphQL', 'MySQL', 'MongoDB', 'PostgreSQL',
]
