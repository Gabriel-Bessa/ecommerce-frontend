import {Component, Input} from '@angular/core';
import {ChipModule} from "primeng/chip";
import {NgIf} from "@angular/common";
import {ProductType, ProductTypePipe} from "../../models/product.model";

@Component({
  selector: 'ec-product-type-chip',
  standalone: true,
    imports: [
        ChipModule,
        NgIf,
        ProductTypePipe
    ],
  templateUrl: './product-type-chip.component.html',
  styleUrl: './product-type-chip.component.css'
})
export class ProductTypeChipComponent {
    @Input("type") type: ProductType = ProductType.PRODUCT
}
