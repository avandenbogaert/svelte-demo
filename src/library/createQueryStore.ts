import { writable } from 'svelte/store';

type Store<T> = {
  data?: T;
  isLoading: boolean;
  error?: Error
}

// loosely inspired by how @tanstack/query would work
export function createQueryStore<T>(fetcher: () => Promise<T>) {
  const { subscribe, set } = writable<Store<T>>({ isLoading: true });

  const controller = new AbortController();

  async function load() {
    set({ data: undefined, isLoading: true, error: undefined });

    try {
      set({ data: await fetcher(), isLoading: false, error: undefined });
    } catch (err) {
      console.error('[QueryStore] An error occurred while fetching store data', err);

      if (err instanceof Error && err.name !== 'AbortError') {
        set({ data: undefined, isLoading: false, error: err });
      } else {
        set({ data: undefined, isLoading: false, error: new Error('unknown error') });
      }
    }
  }

  load();

  return {
    subscribe,
    refetch: load,
    cancel: () => controller.abort(),
  };
}
