import { Component, OnInit } from '@angular/core';
import { ApiValuesService } from './api-values.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'client-app';
  values$: Observable<any>;


  constructor(private apiValues: ApiValuesService) {
  }

  ngOnInit(): void {
    this.values$ = this.apiValues.get$();
  }


}
