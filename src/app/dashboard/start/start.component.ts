import { Component } from '@angular/core';
import { NgxSonnerToaster, toast } from 'ngx-sonner';
import { ShowToast } from '../../shared/utils/utilities';
import Swal from 'sweetalert2';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [NgxSonnerToaster,MatSlideToggleModule,MatCardModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export default class StartComponent {

  sonner(){
    toast.success('Event has been created')
    ShowToast(
      'success',
      'Guardado correctamente'
    );
//Swal.fire('Error',"Ocurrio un error en el sistema, favor de contactar a soporte", 'error')
  }
}
