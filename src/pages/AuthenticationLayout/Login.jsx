import { useRef, useState } from "react"
import { useNavigate } from 'react-router-dom';
// import axiosInstance from "../../utility/axios";
import Cookies from "js-cookie";
import axios from "axios";


function Login() {
  const label_class = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  const input_class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const navigate = useNavigate();
  const form = useRef()
  const username = useRef()
  const password = useRef()
  const [error, setError] = useState(null)
  const [isLoading, setIsloading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsloading(true)
    const userData = {
      username: username.current.value,
      password: password.current.value,
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login/', userData);
      console.log(response);

      if (response.status === 200) {
        Cookies.set('access_token', `${response.data.access}`)
        Cookies.set('refresh_token', `${response.data.refresh}`)
        setIsloading(false)
        console.log('redirecting...')
        navigate('/auth/register');
      } else {
        navigate('/auth/login/');
      }
    } catch (error) {
      setError(`${error.response.data.error}`)
    }
  }


  return (
    <>
      <div className="content-fchild">
        <div className="content-schild">
          {error && <h2>{error}</h2>}
          {isLoading && <div className="svg-spinners--6-dots-rotate"></div>}
          {!isLoading && <form ref={form} onSubmit={(e) => handleSubmit(e)} className="mx-auto my-auto p-4 bg-dark-300 rounded-xl">
            <div className="mb-3">
              <label htmlFor="username" className={label_class}>Your username</label>
              <input ref={username} type="username" id="username" className={input_class} placeholder="kamronbek" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className={label_class}>Your password</label>
              <input ref={password} type="password" id="password" className={input_class} placeholder="********" required />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full rounded p-2 font-semibold">Login</button>
          </form>}

        </div>
      </div>

      <div className="rsidebar">
        <div className="rsidebar-fchild">
          <h1 className='text-letter-100 px-2 mt-2'>Login</h1>
        </div>
      </div>
    </>
  )
}

export default Login