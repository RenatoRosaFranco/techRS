'use client';

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

const initialValues = {
  email: ''
};

const newsletterSchema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório')
});

export const NewsletterForm = () => {
  return(
    <Formik
      initialValues={{initialValues}}
      validationSchema={newsletterSchema}
      onSubmit={ async (values, { setSubmitting }) => {
        try {
          console.log(values);
          toast.success('E-mail cadastrado com sucesso!');  
          resetForm();
        }
        catch (error) {
          toast.error('Erro ao enviar formulário, tente novamente.');
          console.log('Erro ao enviar formulário:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="newsletter-form">
          <div>
            <label htmlFor="email">E-mail</label><br />
            <div className="input-group">
              <div className="input-group-addon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Digite seu e-mail"
              />
              <div className="input-group-addon">
                <i className="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <button 
            type="submit" 
            className='btn btn-primary btn-md' 
            disabled={isSubmitting}
            style={{ marginTop: 10 }}
          >
            {isSubmitting ? 'Enviando...' : 'Inscrever-se'}
          </button>
        </Form>
      )}
    </Formik>
  )
}