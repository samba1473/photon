import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-selected-data',
  templateUrl: './selected-data.component.html',
  styleUrls: ['./selected-data.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  

})
export class SelectedDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  displayedColumns: string[] = ['dbn', 'school_name', 'boro', 'campus_name', 'state_code', 'city','total_students'];
}

