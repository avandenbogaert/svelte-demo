<script lang="ts">
  import Item from './Item.svelte';
  import type { Part } from '../episode/types';
  import Timing from './Timing.svelte';

  const { part }: { part: Part } = $props();
  let isOpen = $state<boolean>(true);

  const toggleState = () => isOpen = !isOpen;
</script>

<tr class="cursor-pointer bg-zinc-200 font-semibold border-zinc-300" onclick={toggleState}>
    <td></td>
    <td class="px-4 py-2 flex gap-2">
        <div><i class={`fas fa-caret-${isOpen ? 'down' : 'right'} text-gray-600`}></i></div>
        <div class="uppercase font-medium">Part</div>
    </td>
    <td class="px-4 py-2 text-left">{part.title}</td>
    <Timing timing={part.timing} />
    <td></td>
</tr>

{#if isOpen}
    {#each part.items as item}
        <Item item={item} />
    {/each}
{/if}
