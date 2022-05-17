import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  scanResult: any='';
  onCodeResult(gotMsg:string){
    if (gotMsg != this.scanResult){
      this.scanResult=gotMsg;
      Swal.fire({
        title: 'Result',
        text: this.scanResult,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Save'
        }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("QR Code Hash goes to IndexedDB.....")
      }
    })
  }
}
  constructor() { }

  ngOnInit(): void {
  }

}
