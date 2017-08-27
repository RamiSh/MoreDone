import { Component, OnInit, NgModule } from '@angular/core';

import {
  InputTextModule,
  DataListModule
} from 'primeng/primeng';

import { Task } from '../models/task';

import { ApiService } from '../services/api.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  unsortedTasks: Task[] = [];
  importantUrgentItems: Task[] = [];
  importantNotUrgentItems: Task[] = [];
  notImportantUrgentItems: Task[] = [];
  notImportantNotUrgentItems: Task[] = [];

  newTaskTitle: string = null;
  newTask: Task = null;
  draggedTask = null;

  draggedFromList: Task[] = [];


  constructor(private taskService: TaskService) {
    // this.unsortedTasks.push(new Task('title1'));
    // this.unsortedTasks.push(new Task('title2'));
    // this.unsortedTasks.push(new Task('title3'));
    // this.unsortedTasks.push(new Task('title4'));
    // this.unsortedTasks.push(new Task('title5'));
    // this.unsortedTasks.push(new Task('title6'));
    // this.unsortedTasks.push(new Task('title7'));
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.unsortedTasks = tasks;
    });
  }

  AddNewTask() {
    if (this.newTaskTitle != null) {
      this.newTask = new Task(this.newTaskTitle);
      this.unsortedTasks.push(this.newTask);
      this.newTaskTitle = null;
    }
  }

  newTaskTextChanged(event: any) {
    // this.newTask = new task(event.target.value);
    console.log(event);
    if (event.key === 'Enter') {
      this.AddNewTask();
    }
  }

  dragStarted(event, task: Task) {
    this.draggedTask = task;
    if (event.currentTarget.id === 'unorderedDragList') {
      this.draggedFromList = this.unsortedTasks;
    } else if (event.currentTarget.id === 'importantUrgentDragList') {
      this.draggedFromList = this.importantUrgentItems;
    } else if (event.currentTarget.id === 'importantNotUrgentDragList') {
      this.draggedFromList = this.importantNotUrgentItems;
    } else if (event.currentTarget.id === 'notImportantUrgentDragList') {
      this.draggedFromList = this.notImportantUrgentItems;
    } else if (event.currentTarget.id === 'notImportantNotUrgentDragList') {
      this.draggedFromList = this.notImportantNotUrgentItems;
    }
  }

  dragEnded(event: any) {
    this.draggedTask = null;
  }

  dropTask(event) {
    if (event.currentTarget.id === 'unorderedList') {
      this.unsortedTasks.push(this.draggedTask);
    } else if (event.currentTarget.id === 'notImportantNotUrgentList') {
      this.notImportantNotUrgentItems.push(this.draggedTask);
    } else if (event.currentTarget.id === 'notImportantUrgentList') {
      this.notImportantUrgentItems.push(this.draggedTask);
    } else if (event.currentTarget.id === 'importantNotUrgentList') {
      this.importantNotUrgentItems.push(this.draggedTask);
    } else if (event.currentTarget.id === 'importantUrgentList') {
      this.importantUrgentItems.push(this.draggedTask);
    }

    const indexOfDraggedTask = this.draggedFromList.indexOf(this.draggedTask, 0);
    if (indexOfDraggedTask > -1) {
      this.draggedFromList.splice(indexOfDraggedTask, 1);

      this.draggedTask = null;
      this.draggedFromList = null;
    }
  }
}
