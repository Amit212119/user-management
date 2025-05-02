import React, { useState } from 'react'
import './index.css';

const RegisterForm = () => {
    const initialValue = {
        name: '',
        email:'',
        phone:'',
        qualification:'',
        address:'',
    }
    const [formDetail, setFormDetails] = useState(initialValue);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormDetails({
            ...formDetail,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Full Name'
          name='name'
          value={formDetail.name}
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={formDetail.email}
          onChange={handleChange}
        />
        <input
          type='tel'
          placeholder='Phone'
          name='phone'
          value={formDetail.phone}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Qualification'
          name='qualification'
          value={formDetail.qualification}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Address'
          name='address'
          value={formDetail.address}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default RegisterForm