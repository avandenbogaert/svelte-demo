<script lang="ts">
  import Skeleton from './Skeleton.svelte';
  const { columns = 5 }: { columns: number } = $props();
</script>

<tr class="border-zinc-200 h-10">
    {#each Array(columns) as _, i}
        <td class="px-2 py-2">
            <Skeleton width="full" height="lg" />
        </td>
    {/each}
</tr>
