export default interface Post {
    title: string
    description: string
    creator: string
    creation_date: number //milliseconds
    photos?: string[]
    likes: {
        count: number
        vetsCount: number
        usersCount: number
    }
    views: number
}