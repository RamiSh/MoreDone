import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { ApiService } from './api.service';

import { Task } from '../models/task';

@Injectable()
export class TaskService {
    path: String = 'tasks';

    constructor(private apiService: ApiService) { }

    getTasks(): Observable<Task[]> {
        const tasks = this.apiService.get(this.path);
        return tasks;
    }

    addTask(newTask: Task): void {
        const response = this.apiService.post(`${this.path}`, JSON.stringify(newTask));
    }

    updateTask(updatedTask: Task): void {
        const response = this.apiService.post(`${this.path}`, JSON.stringify(updatedTask));
    }
}
