import type { Timing, TimingJson } from './api';

// I wouldn't necessarily always create new objects inside .reduce(), but the assignment mentioned "a copy of the data" so I made it immutable
// in this particular use case, I don't think it would be necessary to have it immutable (raw data coming from api and getting preprocessed)
function calculateForwardTimings(input: Record<string, Timing>, start: number) {
  let progress = start;

  return Object.keys(input).reduce((output, id) => ({
    ...output,
    [id]: {
      ...input[id],
      front_time: progress,
      end_time: progress += (input[id].estimated_duration / 1000),
    }
  }), {} as Record<string, Timing>);
}

// from the example given, the back_time would equal the front_time, but given the assigment I assumed it would be necessary to calculate "back_time"
// in reverse order compared to front_time
function calculateBackwardTimings(input: Record<string, Timing>, end: number) {
  let progress = end;

  return Object.keys(input).reverse().reduce((output, id) => ({
    ...output,
    [id]: {
      ...input[id],
      back_time: progress -= (input[id].estimated_duration / 1000),
    },
  }), {} as Record<string, Timing>);
}

export const calculateTimings = (input: TimingJson): TimingJson => ({
  ...input,
  part: calculateBackwardTimings(
    calculateForwardTimings(input.part, input.episode.on_air_time),
    input.episode.off_air_time
  ),
  item: calculateBackwardTimings(
    calculateForwardTimings(input.item, input.episode.on_air_time),
    input.episode.off_air_time
  ),
});
