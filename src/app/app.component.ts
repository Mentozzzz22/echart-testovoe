import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChartPaintingFormComponent} from './chart-painting-form/chart-painting-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartPaintingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testovoe-echart';
}
