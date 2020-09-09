import { Component, OnInit } from '@angular/core';
import { ReporteVentasService } from 'src/app/Services/reporte-ventas.service';
import { ReporteVentas } from 'src/app/Models/reporte-ventas';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private reporteService : ReporteVentasService) { }

  reportes : ReporteVentas[];

  ngOnInit() {
    this.list();
  }

  list() : void{
    this.reporteService.list().subscribe(result => {
      this.reportes = result;
      console.log(this.reportes);
    });
  }


  
}
