import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Iproduct } from '../../models/product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../services/product';
import { SnackBarService } from '../../services/snackbar';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {
  @ViewChild('prodForm') prodForm !: NgForm;
  prodArr: Iproduct[] = [];

  constructor(
    private _prodService: ProductService,
    private _snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
    this._prodService.fetchProduct()
      .subscribe({
        next: resp => {
          this.prodArr = resp;
        }
      })
  }

  onSubmit() {
    let newProd: Iproduct = {
      ...this.prodForm.form.value,
      prodID: Date.now().toString()
    }
    this._prodService.addProduct(newProd)
      .subscribe({
        next: resp => {
          this._snackBar.openSnackBar(resp.msg);
          this.prodForm.resetForm();
        }
      })
  }

  trackByProdID(index: number, prod: Iproduct) {
    return prod.prodID;
  }

}
