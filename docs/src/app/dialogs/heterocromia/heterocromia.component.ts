import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-heterocromia',
  templateUrl: './heterocromia.component.html',
  styleUrls: ['./heterocromia.component.css']
})
export class HeterocromiaComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }
  ngOnInit(): void {
  }

}
