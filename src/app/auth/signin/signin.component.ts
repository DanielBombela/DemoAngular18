import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmDialogService } from '../../shared/services/confirm-dialog.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export default class SigninComponent {
private _formBuilder = inject(FormBuilder);

form = this._formBuilder.group({
  email:['',[Validators.required]],
  password:['',[Validators.required]],
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
}
