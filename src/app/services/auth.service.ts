import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, Subscription } from "rxjs";

import { TestServ } from "../../app/pages/models/testeserv";

@Injectable({
  providedIn: "root",
})
export class AuthService {
/*   public url: string = environment.baseUrl;

  constructor(public httpClient: HttpClient) {}

  public getZenvia() {
    return this.httpClient.get(this.url + "/");
  }  */
}
