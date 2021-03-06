export interface Link {
    kind: "t3",
    data: {
        author: string,
        author_flair_css_class: string,
        author_flair_text: string,
        clicked: boolean,
        domain: string,
        hidden: boolean,
        is_self: boolean,
        likes: boolean | null,
        link_flair_css_class: string,
        link_flair_text: string,
        locked: boolean,
        media: any,
        media_embed: any,
        name: string,
        num_comments: number,
        over_18: boolean,
        permalink: string,
        saved: boolean,
        score: number,
        selftext: string,
        selftext_html: string | null,
        subreddit: string,
        subreddit_id: string,
        thumbnail: string,
        title: string,
        url: string,
        edited: number,
        distinguished: string,
        stickied: boolean,

        ups: number,
        downs: number,

        created: number,
        created_utc: number
    }
}