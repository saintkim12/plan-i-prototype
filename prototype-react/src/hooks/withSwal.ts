import 'sweetalert2/src/sweetalert2.scss'
import withReactContent from 'sweetalert2-react-content'
import BaseSwal from 'sweetalert2'

export const Swal = BaseSwal

export default function withSwal(customSwal?: typeof BaseSwal) {
  const swal = customSwal ?? BaseSwal
  withReactContent(swal)
  return swal
}