import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  logform: FormGroup;

  constructor(private authService: AuthenticationService,
              public router: Router,
              public formBuilder: FormBuilder,
              public toastController: ToastController) {
    this.logform = formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: ['', Validators.required]

    });
  }

  ngOnInit() {
  }

  loginform () {
    const formObj = {
      username: this.logform.controls.email.value,
      password: this.logform.controls.password.value
    };

    this.authService.loginPassData(formObj).then(() => {
      this.logform.reset();
      this.router.navigate(['/menu-items']);
    })
    .catch((data) => {
      this.logform.reset();
      this.showToastMsg(data);
    });
  }

  async showToastMsg (msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });

    toast.present();
  }

}
