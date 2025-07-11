<script lang="ts">
    const { error }: { error: string } = $props();
</script>

<div class="p-4 w-min-[500px] w-max-[1280px] my-2 rounded border border-red-400 bg-red-100 text-red-800">
    <i class="fa-solid fa-circle-exclamation "></i>
    <strong class="font-semibold">An error occurred:</strong> {error}
</div>
