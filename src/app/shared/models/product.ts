export interface Iproduct {
    prodName: string;
    prodID: string;
    prodStatus: ProdStatus;
}
export enum ProdStatus {
    Delivered = 'Delivered',
    Inprogress = 'Inprogress',
    Dispatched = 'Dispatched'
}
export interface IprodResp<T> {
    data: T,
    msg: string
}