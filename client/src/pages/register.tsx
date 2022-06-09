import React from 'react';
import { Formik, Form, useFormik } from 'formik';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Wrapper } from '../components/Wrapper';

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper>
      <form>
        <FormControl>
          <FormLabel htmlFor='username'>Username</FormLabel>
          <Input
            value={formik.values.username}
            onChange={formik.handleChange}
            id='username'
            placeholder='username'
          />
        </FormControl>
      </form>
      <form>
        <FormControl>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            value={formik.values.username}
            onChange={formik.handleChange}
            id='password'
            placeholder='password'
          />
        </FormControl>
      </form>
    </Wrapper>
  );
};

export default Register;
