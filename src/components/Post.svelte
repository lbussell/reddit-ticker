<script lang="ts">
    import {
        relativeDateTimeFormatter,
        pluralFormatter,
    } from "../util/formatters";
    import type { Link } from "../models/Link";

    export let post: Link;
</script>

<style>
    .container {
        padding: 0.5em 0em 0.5em 0em;
        border-bottom: 1px solid rgba(1, 1, 1, 0.25);
    }
    .above {
        display: flex;
        flex-direction: row;
    }
    .title {
        font-weight: 500;
        font-size: 1.1em;
    }
    .below {
        display: flex;
        flex-direction: row;
    }
    .below div {
        margin-right: 1em;
    }
</style>

<li class="container">
    <div class="above">
        <div>{relativeDateTimeFormatter(post.data.created_utc)}</div>
    </div>
    <div class="title">
        <a
            href={'https://reddit.com' + post.data.permalink}>{post.data.title}</a>
    </div>
    <div class="below">
        <div>{pluralFormatter(post.data.score, 'upvote', 'upvotes')}</div>
        <div>
            {pluralFormatter(post.data.num_comments, 'response', 'responses')}
        </div>
    </div>
</li>
