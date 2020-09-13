<script lang="ts">
    import PostList from "./PostList.svelte";
    import Navbar from "./Navbar.svelte";
    import SubredditInput from "./SubredditInput.svelte";

    let ordering = "new";
    let subreddit = "hardwareswap";
</script>

<style>
    .main-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .with-sidebar {
        display: flex;
        align-items: stretch;
        flex-wrap: wrap;
        flex: auto;
    }
    .sidebar {
        padding: 8px;
        flex-grow: 0 0 20rem;
    }
    .main-content {
        padding: 8px;
        flex: 1 1;
        overflow-y: scroll;
    }
    .content {
        padding: 8px;
        margin: 0 auto;
        max-width: 600px;
    }
</style>

<main>
    <Navbar />
    <div class="content">
        <SubredditInput bind:subreddit bind:ordering />
        <PostList {subreddit} {ordering} />
    </div>
</main>
