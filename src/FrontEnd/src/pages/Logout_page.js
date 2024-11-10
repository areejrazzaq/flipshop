import { redirect} from "react-router-dom"

export function LogoutAction(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('role')
    localStorage.removeItem('expiration')
    return redirect('/')
}