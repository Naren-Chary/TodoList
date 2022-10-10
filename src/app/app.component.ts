import { Component, ViewChild } from '@angular/core';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  @ViewChild('task') inputName:any; //refer to input box task
  list:any[]=[]; //defining empty list
  //method which adds task into list
  addTask(data:string){
    this.list.push({id:this.list.length,name:data}); //inserting id and task name into the list
    this.inputName.nativeElement.value = ' '; //used to clear the field
  }
  //method which remove task from list
  removeTask(i:number){
    this.list=this.list.filter(item=>item.id!==i);
    //we cannot delete an item from list.therefore we use filter
  }
}
