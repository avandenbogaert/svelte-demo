<script lang="ts">
    import type { Item } from '../episode/types';
    import Timing from './Timing.svelte';
    let { item }: { item: Item } = $props();
</script>

<tr class="border-zinc-200 text-sm">
    <td class="text-sm text-zinc-400 text-center">{item.sequence}</td>
    <td class="px-4 py-2 flex gap-2 items-center">
        <i class="fa fa-caret-right text-zinc-400"></i>
        <div class="uppercase bg-zinc-400 text-zinc-50 font-semibold text-[0.85em] px-1.5 py-1 rounded">
            Item #
        </div>
    </td>
    <td class="px-4 py-2 font-semibold">{item.title}</td>
    <Timing timing={item.timing} />
    <td></td>
</tr>
