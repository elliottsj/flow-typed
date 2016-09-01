declare interface History {
  listen(listener: History$LocationListener): () => void;
}

declare type History$LocationListener = (location: History$Location) => void;

declare type HistoryOptions = {
  go?: (n: number) => void;
};

declare module 'history' {
  createHashHistory(options: HistoryOptions): History;
  createHistory(options: HistoryOptions): History;
  createMemoryHistory(options: HistoryOptions): History;
}
