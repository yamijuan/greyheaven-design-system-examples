export interface AppEntry {
  name: string
  path: string
  description: string
}

export const apps: AppEntry[] = [
  {
    name: 'Pokemon Regions',
    path: '/pokemon',
    description: 'Explore the first four Pokemon regions — Kanto, Johto, Hoenn, and Sinnoh — with their legendaries, mythicals, and gym leaders.',
  },
  {
    name: 'Greywall',
    path: '/greywall',
    description: 'Container-free, deny-by-default sandbox for AI coding agents on Linux and macOS.',
  },
  {
    name: 'Monadical',
    path: '/monadical',
    description: 'Full-stack software consultancy helping organizations transform in the Age of AI.',
  },
  {
    name: 'Monadical Mocker',
    path: '/monadicalmocker',
    description: 'Precision-engineered API mocking environment shell with collections, environments, and mock servers.',
  },
]
