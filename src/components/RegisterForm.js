import React, { useState, useEffect } from 'react'
import { Formik, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as MultiStep from "./Multistep";
import {
  StyledWrapper,
  StyledForm,
  StyledLinkTo,
  StyledInput,
  StyledCheckboxes
} from '../theme/Styled';
import withSubmit from '../hoc/withSubmit'

const SingupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Must be at least 3 charakters")
    .required('Required'),
  lastName: Yup.string()
    .min(3, "Must be at least 3 charakters")
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.number()
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required('Required'),
  password: Yup.string()
    .min(4, 'Min 4 char')
    .max(12, 'Enought!')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/, "4-12 char, one upper case letter, one lower case letter, one numeric digit")
    .required('Required'),
  confirmPassword: Yup.string()
    // eslint-disable-next-line func-names
    .test('password-match', 'Password do not match!', function (value) {
      const { password } = this.parent;
      return password === value;
    })
    .required('Required'),
  terms: Yup.boolean()
    .oneOf([true], "Must accept terms conditions")
    .required('Required'),
  mailing: Yup.boolean()
})

const RegisterForm = ({ handleSubmit }) => {
  const [done, setDone] = useState(false)
  const [didCancel, setCancel] = useState(false);

  useEffect(() => {
    if (done) {
      setCancel(true)
    }
  }, [done])

  return (
    <StyledWrapper>
      <MultiStep.Wrapper>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            terms: false,
            mailing: false,
          }}
          validationSchema={SingupSchema}
          onSubmit={async (values, { resetForm }) => {
            if (!didCancel) {
              await handleSubmit(values)
                .then(setDone(!done))
              resetForm();
            }
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched
          }) => (

              <StyledForm>
                {
                  done ? (
                    <p>registration_status: success</p>
                  ) :
                    <>

                      <MultiStep.Page pageId={1}>
                        <StyledInput
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          placeholder="first_name"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>
                        <StyledInput
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          placeholder="last_name"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>
                      </MultiStep.Page>

                      <MultiStep.Page pageId={2}>
                        <StyledInput
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="email"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>
                        <StyledInput
                          type="number"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          placeholder="phone_number"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.phone && touched.phone ? (
                            <div>{errors.phone}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>
                      </MultiStep.Page>

                      <MultiStep.Page pageId={3}>
                        <StyledInput
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          placeholder="password"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>
                        <StyledInput
                          type="password"
                          name="confirmPassword"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          placeholder="confirm_password"
                        />
                        <MultiStep.StyledErrMesssage>
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <div>{errors.confirmPassword}</div>
                          ) : null}
                        </MultiStep.StyledErrMesssage>

                      </MultiStep.Page>

                      <MultiStep.Page pageId={4}>
                        <StyledCheckboxes>
                          <label htmlFor='mailing'>
                            <Field type="checkbox" name="mailing" />
                              Yes, I want to receive emails
                            </label>
                          <MultiStep.StyledErrMesssage />
                          <label htmlFor='terms'>
                            <Field type="checkbox" name="terms" />
                                I agree to the Terms, Privacy Policy and Fees
                              </label>
                          <MultiStep.StyledErrMesssage>
                            {errors.terms && touched.terms ? (
                              <div>{errors.terms}</div>
                            ) : null}
                          </MultiStep.StyledErrMesssage>
                        </StyledCheckboxes>

                      </MultiStep.Page>

                      <MultiStep.ControlsButtons errors={errors} touched={touched} />

                    </>
                }

              </StyledForm>

            )}

        </Formik>

        {
          !done ? (
            <MultiStep.ProgressBar />
          ) : null
        }

      </MultiStep.Wrapper>

      <StyledLinkTo>
        {!done ? 'Have an account?' : null} <NavLink to='/login'>Log in!</NavLink>
      </StyledLinkTo>

    </StyledWrapper >
  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default withSubmit(RegisterForm);
