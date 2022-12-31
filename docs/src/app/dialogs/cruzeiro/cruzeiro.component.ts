import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cruzeiro',
  templateUrl: './cruzeiro.component.html',
  styleUrls: ['./cruzeiro.component.css']
})
export class CruzeiroComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
