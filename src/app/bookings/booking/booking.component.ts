import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  @Input() address: any;
  @Input() image: any;
  @Input() beds_no: any;
  @Input() refugees: any;
  

  constructor() { }

  ngOnInit(): void {
    console.log(this.refugees)
  }

}
