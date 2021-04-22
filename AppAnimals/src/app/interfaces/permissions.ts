export default interface Permissions {
    donate: boolean
    publish_post: boolean
    publish_case: boolean
    adopt: boolean
    search_user: boolean
    search_vet: boolean
    evaluate_vet: boolean
    evaluate_user: boolean
    view_post: boolean
    view_case: boolean
    request_linking?: boolean
    link_case?: boolean
    update_case?: boolean
    report_post?: boolean
    report_case?: boolean
    update_vet_info?: boolean
    create_manager?: boolean
    link_manager?: boolean
    edit_permissions?: boolean
    create_vet?: boolean
    block_user?: boolean
    block_vet?: boolean
    delete_post?: boolean
    delete_case?: boolean
}