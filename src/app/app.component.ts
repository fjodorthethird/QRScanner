import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  scanResult: any='';
  title = 'QRScanner';
  onCodeResult(result:string){
    this.scanResult=result;
  }
}
