import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path:'', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent},
  {path: 'create-employee', component: CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
