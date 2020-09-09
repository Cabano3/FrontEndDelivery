import { Component, OnInit } from '@angular/core';
import { ReporteVentasService } from 'src/app/Services/reporte-ventas.service';
import { ReporteVentas } from 'src/app/Models/reporte-ventas'
import { Chart } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {



  constructor(private reporteService : ReporteVentasService) { }

  reportes : ReporteVentas[];

  ngOnInit() {
    var myChart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
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
 
 
  

  list() : void{
    this.reporteService.list().subscribe(result => {
      this.reportes = result;
      console.log(this.reportes);
    });
  }


  
}
