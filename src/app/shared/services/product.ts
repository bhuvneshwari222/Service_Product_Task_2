import { Injectable } from "@angular/core";
import { IprodResp, Iproduct, ProdStatus } from "../models/product";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ProductService {
    products : Iproduct[] = [
        {
            prodName: "iPhone 15",
            prodID: "P101",
            prodStatus: ProdStatus.Delivered
        },
        {
            prodName: "Samsung Galaxy S24",
            prodID: "P102",
            prodStatus: ProdStatus.Inprogress
        },
        {
            prodName: "OnePlus 12",
            prodID: "P103",
            prodStatus: ProdStatus.Dispatched
        },
        {
            prodName: "Realme Narzo 70",
            prodID: "P104",
            prodStatus: ProdStatus.Delivered
        },
        {
            prodName: "Redmi Note 13",
            prodID: "P105",
            prodStatus: ProdStatus.Inprogress
        },
        {
            prodName: "Vivo V30",
            prodID: "P106",
            prodStatus: ProdStatus.Dispatched
        },
        {
            prodName: "Oppo Reno 11",
            prodID: "P107",
            prodStatus: ProdStatus.Delivered
        }
    ];

    fetchProduct():Observable<Iproduct[]>{
        return of(this.products);
    }

    addProduct(newProduct: Iproduct): Observable<IprodResp<Iproduct>>{
        this.products.unshift(newProduct);
        return of({
            msg: `The new product ${newProduct} is added successfully!!!`,
            data: newProduct
        });
    }

    updateProduct(updatedProd: Iproduct): Observable<IprodResp<Iproduct>>{
        let getIndex = this.products.findIndex(p => p.prodID === updatedProd.prodID);
        this.products[getIndex] = updatedProd;
        return of({
            msg: `The product ${updatedProd.prodName} is upadated successfully and its status is ${updatedProd.prodStatus}!!!`,
            data: updatedProd
        })
    }
}