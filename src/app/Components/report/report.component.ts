import { Component, OnInit, Input } from '@angular/core';
import { ReporteVentasService } from 'src/app/Services/reporte-ventas.service';
import { ReporteVentas } from 'src/app/Models/reporte-ventas'
import { Chart } from 'chart.js';
import { Label, SingleDataSet, MultiDataSet } from 'ng2-charts';
import { Data } from '@angular/router';
import { ReportePedidos } from 'src/app/Models/reporte-pedidos';
import { element } from 'protractor';
import { ReporteProductosMes } from 'src/app/Models/reporte-productos-mes';
import { ReporteVentasMes } from 'src/app/Models/reporte-ventas-mes';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  //reporte de productos más vendidos
  reportes : ReporteVentas[];
  cantidad : SingleDataSet = [];
  nombres : Label[] = [];
  //reporte de pedidos
  pedidos: ReportePedidos[];
  numero: SingleDataSet = [];
  nombre : string[]  = [];
  //reporte de pedidos en el mes 
  pedidosMes : Array<ReporteVentasMes>[];
  nom : string [] = [];
  mes : number [] = [];
  cant : number [] = [];
  pedidosmeses : ReporteVentasMes[] = [];

  //reporte de productos en el mes
  productosMes : Array<ReporteProductosMes>[];
  m : number[] = [];
  p : string[] = [];
  c : number[] = [];
  productosmeses : ReporteProductosMes[] = [];
  

  constructor(private reporteService : ReporteVentasService) { }

  ngOnInit() {
    this.listventasMes();
    this.listPedidosMes();
    this.list();
    this.listpedidos();
  }

  listventasMes() : void{
    this.reporteService.listVentas().subscribe(result =>{
      this.productosMes = result;
      this.productosmeses = this.productosMes[0];
      this.datosProductos();
    });
  }

  datosProductos(){
    var myBarChart = new Chart("Pedidos", {
      type: 'bar',
      data: {
        labels: ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [
          
        ]
      }
    });
    console.log("datos" + this.pedidosmeses);
    var meses = 0;
    var cont = 0;
    this.productosmeses.forEach(x =>{
      this.p.push(x.Producto);
      this.c.push(x.Cantidad);
      this.m.push(x.MES);
      meses++;
      if(meses == 12){
        myBarChart.data.labels.push
				myBarChart.data.datasets.push({
          label: this.p[0],
          backgroundColor: (this.getRandomColor()),
          data: this.c,
        })
        meses = 0;
        //this.dat[cont] = {cont,Cliente: this.nom,Pedidos: this.cant};
        this.p = [];
        this.c = [];
        cont++;
      }
    });
  }

  listPedidosMes(){
    this.reporteService.list().subscribe(result =>{
      this.pedidosMes = result;
      console.log(this.pedidosMes[0]);
      this.pedidosmeses = this.pedidosMes[0];
      console.log(this.pedidosmeses);
      this.datos();
    });
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  datos() {

    var myBarChart = new Chart("Productos", {
      type: 'bar',
      data: {
        labels: ["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        datasets: [
          
        ]
      }
    });
    console.log("datos" + this.pedidosmeses);
    var meses = 0;
    var cont = 0;
    this.pedidosmeses.forEach(x =>{
      this.nom.push(x.Cliente);
      this.cant.push(x.Pedidos);
      this.mes.push(x.MES);
      meses++;
      if(meses == 12){
        myBarChart.data.labels.push
				myBarChart.data.datasets.push({
          label: this.nom[0],
          backgroundColor: (this.getRandomColor()),
          data: this.cant,
        })
        meses = 0;
        //this.dat[cont] = {cont,Cliente: this.nom,Pedidos: this.cant};
        this.nom = [];
        this.cant = [];
        cont++;
      }
      console.log("nombre" + this.nom);
      console.log("cantidad" + this.cant);
    });
  }

  //lista los productos más vendidos
  list() : void{
    this.reporteService.listProductos().subscribe(result => {
      this.reportes = result;
      this.datosP();
    });
  }

  datosP() {
    this.reportes.forEach(element => {
      this.cantidad.push(element.Cantidad);
      this.nombres.push(element.Producto);
    });

    var myChart = new Chart("ProductosP", {
      type: 'doughnut',
      data: {
          labels: this.nombres,
          datasets: [{
              label: '# of Votes',
              data: this.cantidad,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
    });
  }

  //reportes de los clientes con más pedidos
  listpedidos(){
    this.reporteService.listPedidos().subscribe(x => {
      this.pedidos = x;
      this.datospedidos();
    });
  }

  datospedidos(){
    this.pedidos.forEach(element => {
      this.nombre.push(element.Cliente);
      this.numero.push(element.Pedidos);
    });

    var pedidos = new Chart("PedidosP", {
      type: 'doughnut',
      data: {
          labels: this.nombre,
          datasets: [{
              label: '# of Votes',
              data: this.numero,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
    });
  }
}
