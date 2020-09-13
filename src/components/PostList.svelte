<script lang="ts">
    import { onMount } from "svelte";
    import Post from "./Post.svelte";
    import type { Listing, Link } from "../models";
    import { RedditClient } from "../clients/RedditClient";

    export let subreddit: string;
    export let ordering: string;

    let posts: Link[] = [];
    let interval: number;

    $: if (subreddit || ordering) {
        clearInterval(interval);
        posts = [];
        interval = setInterval(async () => {
            const response = await RedditClient.getSubreddit(
                `${subreddit}/${ordering}`
            );
            posts = response.data.children;
        }, 5000);
    }
</script>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>

<div class="container">
    <ul>
        {#each posts as post}
            <Post {post} />
        {:else}Loading...{/each}
    </ul>
</div>
