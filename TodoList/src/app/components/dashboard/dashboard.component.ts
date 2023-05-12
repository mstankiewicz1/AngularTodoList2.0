import { Component } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  taskObj:Task = new Task();
  taskArr:Task[] = [];

  addTaskValue:string = '';

  constructor(private crudService: CrudService) {}

  addTask(etask: Task) {
    // this.CrudService.
  }

}
