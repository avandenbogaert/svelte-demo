<script lang="ts">
    import type { Episode } from '../episode/types';
    import { millisecondsToHHMMSS, unixToHHMMSS } from '../library/time';

    const { episode }: { episode?: Episode } = $props();
</script>

<header class="flex items-center justify-between bg-white px-4 py-3 shadow">
    <div class="flex items-center space-x-4">
        <button class="cursor-pointer" aria-label="back">
            <i class="fas fa-chevron-left text-gray-600"></i>
        </button>
        <div class="relative">
            <button class="flex items-center space-x-1 px-2 py-1 hover:bg-gray-100 rounded">
                <span class="font-medium">Live</span>
                <i class="fas fa-caret-down text-gray-600"></i>
            </button>
        </div>
        {#if episode}
            <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-1">
                    <i class="fas fa-flag text-gray-600"></i>
                    <span>{unixToHHMMSS(episode.schedule.onAirTime)}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <i class="fas fa-flag-checkered text-red-500"></i>
                    <span>{unixToHHMMSS(episode.schedule.offAirTime)}</span>
                </div>
                <div class="flex items-center space-x-1">
                    <i class="fas fa-clock text-gray-600"></i>
                    <span>{millisecondsToHHMMSS((episode.schedule.offAirTime - episode.schedule.onAirTime) * 1000)}</span>
                </div>
            </div>
        {/if}
    </div>

    <div class="flex items-center space-x-2">
        <img src="/user.png" alt="Avatar" class="w-8 h-8 rounded-full" />
        <button class="cursor-pointer" aria-label="open user menu">
            <i class="fas fa-caret-down text-gray-600"></i>
        </button>
    </div>
</header>
