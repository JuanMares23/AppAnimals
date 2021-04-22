import Info from './info';
import Permissions from './permissions';

export default interface User {
    name: string
    mail: string
    phone: string
    role: "admin" | "owner" | "manager" | "user"
    permissions: Permissions
    cases?: { [id: string]: Info }
    posts?: { [id: string]: Info }
    adoptions?: { [id: string]: Info }
    photo: string
    noCases: number
    noPosts: number
    noAdoptions: number
    creation_date: number
    status: boolean
    savedPosts?: string[]
    likedPosts?: string[]
    grade: number
    evaluations?: {
        count: number
        values: {
            "1": number
            "2": number
            "3": number
            "4": number
            "5": number
        }
    }
    vets?: { [id: string]: Info }
}