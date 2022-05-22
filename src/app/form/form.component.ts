import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email:''
  };

  users = [
    {
      id: 1,
      name: 'asbdsa',
      age: 54,
      email:"abc@gmail.com"
    }
  ];

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    const newUserIds = this.users
      .map(user => user.id)
      .sort((a: number, b: number) => b - a);
    const maxId = newUserIds[0];
    if (userForm.value.id === 0) {
      this.users.push({
        ...userForm.value,
        id: maxId + 1
      });
    } else {

    }
    userForm.resetForm({
      name: '',
      age: 0
    });
  }

  delete(id:number) {
    const newArr:any = this.users.filter((user:{id:number,name:string,age:number,email:string})=>{
      if(user.id!==id){
        return user
      }
      return
    })
    this.users = newArr
  }
}
