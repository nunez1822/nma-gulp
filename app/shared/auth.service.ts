import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(this.handleError);
  }

  signinUser(user: User) {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(this.handleError);
      
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
