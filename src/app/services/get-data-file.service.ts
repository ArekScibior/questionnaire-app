import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Topics from "../../assets/topics.json";

@Injectable({
  providedIn: 'root'
})
export class GetDataFileService {

  constructor(private http: HttpClient) {}
  public getJSONTopics() {
    return Topics
  }

}
