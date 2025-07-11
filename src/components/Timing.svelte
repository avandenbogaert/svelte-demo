<script lang="ts">
  import { millisecondsToMMSS, unixToHHMMSS } from '../library/time'
  import type { Timing } from '../episode/types';

  const { timing } : { timing: Timing } = $props();
</script>

<td class="px-4 py-2 text-right">{millisecondsToMMSS(timing.duration)}</td>
<td class="px-4 py-2 text-right">{unixToHHMMSS(timing.frontTime)}</td>
<td class="px-4 py-2 text-right text-zinc-400">{unixToHHMMSS(timing.endTime)}</td>
<td class="px-4 py-2 text-right">{unixToHHMMSS(timing.backTime)}</td>
