import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AuthenticateService {
  constructor() {}

  loginUser(credential) {
    return new Promise((accep, reject) => {
      if (
        credential.email == "test@test.com" &&
        credential.password == "12345"
      ) {
        accep("Login correcto.");
      } else {
        reject("Login incorrecto.");
      }
    });
  }
}
