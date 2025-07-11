import type { Timing, TimingJson, EpisodeJson } from './api';

function calculateForwardTimings(input: Record<string, Timing>, start: number, sequence: string[]) {
  const output: Record<string, Timing> = {};
  let progress = start;

  for (const id of sequence) {
    output[id] = {
      ...input[id],
      front_time: progress,
      end_time: progress += Math.floor(input[id].estimated_duration / 1000),
    };
  }

  return output;
}

function calculateBackwardTimings(input: Record<string, Timing>, end: number, sequence: string[]) {
  const output: Record<string, Timing> = {};
  let progress = end;

  for (const id of [...sequence].reverse()) {
    output[id] = {
      ...input[id],
      back_time: progress -= Math.floor(input[id].estimated_duration / 1000),
    };
  }

  return output;
}

function getItemSequence({ episode, part }: EpisodeJson): string[] {
  return episode.parts.flatMap((id) => part[id].items);
}

// It seems I didn't really need episode.json to determine the correct order of items and parts,
// since they seem correctly ordered in the timings.json already.
// -
// However, given the assignment, I assume the order of items and parts are to be derived from the episode.json,
// instead of assuming timings.json has the correct order, since object keys aren't guaranteed to be ordered correctly
export const calculateTimings = (timingInput: TimingJson, episodeInput: EpisodeJson): TimingJson => {
  const itemSequence = getItemSequence(episodeInput);
  const partSequence = episodeInput.episode.parts;

  return {
    ...timingInput,
    part: calculateBackwardTimings(
      calculateForwardTimings(timingInput.part, timingInput.episode.on_air_time, partSequence),
      timingInput.episode.off_air_time,
      partSequence,
    ),
    item: calculateBackwardTimings(
      calculateForwardTimings(timingInput.item, timingInput.episode.on_air_time, itemSequence),
      timingInput.episode.off_air_time,
      itemSequence
    ),
  }
};
