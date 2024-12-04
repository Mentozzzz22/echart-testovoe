import {inject, Injectable} from '@angular/core';
import {DataPoint} from './chart-painting-form/chart-painting-form.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface ServerResponse {
  data: DataPoint[];
  presets: { [key: string]: any };
}

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  private http = inject(HttpClient)

  getData(): Observable<ServerResponse> {
    return this.http.get<ServerResponse>('/assets/res.json');
  }
}
