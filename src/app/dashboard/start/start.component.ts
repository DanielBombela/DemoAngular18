import { Component, inject } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { ShowToast } from '../../shared/utils/utilities';
import Swal from 'sweetalert2';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NgxSonnerToaster,MatSlideToggleModule,MatCardModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export default class StartComponent {
   snackBar = inject( MatSnackBar);
  sonner(){
    toast.success('Event has been created')
    ShowToast(
      'success',
      'Guardado correctamente'
    );
    this.showSnackbarCssStyles();
//Swal.fire('Error',"Ocurrio un error en el sistema, favor de contactar a soporte", 'error')
  }

  showSnackbarCssStyles() {
    let sb = this.snackBar.open('Net is offline, Trying to reconnect in 2 seconds....', 'Close', {
      duration: 4000,
      panelClass: ["custom-style"]
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
}


