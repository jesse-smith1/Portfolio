export interface Links {
  id: number
  image: string
  link: string
}

export type Action = { type: 'SET_LINKS'; payload: Links[] }
