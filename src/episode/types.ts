export type Episode = {
  id: string;
  status: 'active'|'inactive';
  title: string;
  parts: Part[];
  schedule: {
    onAirTime: number;
    offAirTime: number;
  }
};

export type Part = {
  id: string;
  title: string;
  items: Item[];
  timing: Timing;
};

export type Item = {
  id: string;
  sequence: number;
  title: string;
  timing: Timing;
};

export type Timing = {
  duration: number;
  frontTime: number;
  endTime: number;
  backTime: number;
};
