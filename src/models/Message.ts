export interface Message {
    author: string,
    body: string,
    body_html: string,
    context: string,
    first_message: number | null,
    first_message_name: string,
    likes: boolean,
    link_title: string,
    name: string,
    new: boolean,
    parent_id: string,
    replies: string,
    subject: string,
    subreddit: string | null,
    was_comment: boolean,

    created: number,
    created_utc: number
}