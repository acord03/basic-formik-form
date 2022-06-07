import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values)=>{
      console.log('form: ', values)
    },
    validate: values => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      let errors = {};
      if(!values.email){errors.email = 'Field required';}
      else if(!regex.test(values.email)){errors.email = 'Username should be an email'}

      if(!values.password){errors.password = 'Field required'};

      return errors;
    }
  })
  function submitStatus(){
    if(Object.keys(formik.errors).length === 0){
      alert('Login Successful')
    }
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input 
        name="email" 
        type="text" 
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? <div style={{color: 'red'}}>{formik.errors.email}
        </div>: null}

        <div>Password</div>
        <input
        name="password" 
        type="text" 
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? <div style={{color: 'red'}}>{formik.errors.password}
        </div>: null}

        <button type="submit" onClick={submitStatus}>Sign In</button>
      </form>
    </div>
  );
}

export default App;
