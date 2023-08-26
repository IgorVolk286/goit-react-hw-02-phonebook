import React from 'react';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
import { TitleInput, AddButton } from './Form.styled';
import * as Yup from 'yup';

import { string, number } from 'yup';

const FormikSchema = Yup.object().shape({
  name: Yup.string().max(20, 'Too Long!').required('Required'),
  number: Yup.number().positive().min(6, 'Too Short!').required('Required'),
});

export const FormFormikF = ({ addContacts }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={FormikSchema}
      onSubmit={(values, actions) => {
        addContacts(values);
        actions.resetForm();
      }}
    >
      <Form>
        <TitleInput htmlFor={nanoid()}>NAME</TitleInput>
        <Field
          id={nanoid()}
          type="text"
          name="name"
          placeholder="Enter Name your friend"
        />
        <ErrorMessage name="name" component="span" />
        <TitleInput htmlFor={nanoid()}>NUMBER</TitleInput>
        <Field
          id={nanoid()}
          type="tel"
          name="number"
          placeholder="Enter Phone your friend"
        />
        <ErrorMessage name="number" component="span" />
        <AddButton type="submit">ADD CONTACT</AddButton>
      </Form>
    </Formik>
  );
};
