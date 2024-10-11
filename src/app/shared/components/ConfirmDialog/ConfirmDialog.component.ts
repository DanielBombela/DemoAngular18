import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div class="p-3 mx-2">
    <h3 class="text-center">  Confirmación</h3>
    <hr />

    <p class="text-center mt-0 h6">{{mensaje}}</p>
    <div class="d-flex justify-content-center mt-3 me-3 ms-3">
      <button (click)="confirmado()" class="btn-purple" mat-raised-button>
        Aceptar
      </button>
      <button (click)="cerrarDialogo()" class="btn-purple ms-3 me-3 " mat-raised-button>
        No
      </button>
   
    </div>
  </div>
  `,
  styleUrl: './ConfirmDialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent { 

  constructor(
    public dialogo: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string) { }

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    
    confirmado(): void {
      this.dialogo.close(true);
    }

}
