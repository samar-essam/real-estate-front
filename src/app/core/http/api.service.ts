import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIResponse } from 'src/app/shared/ResponseObject';
import { QueryParams } from 'src/app/shared/models/queryParams';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  post<T = any>({
    path,
    payload = {},
  }: {
    path: string;
    payload?: Partial<T>;
  }): Observable<APIResponse<T>> {
    return this.http.post(`${this.apiUrl}/${path}`, payload);
  }
  patch<T = any>({
    path,
    payload = {},
  }: {
    path: string;
    payload?: Partial<T>;
  }): Observable<APIResponse<T>> {
    return this.http.patch(`${this.apiUrl}/${path}`, payload);
  }
  put<T = any>({
    path,
    payload = {},
  }: {
    path: string;
    payload?: Partial<T>;
  }): Observable<APIResponse<T>> {
    return this.http.put(`${this.apiUrl}/${path}`, payload);
  }
  get<T = any>({
    path,
    queryParams = {},
  }: {
    path: string;
    queryParams?: QueryParams;
  }): Observable<APIResponse<T>> {
    return this.http.get(`${this.apiUrl}/${path}`, {
      params: new HttpParams().appendAll({ ...queryParams }),
    });
  }
  delete<T = any>({
    path,
    queryParams = {},
  }: {
    path: string;
    queryParams?: QueryParams;
  }): Observable<APIResponse<T>> {
    return this.http.delete(`${this.apiUrl}/${path}`, {
      params: new HttpParams().appendAll({ ...queryParams }),
    });
  }
}
