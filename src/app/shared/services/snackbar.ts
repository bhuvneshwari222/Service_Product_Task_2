import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class SnackBarService{
    constructor(
        private _matSnackbar : MatSnackBar
    ){}

    openSnackBar(msg : string){
        this._matSnackbar.open(msg, 'Close', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        })
    }
}