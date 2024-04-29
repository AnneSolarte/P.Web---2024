import { Form } from '../../components/Form/Form'
import './Login.css'
import { loginForm } from '../../data/forms'
import submitImg from '../../assets/submit-img.png'

export const Login = () => {
  return (
    <div className='page-div'>
      <div>
        <h1>Welcome to management panel </h1>
        <p>Log in to make changes to the page</p>
      </div>
      <Form dataForm={loginForm} submitImg={submitImg} />
    </div>
  )
}
