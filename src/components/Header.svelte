<script lang="ts">
    import { millisecondsToHHMMSS, unixToHHMMSS } from '../library/time';
    import type { Episode } from '../episode/types';
    import Skeleton from './ui/Skeleton.svelte';

    const { episode }: { episode?: Episode } = $props();
</script>

<header class="flex items-center justify-between bg-white px-4 py-3 shadow">
    <div class="flex items-center gap-4">
        <button class="cursor-pointer" aria-label="back">
            <i class="fas fa-chevron-left text-gray-600"></i>
        </button>
        <div class="relative">
            <button class="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded">
                <span class="font-medium">Live</span>
                <i class="fas fa-caret-down text-gray-600"></i>
            </button>
        </div>
        <div class="flex items-center gap-4">
            <div class="flex items-center gap-1 w-24">
                <i class="fas fa-flag text-green-500"></i>
                {#if episode}
                    <span>{unixToHHMMSS(episode.schedule.onAirTime)}</span>
                {:else}
                    <Skeleton width="full" />
                {/if}
            </div>
            <div class="flex items-center gap-1 w-24">
                <i class="fas fa-flag-checkered text-red-500"></i>
                {#if episode}
                    <span>{unixToHHMMSS(episode.schedule.offAirTime)}</span>
                {:else}
                    <Skeleton width="full" />
                {/if}
            </div>
            <div class="flex items-center gap-1 w-24">
                <i class="fas fa-stopwatch text-gray-600"></i>
                {#if episode}
                    <span>{millisecondsToHHMMSS((episode.schedule.offAirTime - episode.schedule.onAirTime) * 1000)}</span>
                {:else}
                    <Skeleton width="full" />
                {/if}
            </div>
        </div>
    </div>

    <div class="flex items-center gap-2">
        <img src="/user.png" alt="Avatar" class="w-8 h-8 rounded-full" />
        <button class="cursor-pointer" aria-label="open user menu">
            <i class="fas fa-caret-down text-gray-600"></i>
        </button>
    </div>
</header>
