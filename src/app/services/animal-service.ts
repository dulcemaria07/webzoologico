import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient){}
  apiUri = '/api/animals';
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

getAllAnimalsData(): Observable<any> {
  return this.http.get<any>(this.apiUri)
}
newAnimal(data: any): Observable<any> {
   return this.http.post<any>(
    this.apiUri,
    data,
    {headers: this.httpOptions});
 }
 newMessage(messageText: string) {
  this.toastr.success('Clic aquí para actualizar la lista', messageText)
   .onTap
   .pipe(take(1))
   .subscribe(() => window.location.reload());
 } 


}


