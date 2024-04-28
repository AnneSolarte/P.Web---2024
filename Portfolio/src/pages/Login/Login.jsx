import { Form } from '../../components/Form/Form'
import './Login.css'
import { loginForm } from '../../data/forms'
import submitImg from '../../assets/submit-img.png'

export const Login = () => {
  return (
    <div className='page-div'>
      <h1>Login</h1>
      <Form dataForm={loginForm} submitImg={submitImg} />
    </div>
  )
}
