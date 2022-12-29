import { Component, OnInit } from '@angular/core';
// import * as countdown from 'countdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  oDia: Date = new Date("15 Jul 2023")
  Dias: any;
  Horas: any;
  Minutos: any;
  Segundos: any;


  constructor() {

  }

  ngOnInit(): void {
    this.func()
  }

  func() {
    setInterval(() => {
      const faltam = new Date()

      const milesimos = (this.oDia.valueOf() - faltam.valueOf())
      const totalSeconds = milesimos / 1000

      const seconds = Math.floor((totalSeconds) % 60)
      seconds < 10 ? this.Segundos = `0${seconds}` : this.Segundos = seconds

      const mins = Math.floor(totalSeconds / 60)
      const minutos = Math.floor((totalSeconds / 60) % 60)
      minutos < 10 ? this.Minutos = `0${minutos}` : this.Minutos = minutos


      const hours = Math.floor(mins / 60)
      const horas = Math.floor(hours % 24)
      horas < 10 ? this.Horas = `0${horas}` : this.Horas = horas

      const dias = Math.floor(hours / 24)
      dias < 10 ? this.Dias = `0${dias}` : this.Dias = dias
    }, 1000)

  }


 

}
