import Info from './info';

export default interface Case {
    title: string
    description: string
    creator: string
    creation_date: number //milliseconds
    photo: string
    likes: number
    views: number
    linkedVet?: Info
    linkedDate?: number // milliseconds
    status: 'success' | 'failure' | 'pending' | 'reported'
    diagnosis?: {
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