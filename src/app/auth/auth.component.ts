import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(form: NgForm) {
    console.log(form.value);
    if (!form.valid) {
      return;
    }
    let email = form.value.email;
    let password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        response => {
          console.log(response);
          this.isLoading = false;
        },
        errorRes => {
          this.error = errorRes;
          this.isLoading = false;
        }
      );
    } else {
      this.authService.signup(email, password).subscribe(
        response => {
          console.log(response);
          this.isLoading = false;
        },
        errorRes => {
          this.error = errorRes;
          this.isLoading = false;
        }
      );
    }

    form.reset();
  }
}
