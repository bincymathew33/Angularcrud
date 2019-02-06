import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import  {NgForm} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeservice :EmployeeService) { }

  ngOnInit() {
    this.Reset();
  }
  Reset(form? : NgForm)
  {
    if(form !=null)
  form.reset();
  this.employeeservice.selectedEmployee={
    EmployeeID:null,
    FirstName:'',
  LastName:'',
  EmpCode:'',
  Position:'',
  Office:''
  }
}
onSubmit(form:NgForm){
this.insertRecord(form);
}
insertRecord(form:NgForm){
this.employeeservice.postEmployee(form.value).subscribe(x=>{
this.Reset();
alert("susessfully insert");
});
}

}