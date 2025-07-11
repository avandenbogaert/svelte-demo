<script lang="ts">
import Header from './components/Header.svelte';
import { episodeStore } from './episode/store';
import Episode from './components/Episode.svelte';
import Error from './components/ui/Error.svelte';
</script>

<Header episode={$episodeStore.data} />
<main class="p-4 flex justify-center">
    {#if $episodeStore.error}
        <Error error={$episodeStore.error.message}/>
    {:else}
        <Episode episode={$episodeStore.data} isLoading={$episodeStore.isLoading} />
    {/if}
</main>
