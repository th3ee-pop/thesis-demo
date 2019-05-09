import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      name: '高血压',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: '心脏病',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: '糖尿病',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    private http: _HttpClient
  ) { }

  ngOnInit() {
  }


}
