import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, lineAnim, pageAnimation } from "../../UI/Animations";
import Button from "../../UI/Button";

const ContactForm = () => {
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

        <StyledForm method="POST" name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <ControlGroup>
            <Name>
              <div className="form-control">
                <label htmlFor="name">First Name</label>
                <input type="text" id="name" name="nameFirst" />
              </div>
              <div className="form-control">
                <label htmlFor="name">Last Name</label>
                <input type="text" id="name" name="nameLast" />
              </div>
            </Name>
            <Name>
              <div className="form-control">
                <label htmlFor="name">E-mail Address</label>
                <input id="email" type="email" name="email" />
              </div>
              <div className="form-control">
                <label htmlFor="name">
                  Comments <span>*Optional</span>
                </label>
                <textarea rows="4" cols="35" id="content" name="content" />
              </div>
            </Name>
            <div className="form-actions">
              <button type="submit">Submit</button>
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
`;

const Name = styled.div`
  display: flex;

  gap: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export default ContactForm;
