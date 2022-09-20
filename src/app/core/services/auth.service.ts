import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token !: string;

  login(): void {
    this.token = 'My Fake Token';
  }

  getToken(): string {
    return this.token;
  }
}
