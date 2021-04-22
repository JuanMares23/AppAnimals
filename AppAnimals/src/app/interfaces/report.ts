export default interface Report {
    date: number // milliseconds
    requester_id: string
    reason: string
    linked_item: string // post or case id
    status: "accepted" | "rejected" | "pending"
}