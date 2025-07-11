import { createRemoteStore } from '../library/createRemoteStore';
import { fetchEpisodeJson, fetchTimingsJson, type Timing as JsonTiming } from './api';
import type { Episode, Timing } from './types';

const fromJsonTiming = (input: JsonTiming): Timing  => ({
  duration: input.estimated_duration,
  frontTime: input.front_time,
  backTime: input.back_time,
  endTime: input.end_time,
});

export const episodeStore = createRemoteStore<Episode>(async () => {
  const [episode, timings] = await Promise.all([fetchEpisodeJson(), fetchTimingsJson()]);
  let itemSequence = 1; // the sequence # of the item relative to the episode

  return {
    id: episode.episode.id,
    title: episode.episode.title,
    status: episode.episode.status,
    schedule: {
      onAirTime: timings.episode.on_air_time,
      offAirTime: timings.episode.off_air_time,
    },
    parts: episode.episode.parts.map((id) => ({
      id,
      title: episode.part[id].title,
      timing: fromJsonTiming(timings.part[id]),
      items: episode.part[id].items.map((id) => ({
        id,
        sequence: itemSequence++, // makes displaying this number easier
        title: episode.item[id].title,
        timing: fromJsonTiming(timings.item[id])
      }))
    })),
  } as Episode;
});
