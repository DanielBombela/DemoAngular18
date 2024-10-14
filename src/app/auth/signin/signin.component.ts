import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';
import { MATERIAL_MODULES } from '../../shared/material/material.imports';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule,MATERIAL_MODULES],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export default class SigninComponent {
private _formBuilder = inject(FormBuilder);

loginForm = this._formBuilder.group({
  Username:['',[Validators.required]],
  Password:['',[Validators.required]],
})

 ConfirmDialog= inject(ConfirmDialogService);


 confirm(){
  this.ConfirmDialog.ConfirmDialog(
    '¿Seguro que desea rechazar el registro?',
    () => {
      alert("aaaa")
    },
    () => {}
  );
 }


 login_onClick(){}


}
