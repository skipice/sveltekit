<script lang="ts">
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<ul>
    {#each data.booksData as book}
        <li>{book.title}</li>
    {/each}
</ul>
