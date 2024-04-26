export interface TablePageableModel {
  header: string;
  field: string;
  action?: ActionModel;
}

export interface ActionModel {
  type: 'delete' | 'create' | 'update' | 'get';
  icon: 'pi pi-trash' | 'pi pi-plus' | 'pi pi-pencil' | 'pi pi-eye';
  functionReciver: Function;
}

export interface Page<T> {
  content: T[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export class PageImpl<T> implements Page<T> {
  content: T[] = [];
  empty: boolean = true;
  first: boolean = true;
  last: boolean = true;
  number: number = 1;
  numberOfElements: number = 10;
  size: number = 20;
  totalElements: number = 40;
  totalPages: number = 20;
}
