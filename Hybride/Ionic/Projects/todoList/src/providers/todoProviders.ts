import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class TodoProvider{
  url:string="http://192.168.0.25:8080/todo/"
  // les variables du service sont disponible dans les components qui appellent le service
  Todolist=[];
  constructor(public http:Http){
    console.log('Provider coming')
  }
  getAllTodos():Observable<Todo[]>{
    return this.http.get(this.url).map(res=>res.json())
  }
  DeleteTodoById(input){
    console.log("id DeleteTodoById provider:",this.url,input)
    //{body:param} obligatoire pour le delete en http
    return this.http.delete(this.url,{body:input}).map(res=>res.json())
  }
  AddTodo(input){
    return this.http.put(this.url,input).map(res=>res.json())
  }
  UpdateTodo(input){
    return this.http.post(this.url,input).map(res=>res.json())
  }
}
interface Todo{
  id:number,
  titre:string,
  body:string
}
