<script lang="ts">
import SkeletonRow from './ui/SkeletonRow.svelte';
import Part from './Part.svelte';
import type { Episode } from '../episode/types';

type Props = {
  isLoading: boolean;
  episode?: Episode;
};

// I could just import episodeStore here, but having an Episode component that expects an "episode" makes sense
const { isLoading, episode }: Props = $props();
</script>

<div class="w-full overflow-x-auto bg-white shadow rounded-lg">
    <table class="min-w-full table-auto text-zinc-600">
        <thead class="bg-gray-50">
        <tr>
            <th class="w-24"></th>
            <th class="w-64 px-4 py-2 text-left font-light">Rundown</th>
            <th class="w-80 px-4 py-2 text-left font-light"></th>
            <th class="px-4 py-2 text-right font-light">Est. duration</th>
            <th class="px-4 py-2 text-right font-light">Front time</th>
            <th class="px-4 py-2 text-right font-light">End time</th>
            <th class="px-4 py-2 text-right font-light">Back time</th>
            <th class="w-12"><i class="cursor-pointer fa fa-plus"></i></th>
        </tr>
        </thead>
        <tbody class="divide-y">
        {#if isLoading}
            {#each Array(8) as _}
                <SkeletonRow columns={8} />
            {/each}
        {/if}
        {#each episode?.parts ?? [] as part}
            <Part part={part} />
        {/each}
        </tbody>
    </table>
</div>
