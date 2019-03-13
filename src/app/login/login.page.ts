import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  logform: FormGroup;

  constructor(private authService: AuthenticationService, public router: Router, public formBuilder: FormBuilder, public alertController: AlertController, private storage: Storage) {
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

}
