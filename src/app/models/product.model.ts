export enum ProductType {
  SERVICE_COMBO = "SERVICE_COMBO",
  SINGLE_SERVICE = "SINGLE_SERVICE",
  PRODUCT = "PRODUCT"
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({standalone: true, name: 'ProductTypePipe'})
export class ProductTypePipe implements PipeTransform {
  transform(value: string): string {
    switch (value as ProductType) {
      case ProductType.SERVICE_COMBO: return "Combo de serviços"
      case ProductType.SINGLE_SERVICE: return "Serviço avulso"
      case ProductType.PRODUCT: return "Produto"
    }
    return value;
  }
}
