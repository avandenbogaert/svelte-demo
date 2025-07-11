<script lang="ts">
import Header from './components/Header.svelte';
import { episodeStore } from './episode/store';
import Episode from './components/Episode.svelte';
</script>

<Header episode={$episodeStore.data} />
<main class="p-4">
    <Episode episode={$episodeStore.data} isLoading={$episodeStore.isLoading} />
</main>
