import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../Contact/Contact.module.css';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      age: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Required'),
      age: Yup.number()
        .min(18, 'You must be at least 18 years old')
        .max(99, 'Age must be less than 100')
        .required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className=' text-center mt-5'>
      <h2>CONTACT US</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mx-5 my-4 pt-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              name="firstName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className={`${style.error}`}>{formik.errors.firstName}</div>  
            ) : null}
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className={`${style.error}`}>{formik.errors.lastName}</div> 
            ) : null}
          </div>
        </div>
        <div className="row mx-5 my-4">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={`${style.error}`}>{formik.errors.email}</div> 
            ) : null}
          </div>
          <div className="col">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={`${style.error}`}>{formik.errors.password}</div> 
            ) : null}
          </div>
        </div>
        <div className="row mx-5 my-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone Number"
              name="phoneNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className={`${style.error}`}>{formik.errors.phoneNumber}</div> 
            ) : null}
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              aria-label="Age"
              name="age"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.age}
            />
            {formik.touched.age && formik.errors.age ? (
              <div className={`${style.error}`}>{formik.errors.age}</div> 
            ) : null}
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-outline-danger">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}





