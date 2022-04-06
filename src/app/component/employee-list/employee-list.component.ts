import { EmployeeService } from './../../service/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    console.log("Started to get list!!")
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    })
  }

  employeeDetails(id: number){
    console.log("Call employeeDetails -> ID: "+ id)
    this.router.navigate(['employee-details', id]);
  }

  deleteEmploye(id: number){
    this.employeeService.deleteById(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
}
