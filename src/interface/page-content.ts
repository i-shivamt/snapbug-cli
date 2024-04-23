export interface PageContent<T> {
  totalElements: number;
  totalPages: number;
  content: T[];
}
