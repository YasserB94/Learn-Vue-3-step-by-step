import Swal from 'sweetalert2'
export function useFlash(){
    function flash(title,message,icon='success'){
        return Swal.fire(title,message,icon)
    }
    return { flash };
}