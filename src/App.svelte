<script lang="ts">
import Header from './components/Header.svelte';
import Part from './components/Part.svelte';
import { episodeStore } from './episode/store';

let store = episodeStore;
</script>

<Header episode={$store.data} />
<main class="p-4">
    <div class="overflow-x-auto bg-white shadow rounded-lg">
        <table class="min-w-full table-auto text-zinc-600">
            <thead class="bg-gray-50">
                <tr>
                    <th class="w-24"></th>
                    <th class="px-4 py-2 text-left font-light" colspan="2">Rundown</th>
                    <th class="px-4 py-2 text-right font-light">Est. duration</th>
                    <th class="px-4 py-2 text-right font-light">Front time</th>
                    <th class="px-4 py-2 text-right font-light">End time</th>
                    <th class="px-4 py-2 text-right font-light">Back time</th>
                    <th class="w-12"><i class="cursor-pointer fa fa-plus"></i></th>
                </tr>
            </thead>
            <tbody class="divide-y">
            {#if $store.data }
                {#each $store.data.parts as part }
                    <Part part={part} />
                {/each}
            {/if}
            </tbody>
        </table>
    </div>
</main>
