import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrancoComponent } from '../dialogs/branco/branco.component';
import { CinemaRbComponent } from '../dialogs/cinema-rb/cinema-rb.component';
import { CruzeiroComponent } from '../dialogs/cruzeiro/cruzeiro.component';
import { DespedidaComponent } from '../dialogs/despedida/despedida.component';
import { FamiliaComponent } from '../dialogs/familia/familia.component';
import { HeterocromiaComponent } from '../dialogs/heterocromia/heterocromia.component';
import { PedidoComponent } from '../dialogs/pedido/pedido.component';
import { PintinhoComponent } from '../dialogs/pintinho/pintinho.component';
import { PrincipalComponent } from '../dialogs/principal/principal.component';
import { ReencontroComponent } from '../dialogs/reencontro/reencontro.component';

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


  constructor(
    public modal: NgbModal
  ) {}
  
  openPrincipal(){
    this.modal.open(PrincipalComponent, { centered: true })
  }
  openPintinho() {
    this.modal.open(PintinhoComponent, { centered: true })
  }
  openHeterocromia() {
    this.modal.open(HeterocromiaComponent, { centered: true })
  }
  openCinemaRB() {
    this.modal.open(CinemaRbComponent, { centered: true })
  }
  openPedido() {
    this.modal.open(PedidoComponent, { centered: true })
  }
  openReencontro() {
    this.modal.open(ReencontroComponent, { centered: true })
  }
  openSaida() {
    this.modal.open(FamiliaComponent, { centered: true })
  }
  openCruzeiro() {
    this.modal.open(CruzeiroComponent, { centered: true })
  }
  openDespedida() {
    this.modal.open(DespedidaComponent, { centered: true })
  }
  openBranco() {
    this.modal.open(BrancoComponent, { centered: true })
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
