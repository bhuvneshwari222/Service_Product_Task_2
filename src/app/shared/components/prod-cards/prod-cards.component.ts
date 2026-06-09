import { Component, Input, OnInit, Output } from '@angular/core';
import { Iproduct, ProdStatus } from '../../models/product';
import { ProductService } from '../../services/product';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-prod-cards',
  templateUrl: './prod-cards.component.html',
  styleUrls: ['./prod-cards.component.scss']
})
export class ProdCardsComponent implements OnInit {
  @Input() getProduct !: Iproduct;
  prodStatus = ProdStatus

  constructor(
    private _prodService : ProductService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }

  onUpdateStatus(prod_Status:ProdStatus){
    let updatedProd : Iproduct = {
      ...this.getProduct,
      prodStatus : prod_Status
    }
    this._prodService.updateProduct(updatedProd)
    .subscribe({
      next: resp =>{
        this._snackBar.openSnackBar(resp.msg);
      }
    })
  }

}
