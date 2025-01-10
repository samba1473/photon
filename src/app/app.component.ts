import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectedDataComponent } from '../app/selected-data/selected-data.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'registration_form';
  public data: any;
  public sliceData: any;
  public dataSource!: MatTableDataSource<any>;  // Definite Assignment Assertion
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;  // Use definite assignment assertion
  
  constructor(public serv: DataService, public dialog: MatDialog) {}

  public api = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
  displayedColumns: string[] = ['dbn', 'school_name', 'boro', 'campus_name', 'state_code', 'attendance_rate','website', 'info'];

  // Get data from service
  getData() {
    this.serv.getData().subscribe((d) => {
      this.data = d;
      // Initialize MatTableDataSource with full data
      this.dataSource = new MatTableDataSource(this.data);
      // Set paginator after data is loaded
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
    this.getData();
  }

  ngAfterViewInit() {
    // Ensure paginator is set after view initialization
    this.dataSource.paginator = this.paginator;
  }

  // Info dialog method
  info(id: any): void {
    const data = this.dataSource.data[id];
    console.log(data)
    this.dialog.open(SelectedDataComponent, {
      width: '80%',
      height: 'auto',
      data: { data: data },
      panelClass: 'custom-dialog-container',
      hasBackdrop: true,
      position: {
        top: '10%',
        left: '10%',
      },
    });
  }
}
