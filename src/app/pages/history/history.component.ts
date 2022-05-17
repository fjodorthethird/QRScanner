import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  codes: Array<{code: string}> = [
  {code : 'QR123'}, 
  {code : 'QR124'}, 
  {code : 'QR125'}, 
  {code : 'QR126'}, 
  {code : 'QR127'},
  {code : 'QR128'},
  {code : 'QR168'},
  {code : 'QR113'},
  {code : 'QR111'},
  {code : 'QR100'}];
  constructor() { }

  ngOnInit(): void {
  }

}
