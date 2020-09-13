<script lang="ts">
    export let subreddit: string;
    export let ordering: string;

    let subredditInput = "";
    let orderingInput = "new";

    const updateSubreddit = () => {
        subreddit = subredditInput;
        ordering = orderingInput;
    };
</script>

<style>
    form {
        display: flex;
        flex-direction: row;
    }
    form input {
        flex-grow: 1;
    }
    form button {
        width: 4em;
    }
</style>

<main>
    <form on:submit|preventDefault={updateSubreddit}>
        <input bind:value={subredditInput} placeholder="subreddit" />
        <select bind:value={orderingInput}>
            <option value="hot">Hot</option>
            <option value="new">New</option>
            <option value="rising">Rising</option>
            <option value="controversial">Controversial</option>
            <option value="top">Top</option>
        </select>
        <button type="submit">Go</button>
    </form>
</main>
