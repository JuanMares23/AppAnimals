export default interface Adoption {
    id: string
    user_id: string
    user_name: string
    date: number // milliseconds
    case_id: string
    case_name: string
    status: "accepted" | "rejected" | "pending"
    log: {
        [id: string]: {
            date: number
            comment: string
            photo?: string
        }
    }
}