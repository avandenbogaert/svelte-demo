import { calculateTimings } from './calculateTimings';

type EpisodeJson = {
  episode: {
    id: string;
    status: string;
    title: string;
    parts: string[];
  };
  part: Record<string, {
    id: string;
    title: string;
    items: string[];
  }>;
  item: Record<string, {
    id: string;
    title: string;
  }>;
};

export type Timing = {
  estimated_duration: number;
  front_time: number;
  end_time: number;
  back_time: number;
};

export type TimingJson = {
  episode: {
    on_air_time: number;
    off_air_time: number;
  };
  part: Record<string, Timing>;
  item: Record<string, Timing>;
};

const sleep = async (time: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export async function fetchEpisodeJson(): Promise<EpisodeJson> {
  const res = await fetch(`/episode.json`);
  await sleep(200); // simulate load times
  return await res.json();
}

export async function fetchTimingsJson(): Promise<TimingJson> {
  const res = await fetch(`/timings.json`);
  const timings = await res.json();
  await sleep(200); // simulate load times

  // I fill in the missing data here, as I would suspect the backend would deliver complete data
  // this assumption may or may not be correct, but I don't know the domain.
  // It allows the store to just be concerned with mapping server data and not also calculating time
  return calculateTimings(timings);
}
