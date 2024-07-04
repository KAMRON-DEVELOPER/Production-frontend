import { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import axiosInstance from "../../utility/axios";


function Register() {


  const form_class = "mx-auto my-auto p-4 bg-dark-300 rounded-xl flex flex-wrap gap-x-4 flex-row"
  const input_class = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
  const label_class = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'

  const navigate = useNavigate();
  const form = useRef()
  const username = useRef()
  const email_or_phone = useRef()
  const password = useRef()
  const password2 = useRef()


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(username.current.value);
    console.log(email_or_phone.current.value);
    console.log(password.current.value);
    console.log(password2.current.value);

    const userData = {
      username: username.current.value,
      email_or_phone: email_or_phone.current.value,
      password: password.current.value,
      password2: password2.current.value,
    };


    axiosInstance.post('auth/register/', userData)
      .then(res => {
        console.log(res);
        console.log(res.data);
        Cookies.set('access_token', res.data.access);
        Cookies.set('refresh_token', res.data.refresh);
        navigate('verify')
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <>
      <div className="content-fchild">
        <div className="content-schild">

          <form ref={form} onSubmit={(e) => handleSubmit(e)} className={form_class}>
            <div className="mb-3 w-[48%]">
              <label htmlFor="username" className={label_class}>Username</label>
              <input ref={username} type="text" id="username" className={input_class} required placeholder="john" />
            </div>
            <div className="mb-3 w-[48%]">
              <label htmlFor="email_or_phone" className={label_class}>Email or Phone</label>
              <input ref={email_or_phone} type="text" id="email_or_phone" className={input_class} placeholder="email or phone" />
            </div>
            <div className="mb-3 w-[48%]">
              <label htmlFor="password" className={label_class}>Password</label>
              <input ref={password} type="password" id="password" className={input_class} required placeholder="********" />
            </div>
            <div className="mb-3 w-[48%]">
              <label htmlFor="password2" className={label_class}>Confirm Password</label>
              <input ref={password2} type="password" id="password2" className={input_class} required placeholder="********" />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full rounded p-2 font-semibold">Register</button>
          </form>

        </div>
      </div>

      <div className="rsidebar">
        <div className="rsidebar-fchild">
          <button className='text-letter-100 px-2 mt-2'>Register</button>
          <button className='text-letter-100 px-2 mt-2' id="message"></button>
        </div>
      </div>
    </>
  )
}

export default Register