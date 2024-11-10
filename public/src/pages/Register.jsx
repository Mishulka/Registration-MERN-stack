import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

export default function Register() {
  const [values, setValues] = useState({
    email:"",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:4000/register", {
        ...values,
      },
      {
        withCredentials: true,
      }
        
      );
      console.log(data);
      if (data) {
          if (data.errors) {

          }else {}
      } 
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className='container'>
      <h2>Регистрация Аккаунта</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor='email'>Почта</label>
          <input 
            type="email" 
            name='email' 
            placeholder="testEmail@gmail" 
            onChange={(e)=>
              setValues({...values,[e.target.name]:e.target.value})
            }
          />
        </div>
        <div>
          <label htmlFor='password'>Пароль</label>
          <input 
            type="password" 
            name='password' 
            placeholder="1234" 
            onChange={(e)=>
              setValues({...values,[e.target.name]:e.target.value})
            }
          />
        </div>
        <button type='submit'>Подтвердить</button>
        <span>
          Есть аккаунт? <Link to="/login">Войти</Link>
        </span>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  )
}
