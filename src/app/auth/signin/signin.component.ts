import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../../shared/services/users.service';
import { AuthResponse } from '../../core/models/authResponse';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,MATERIAL_MODULES],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export default class SigninComponent {
private _formBuilder = inject(FormBuilder);
private user = inject(UserService);
ConfirmDialog= inject(ConfirmDialogService);


loginForm = this._formBuilder.group({
  username:['hmcdcarlos14',[Validators.required]],
  password:['Canela243.',[Validators.required]],
})

 
 confirm(){
  this.ConfirmDialog.ConfirmDialog(
    '¿Seguro que desea rechazar el registro?',
    () => {
      alert("aaaa")
    },
    () => {}
  );
 }


 login_onClick(){
  const{username,password} = this.loginForm.value;

  this.user.login( username, password ).subscribe({
    next: (response: AuthResponse) => {
    //  console.log(response);
      
    },
    error: (responseError: any) => {
   //   this._loadingService.setLoading(false);

    },
  });
 }


}
