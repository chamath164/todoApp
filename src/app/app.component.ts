import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo App';
  todoList = [];
  todoItem = '';

  // tslint:disable-next-line:typedef
  addItem(){
    this.todoList.push(this.todoItem);
  }

  // tslint:disable-next-line:typedef
  deleteItem(index){
    this.todoList.splice(index, 1);
  }
}
