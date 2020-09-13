import type { Link, Listing, Subreddit, Wrapper } from "../models";

const BASE_URL = "https://www.reddit.com/";
const POSTFIX = ".json";

export const RedditClient = {
    getFrontPage: async (): Promise<Listing<Link>> => {
        return RedditClient.getSubreddit();
    },

    getSubreddit: async (subreddit?: string): Promise<Listing<Link>> => {
        const path = subreddit ? `r/${subreddit}` : ``;
        return RedditClient.makeRequest<Listing<Link>>(path);
    },

    getComments: async (link: {
        permalink: string;
    }): Promise<[Listing<Link>, Listing<Comment>]> => {
        const json = await RedditClient.makeRequest<
            [Wrapper<Listing<Link>>, Wrapper<Listing<Comment>>]
        >(link.permalink);
        const [linkListing, commentListing] = json;
        return [linkListing.data, commentListing.data];
    },

    getSubreddits: async (where?: string): Promise<Listing<Subreddit>> => {
        const path = where ? `subreddits/${where}` : `subreddits`;
        const json = await RedditClient.makeRequest<
            Wrapper<Listing<Subreddit>>
        >(path);
        return json.data;
    },

    makeRequest: async <T>(path: string): Promise<T> => {
        const response = await fetch(BASE_URL + path + POSTFIX);
        const json: T = await response.json();
        return json;
    },
};
