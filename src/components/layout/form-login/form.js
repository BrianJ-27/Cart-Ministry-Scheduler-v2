import React from "react";
import useForm from "./useForm";
import validate from "../../../helpers/validate";
import { BsEnvelope, BsShieldLock } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import StyledButton from "../../reusable/button/button";
import FormField from "../../reusable/form-field/input-field";
import styled from "styled-components";

const FormContainer = styled.div`
  position: relative;
  box-shadow:     
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.5) inset;;
  padding: clamp(0.5rem, 3vw, 3rem);
  border-radius: 8px;
  width: calc(100% - 1rem);
  margin: auto;
  @media only screen and (min-width: 768px) {
      width: max(500px, 550px);
    }
`;

const FormHeader = styled.div`
  color: var(--clr-bg-light);
  h2 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 100;
    margin: 1rem 0;
    letter-spacing: 1.5px;
    text-align: center;
  }
`;

const FormIconWrapper = styled.div`
  text-align: center;
  font-size: 8rem;
  svg.form__icons--header {
    fill: var(--clr-bg-dark);
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  position: relative;
  width: 86%;
  left: 6%;

  svg.form__icons {
    fill: var(--clr-bg-light);
  }
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1em 0;
  color: var(--clr-bg-light);
  div {
    display: flex;
    align-items: center;
  }
  span,
  a {
    font-size: clamp(0.8rem, 2vw, 1rem);
  }
  a {
    color: var(--clr-bg-light);
    text-decoration: underline var(--clr-accent-color);
  }
`;

const Form = () => {
  const { handleUpdate, handleLogin, formData, errors } = useForm(validate);

  return (
    <FormContainer>
      <FormHeader>
        <h1 className="title__primary">Publisher Portal</h1>
        <FormIconWrapper>
          <FaUsers className="form__icons--header" />
        </FormIconWrapper>
        <p className="content__form">
          Welcome to the Congregational Cart Scheduler
        </p>
        <p className="content__form">
          Login here to schedule your cart assignments
        </p>
      </FormHeader>
      <div>
        <form method="post" action="#" onSubmit={handleLogin}>
          <fieldset style={{ padding: "0rem" }}>
            <FormWrapper>
              <FormGroup>
                <BsEnvelope className="form__icons" />
                <FormField
                  className="form__input"
                  id="email"
                  type="email"
                  name="email"
                  placeholder=" "
                  onChange={(e) => handleUpdate(formData.email, e)}
                  required
                  label="Email"
                  errors={errors.email}
                />
              </FormGroup>
              <FormGroup>
                <BsShieldLock className="form__icons" />
                <FormField
                  className="form__input"
                  id="password"
                  type="password"
                  name="password"
                  placeholder=" "
                  onChange={(e) => handleUpdate(formData.password, e)}
                  required
                  label="Password"
                  errors={errors.password}
                />
              </FormGroup>
              <CheckBoxWrapper>
                <div>
                  <FormField
                    className="form__input"
                    checkbox
                    type="checkbox"
                    name="isChecked"
                    aria-label="Checkbox Input Field"
                    // checked={isChecked}
                    onChange={(e) => handleUpdate(formData.isChecked, e)}
                  />
                  <span>Remember me</span>
                </div>
                <p>
                  <a href="#a">Forgot Password&#63;</a>
                </p>
              </CheckBoxWrapper>
              <StyledButton className="btn__overlay--full">Login</StyledButton>
            </FormWrapper>
          </fieldset>
        </form>
      </div>
    </FormContainer>
  );
};

export default Form;
