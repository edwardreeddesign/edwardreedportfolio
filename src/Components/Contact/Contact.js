import React from "react";
import useInput from "../../Hooks/use-input";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, lineAnim, pageAnimation } from "../../UI/Animations";
import Button from "../../UI/Button";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isComment = (value) => value.trim() !== "";

const Contact = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  const {
    value: enteredComment,
    valueChangeHandler: commentChangeHandler,
    inputBlurHandler: commentBlurHandler,
    reset: resetCommentInput,
  } = useInput(isComment);

  let formIsValid = false;

  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetCommentInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <>
      <Wrapper
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.h1 variants={fade}>Contact</motion.h1>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <StyledForm
          method="POST"
          data-netlify="true"
          name="contact"
          onSubmit={formSubmissionHandler}
        >
          <ControlGroup>
            <Name>
              <div className={nameInputClasses}>
                <input type="hidden" name="form-name" value="contact" />

                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  name="nameFirst"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  onBlur={nameInputBlurHandler}
                />
                {nameInputHasError && (
                  <p className="error-text">Please Enter a First Name.</p>
                )}
              </div>
              <div className={lastNameInputClasses}>
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  id="name"
                  name="nameLast"
                  onChange={lastNameChangeHandler}
                  value={enteredLastName}
                  onBlur={lastNameBlurHandler}
                />
                {lastNameInputHasError && (
                  <p className="error-text">Please Enter a Last Name.</p>
                )}
              </div>
            </Name>
            <Name>
              <div className={emailInputClasses}>
                <label htmlFor="name">E-mail Address</label>
                <input
                  id="email"
                  type="email"
                  onChange={emailChangeHandler}
                  value={enteredEmail}
                  onBlur={emailBlurHandler}
                />
                {emailInputHasError && (
                  <p className="error-text">Email must be a valid Email</p>
                )}
              </div>
              <div className="form-control">
                <label htmlFor="name">
                  Comments <span>*Optional</span>
                </label>
                <textarea
                  rows="4"
                  cols="35"
                  onChange={commentChangeHandler}
                  value={enteredComment}
                  onBlur={commentBlurHandler}
                />
              </div>
            </Name>
            <div className="buttons">
              <button type="submit" className="btn" disabled={!formIsValid}>
                Submit
              </button>
              <Button primary to="/">
                Return Home
              </Button>
            </div>
          </ControlGroup>
        </StyledForm>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  padding: 4rem 1rem 0 1rem;
  background: var(--clr-white);
  color: var(--clr-dark);

  .line {
    height: 3px;
    background: var(--clr-accent);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  height: 90vh;
  color: var(--clr-dark);
  @media (max-width: 720px) {
    margin: 2rem auto;
    width: 80%;
  }
`;

const ControlGroup = styled.div`
  background: var(--clr-white);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  flex-wrap: wrap;
  min-width: 20rem;
  max-width: 50rem;
  border-radius: 1rem 0 1rem 0;
  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  .form-control {
    input,
    label,
    textarea {
      display: block;
    }

    label {
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    input,
    textarea {
      font: inherit;
      padding: 0.5rem;
      border-radius: 0.5rem;
      width: 20rem;
      max-width: 100%;
      margin-bottom: 1rem;
    }

    &:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
    }
  }

  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #ff8800;
    background-color: #fbe8d2;
  }

  .error-text {
    color: #b40e0e;
    margin-top: -1rem;
    font-size: 1rem;
  }

  textarea {
    border-radius: 0.5rem;
    padding: 0.5rem;

    &:focus {
      outline: none;
    }
  }
  span {
    color: #525252;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  .disabled,
  .disabled:hover,
  .disabled:active {
    background-color: #ccc;
    color: #292929;
    border-color: #ccc;
    cursor: not-allowed;
  }

  .form-actions {
    min-width: 15rem;
    max-width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;

    .btn {
      cursor: pointer;
      background: var(--clr-dark);
      color: var(--clr-white);
      text-decoration: none;
      font-size: clamp(0.5rem, 3vw, 1.1rem);
      border: none;
      font-weight: 600;
      border-radius: 0.5rem 0 0.5rem;
      padding: 1.25rem 2.25rem;
      text-align: center;
      box-shadow: var(--box-shadow);

      &:hover {
        transform: scale(0.9);
        background: var(--clr-accent);
      }
      &:disabled,
      &:disabled:hover,
      &:disabled:active {
        background-color: #ccc;
        color: #292929;
        border-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

const Name = styled.div`
  display: flex;

  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export default Contact;
