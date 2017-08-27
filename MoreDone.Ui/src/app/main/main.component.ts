import { Component, OnInit, NgModule } from '@angular/core';

import {
  InputTextModule,
  DataListModule
} from 'primeng/primeng';

import { Task, Category } from '../models/task';

import { ApiService } from '../services/api.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  unsortedTasks: Task[] = [];
  importantUrgentTasks: Task[] = [];
  importantNonurgentTasks: Task[] = [];
  unimportantUrgentTasks: Task[] = [];
  unimportantNonurgentTasks: Task[] = [];

  newTaskTitle: string = null;
  newTask: Task = null;
  draggedTask = null;

  draggedFromList: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.unsortedTasks = tasks.filter(task => task.Category === Category.Unsorted);
      this.importantUrgentTasks = tasks.filter(task => task.Category === Category.ImportantUrgent);
      this.importantNonurgentTasks = tasks.filter(task => task.Category === Category.ImportantNonurgent);
      this.unimportantUrgentTasks = tasks.filter(task => task.Category === Category.UnimportantUrgent);
      this.unimportantNonurgentTasks = tasks.filter(task => task.Category === Category.UnimportantNonurgent);
    });
  }

  AddNewTask() {
    if (this.newTaskTitle != null) {
      this.newTask = new Task(this.newTaskTitle, Category.Unsorted);
      this.taskService.addTask(this.newTask).subscribe(result => {
        if (typeof result === 'number') {
          this.unsortedTasks.push(this.newTask);
          this.newTaskTitle = null;
        }
      })
    }
  }

  newTaskTextChanged(event: any) {
    if (event.key === 'Enter') {
      this.AddNewTask();
    }
  }

  dragStarted(event, task: Task) {
    this.draggedTask = task;
    if (event.currentTarget.id === 'unorderedDragList') {
      this.draggedFromList = this.unsortedTasks;
    } else if (event.currentTarget.id === 'importantUrgentDragList') {
      this.draggedFromList = this.importantUrgentTasks;
    } else if (event.currentTarget.id === 'importantNonurgentDragList') {
      this.draggedFromList = this.importantNonurgentTasks;
    } else if (event.currentTarget.id === 'unimportantUrgentDragList') {
      this.draggedFromList = this.unimportantUrgentTasks;
    } else if (event.currentTarget.id === 'unimportantNonurgentDragList') {
      this.draggedFromList = this.unimportantNonurgentTasks;
    }
  }

  dragEnded(event: any) {
  }

  dropTask(event) {
    if (event.currentTarget.id === 'unorderedList') {
      this.draggedTask.Category = Category.Unsorted;
      this.taskService.updateTask(this.draggedTask).subscribe(result => {
        if (result === true) {
          this.unsortedTasks.push(this.draggedTask);
          this.clearDraggedTask();
        }
      })
    } else if (event.currentTarget.id === 'unimportantNonurgentList') {
      this.draggedTask.Category = Category.UnimportantNonurgent;
      this.taskService.updateTask(this.draggedTask).subscribe(result => {
        if (result === true) {
          this.unimportantNonurgentTasks.push(this.draggedTask);
          this.clearDraggedTask();
        }
      })
    } else if (event.currentTarget.id === 'unimportantUrgentList') {
      this.draggedTask.Category = Category.UnimportantUrgent;
      this.taskService.updateTask(this.draggedTask).subscribe(result => {
        if (result === true) {
          this.unimportantUrgentTasks.push(this.draggedTask);
          this.clearDraggedTask();
        }
      })
    } else if (event.currentTarget.id === 'importantNonurgentList') {
      this.draggedTask.Category = Category.ImportantNonurgent;
      this.taskService.updateTask(this.draggedTask).subscribe(result => {
        if (result === true) {
          this.importantNonurgentTasks.push(this.draggedTask);
          this.clearDraggedTask();
        }
      })
    } else if (event.currentTarget.id === 'importantUrgentList') {
      this.draggedTask.Category = Category.ImportantUrgent;
      this.taskService.updateTask(this.draggedTask).subscribe(result => {
        if (result === true) {
          this.importantUrgentTasks.push(this.draggedTask);
          this.clearDraggedTask();
        }
      })
    }
  }

  clearDraggedTask(): void {
    const indexOfDraggedTask = this.draggedFromList.indexOf(this.draggedTask, 0);
    if (indexOfDraggedTask > -1) {
      this.draggedFromList.splice(indexOfDraggedTask, 1);

      this.draggedTask = null;
      this.draggedFromList = null;
    }
  }
}
