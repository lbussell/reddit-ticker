export interface Subreddit {
    kind: "t5",
    data: {
        accounts_active: number,
        comment_score_hide_mins: number,
        /** Sidebar text */
        description: string,
        description_html: string,
        display_name: string,
        header_img: string,
        /** Width and height of the header image, or null */
        header_size: [number, number] | null,
        header_title: string,
        over18: boolean,
        /** Description shown in subreddit search results */
        public_description: string,
        subscribers: number,
        submission_type: string,
        submit_link_label: string,
        submit_text_label: string,
        subreddit_type: string,
        title: string,
        url: string,
        user_is_banned: boolean,
        user_is_contributor: boolean,
        user_is_moderator: boolean,
        user_is_subscriber: boolean
    }
}
