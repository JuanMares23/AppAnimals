export default interface Donation {
    id: string
    user_id: string
    user_name: string
    quantity: number
    date: number // milliseconds
    case_id: string
    case_name: string
}