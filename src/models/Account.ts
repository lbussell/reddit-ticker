export interface Account {
    comment_karma: number,
    has_mail: boolean,
    has_mod_mail: boolean,
    has_verified_email: boolean,
    id: string,
    inbox_count: number,
    is_friend: boolean,
    is_gold: boolean,
    is_mod: boolean,
    link_karma: number,
    modhash: string,
    name: string,
    over_18: boolean,

    created: number,
    created_utc: number
}