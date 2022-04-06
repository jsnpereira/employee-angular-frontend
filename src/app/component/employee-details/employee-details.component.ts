import { EmployeeService } from './../../service/employee.service';
import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee!: Employee;
  private baseUrl: String = "/api/employee"
  constructor(private router: Router,private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    console.log("call ngOnInit -> EmployeeDetailsComponent");
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getById(this.id).subscribe(
      data => { this.employee = data;}
    )
  }

  deleteEmployee(id: number){
    this.employeeService.deleteById(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/employees'])
    })
  }

}
