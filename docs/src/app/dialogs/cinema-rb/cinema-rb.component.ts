import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cinema-rb',
  templateUrl: './cinema-rb.component.html',
  styleUrls: ['./cinema-rb.component.css']
})
export class CinemaRbComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
