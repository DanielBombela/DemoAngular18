import Swal, { SweetAlertIcon } from 'sweetalert2';


export const ShowToast = (
  icon: SweetAlertIcon,
  message: string,
  time: number = 3500
): void => {
  Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: icon,
    title: message,
  });
};
