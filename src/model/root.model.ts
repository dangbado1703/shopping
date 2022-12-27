export interface InitStateForm<T> {
  isLoading?: boolean;
  data?: T;
  message?: string;
  totalElements?: number;
  dataCart: any[];
  totalCart?: number | undefined;
}
