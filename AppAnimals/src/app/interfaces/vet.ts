import Info from './info';

export default interface Vet {
    name: string
    address: string
    phone: string
    owner: Info
    admins: { [id: string]: Info }
    linkedCases: { [id: string]: Info }
    verification: "accepted" | "rejected" | "pending"
    verificationData: {
        id: string
        documents: string[]
    }
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
}