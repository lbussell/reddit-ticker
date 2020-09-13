import type { Thing } from "./Thing";

export interface Comment {
    approved_by: string;
    author: string;
    author_flair_css_class: string;
    author_flair_text: string;
    banned_by: string;
    body: string;
    body_html: string;
    edited: boolean | number;
    gilded: number;
    likes: boolean | null;
    link_author: string;
    link_id: string;
    link_title: string;
    link_url: string;
    num_reports: number | null;
    parent_id: string;
    replies: Thing[];
    saved: boolean;
    score: number;
    score_hidden: boolean;
    subreddit: string;
    subreddit_id: string;
    distinguished: string;

    ups: number;
    downs: number;

    created: number;
    created_utc: number;
}
