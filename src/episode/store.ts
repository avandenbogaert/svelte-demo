import { createQueryStore } from '../library/createQueryStore';
import { fetchSourceData, type Timing as JsonTiming } from './api';
import type { Episode, Timing } from './types';

const fromJsonTiming = (input: JsonTiming): Timing  => ({
  duration: input.estimated_duration,
  frontTime: input.front_time,
  backTime: input.back_time,
  endTime: input.end_time,
});

export const episodeStore = createQueryStore<Episode>(async (): Promise<Episode> => {
  const { episode: { episode, part, item }, timings } = await fetchSourceData();
  let itemSequence = 1; // the sequence # of the item relative to the episode

  return {
    id: episode.id,
    title: episode.title,
    status: episode.status as Episode['status'],
    schedule: {
      onAirTime: timings.episode.on_air_time,
      offAirTime: timings.episode.off_air_time,
    },
    parts: episode.parts.map((id) => ({
      id,
      title: part[id].title,
      timing: fromJsonTiming(timings.part[id]),
      items: part[id].items.map((id) => ({
        id,
        sequence: itemSequence++, // makes displaying this number easier
        title: item[id].title,
        timing: fromJsonTiming(timings.item[id])
      }))
    })),
  };
});
