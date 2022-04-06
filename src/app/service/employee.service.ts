import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "/api/employee";

  constructor(private http: HttpClient) {
  }

  getEmployeeList(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseURL}`);
  }

  getById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseURL}/${id}`)
  }

  save(employee: Employee): Observable<Object> {
    return this.http.post<Employee>(`${this.baseURL}`, employee);
  }

  deleteById(id: number): Observable<Object> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
