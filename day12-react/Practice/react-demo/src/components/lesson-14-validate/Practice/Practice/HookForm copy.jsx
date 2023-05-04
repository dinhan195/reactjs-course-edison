/** @format */

// import React from 'react';
// import { Controller, useForm } from 'react-hook-form';

// function HookForm1(props) {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       name: '',
//       email: '',
//     },
//   });
//   const sendData = (data) => {
//     console.log(111, data);
//   };
//   console.log(222, errors);
//   return (
//     <div>
//       <form onSubmit={handleSubmit(sendData)}>
//         <label htmlFor="name">Name</label>
//         <Controller
//           name="name"
//           control={control}
//           rules={{
//             required: true,
//           }}
//           render={({ field }) => <input id="name" {...field} />}
//         />
//         <label htmlFor="email">Email</label>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => <input id="email" {...field} />}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default HookForm1;

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const HookForm1 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};
export default HookForm1;
