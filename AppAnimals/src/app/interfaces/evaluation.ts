export default interface Evaluation {
    date: number
    evaluated_id: string
    evaluated_name: string
    evaluatedTyoe: "user" | "vet"
    evaluator_id: string
    evaluator_name: string
    evaluatorType: "user" | "vet"
    value: 1 | 2 | 3 | 4 | 5
    comment: string
}