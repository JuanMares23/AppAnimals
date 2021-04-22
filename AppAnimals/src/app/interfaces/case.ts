import Info from './info';

export default interface Case {
    title: string
    description: string
    creator: Info
    creation_date: number //milliseconds
    photos?: string[]
    likes: number
    views: number
    linkedVet?: Info
    linkedDate?: number // milliseconds
    status: 'success' | 'failure' | 'pending' | 'reported'
    diagnosis?: {
        name: string
        symptoms: string[]
        medicines?: string[]
        surgery?: string
        price: number
    }
    collected: number
    log?: {
        [id: number]: string // [milliseconds date]: [description]
    }
    donationsCount: number
    donations?: string[] // array of ids
}