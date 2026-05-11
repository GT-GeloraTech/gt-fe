export type Nullable<T> = T | null;
export type Maybe<T> = T | null | undefined;

export interface Paginated<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
}

export interface ApiErrorBody {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}
