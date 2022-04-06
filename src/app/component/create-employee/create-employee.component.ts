import { Employee } from './../../model/employee';
import { EmployeeService } from './../../service/employee.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  saveEmployee() {
    this.employeeService.save(this.employee).subscribe( data=> {
      console.log(data);
      this.goToList();
    },
    error => console.log(error)
    )
  }

  goToList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
