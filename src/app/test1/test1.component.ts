import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
interface SelectItem {
  value:string;
  viewvalue:string;
}


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  isbuttonDisabled:boolean = false;
  inputValue:any = "Enter input Value";
  name = 'Angular ' + VERSION.major;
  migrationSelected!: String;
  tableData:any = {};
  dataSource: any[] = []; 
  
  displayedColumns: string[] = ['position', 'count', 'data', 'schema'];
  constructor(private http: HttpClient) {}

  listofTables: SelectItem[] = [
    {
      value: 'Table',
      viewvalue: 'TableName',
    },
  ];
  listofFunctions: SelectItem[] = [
    {
      value: 'Function',
      viewvalue: 'FunctionName',
    },
  ];
  listofMViews: SelectItem[] = [
    {
      value: 'Materialized View',
      viewvalue: 'MaterializedViewName',
    },
  ];
  listofViews: SelectItem[] = [
    {
      value: 'View',
      viewvalue: 'ViewName',
    },
  ];
  listofSps: SelectItem[] = [
    {
      value: 'StoredProcedures',
      viewvalue: 'StoredProceduresName',
    },
  ];
  listofTriggers: SelectItem[] = [
    {
      value: 'Triggers',
      viewvalue: 'TriggersName',
    },
  ];
  inputChanges(event:any){
    console.log(event);
  }
 
  ngOnInit() {
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
