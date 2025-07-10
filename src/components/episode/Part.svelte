<script lang="ts">
  import Item from './Item.svelte';

  let isOpen = $state<boolean>(true);
  const toggleState = () => isOpen = !isOpen;
</script>

<tr class="bg-zinc-200 font-semibold">
    <td></td>
    <td class="px-4 py-2 flex gap-2">
        <button class="cursor-pointer" aria-label={isOpen ? 'collapse' : 'expand'} onclick={toggleState}>
            <i class={`fas fa-caret-${isOpen ? 'down' : 'right'} text-gray-600`}></i>
        </button>
        <div class="uppercase font-medium">Part</div>
    </td>
    <td class="px-4 py-2 text-left">Part 1</td>
    <td class="px-4 py-2 text-right">10:00</td>
    <td class="px-4 py-2 text-right text-zinc-400">13:00:00</td>
    <td class="px-4 py-2 text-right text-zinc-400">13:10:00</td>
    <td class="px-4 py-2 text-right text-zinc-400">13:00:00</td>
    <td></td>
</tr>

{#if isOpen}
    <Item />
    <Item />
{/if}
