import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

interface SelectItem {
  value: string;
  viewvalue: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})



export class TestComponent implements OnInit {
  migrationSelected!: String;
  tableData:any = {};
  dataSource: any[] = []; 
  displayedColumns: string[] = ['count', 'data', 'schema'];
  source!: string;
  constructor(
    private http: HttpClient,
    private readonly route: ActivatedRoute
  ) {}

  listofTables: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'TableName',
    },
  ];
  listofFunctions: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'FunctionName',
    },
  ];
  listofMViews: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'MViewName',
    },
  ];
  listofViews: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'ViewName',
    },
  ];
  listofSps: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'StoredProcedureName',
    },
  ];
  listofTriggers: SelectItem[] = [
    {
      value: 'Table1',
      viewvalue: 'TriggerName',
    },
  ];

  ngOnInit() {
    console.log(this.route.snapshot);
    this.source = this.route.snapshot.data['source'];
    // // Get list of enitities vai API and assign to variables
    // this.http.get('').subscribe((res) => {
    //   // this.listofFunctions = res.
    //   // this.listofTables = res.constructor
    //   // this.listofMViews = res.
    //   // this.listofSps = res.
    //   //this.listofTriggers = res.
    //   //this.listofViews = res
    // });
  }

  getDataforEntity(entityType: string, entityId: string) {
    console.log(entityType, entityId);
    // get Data end render the table
    // this.http.get('').subscribe((res) => {
    // this.tableData[entityType] = res
    // });
  }
}

