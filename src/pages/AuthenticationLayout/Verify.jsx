import { useRef } from "react"
import { useNavigate } from 'react-router-dom';
import apiInstance from '../../utility/axios'


function Verify() {
  const label_class = "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  const input_class = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const navigate = useNavigate();
  const form = useRef()
  const code = useRef()


  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      code: code.current.value,
    };
    console.log(code.current.value);
    

    apiInstance.post('auth/verify/', userData)
      .then(res => {
        console.log(res);
        console.log(res.data);
        if (res.statusText == "OK") {
          navigate('/auth/login')
        } else {
          console.log('verification is failed!!!')
        }
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <>
      <div className="content-fchild">
        <div className="content-schild">

          <form ref={form} onSubmit={(e) => handleSubmit(e)} className="mx-auto my-auto p-4 bg-dark-300 rounded-xl">
            <div className="mb-3">
              <label htmlFor="code" className={label_class}>Verification code</label>
              <input ref={code} type="text" id="code" className={input_class} placeholder="XXXX" required />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full rounded p-2 font-semibold">Verify</button>
          </form>

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

export default Verify