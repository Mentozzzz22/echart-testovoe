import {Component, inject, OnInit} from '@angular/core';
import {NgxEchartsDirective, NgxEchartsModule} from 'ngx-echarts';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {ChartDataService} from '../chart-data.service';

export interface DataPoint {
  [key: string]: number;
}

@Component({
  selector: 'app-chart-painting-form',
  standalone: true,
  imports: [NgxEchartsDirective, FormsModule, NgForOf, ReactiveFormsModule],
  templateUrl: './chart-painting-form.component.html',
  styleUrl: './chart-painting-form.component.css'
})

export class ChartPaintingFormComponent implements OnInit {

  form: FormGroup;
  data: DataPoint[] = [];
  variableKeys: string[] = [];
  chartOptions: any;

  constructor(private fb: FormBuilder, private dataService: ChartDataService) {
    this.form = this.fb.group({
      graphColor: ['#ff0000'],
      xAxis: ['var1'],
      yAxis: ['var2']
    });
  }

  ngOnInit(): void {

    this.dataService.getData().subscribe((response) => {
      this.data = response.data;
      this.variableKeys = Object.keys(this.data[0]);

      this.form.patchValue({
        xAxis: this.variableKeys[0],
        yAxis: this.variableKeys[1]
      });

      this.updateChart();

      this.form.valueChanges.subscribe(() => this.updateChart());
    });
  }

  updateChart(): void {
    const {graphColor, xAxis, yAxis} = this.form.value;

    this.chartOptions = {
      color: [graphColor],
      xAxis: {type: 'value', name: xAxis},
      yAxis: {type: 'value', name: yAxis},
      series: [
        {
          type: 'line',
          data: this.data
            .map((point) => [point[xAxis as keyof DataPoint], point[yAxis as keyof DataPoint]]),
          smooth: true,
        },
      ],
    };
  }
}
