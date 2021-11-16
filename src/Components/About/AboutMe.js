import React from "react";
//styles
import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { fade, lineAnim } from "../../UI/Animations";
import Button from "../../UI/Button";

const AboutMe = () => {
  return (
    <StyledAboutMe variants={fade} initial="hidden" animate="show" exit="exit">
      <motion.h1 variants={fade}>About Me</motion.h1>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <p>
        Hello, my name is <span>Ed Reed</span>. I live in Windsor Ontario
        Canada.
      </p>
      <p>
        I had a career in construction, before suffering a life altering
        accident.
      </p>
      <p>
        After high school I started in sales. I did extremely well with that,
        but I was always told "you need to learn a trade". So that's what I did.
        I started in HVAC installation.
      </p>
      <p>
        I started out as a "helper", and quickly moved up to lead installer,
        running my own crew.
      </p>
      <p>
        With construction being a semi-seasonal job (winter months are very
        slow), I grew tired of being laid off for the season.
      </p>
      <p>
        I decided at the age of 36 to go back to school. I received a diploma in
        Network Engineering. In my city of Windsor Ontario, there weren't very
        many jobs in that field, and having a family with 2 young children
        moving to a new city for a fresh start wasn't in the books for me. So I
        fell back to my trade.
      </p>
      <p>
        Then December of 2012 came. While crossing the street, I was hit by a
        car, and my life would never be the same again.
      </p>
      <p>
        I suffered major injuries and would never be able to do what I did
        before. It took many years of rehab and learning what I now could do, to
        get me where I am today.
      </p>
      <p>
        My oldest son was just about to graduate High School, and decided he
        wanted to go to College for Web Development.
      </p>
      <p>
        That was always something I wanted to do, so i started looking into it
        for myself. I started taking online courses. In a few short weeks, I
        created my first Website. Windsor Lodge 403 is a local Freemason Lodge
        and needed a site. They had asked me almost 5 years ago, because I
        mentioned I was going to start learning how to do it. I wasn't ready
        yet, still recouping from my injuries.
      </p>
      <p>
        For most people, 2020 and 2021 haven't been very good for them. For me
        it has been a lifesaver. Going from not knowing what I was going to do
        with my career, to finding something I truly love. I enjoy creating
        something from just a vision in my head, to something that others will
        enjoy.
      </p>
      <p>
        My previous employment really helps with my new career. I always worked
        with the homeowners on how they wanted their installation, and now I get
        to work with individuals and businesses to create a site that will help
        them get more business.
      </p>
      <p>
        I have always had the ability to see what works and doesn't work for the
        companies I worked for. I can changes that are needed for them to
        succeed and what they are doing wrong, that is losing them business.
      </p>
      <p>
        When I work for a company, I always make it part of my family. I go
        above and beyond what is asked of me, because if they succeed, then I
        too succeed.
      </p>
      <Button to="/contact" outline>
        CONTACT ME
      </Button>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled(motion.div)`
  padding: 2rem;
  overflow: hidden;
  margin-bottom: 4rem;

  @media screen and (min-width: 768px) {
    padding: 5rem 8rem;
  }

  p {
    line-height: 160%;
    margin-bottom: 2rem;
  }

  .line {
    height: 3px;
    background-color: var(--clr-accent);
    margin-bottom: 3rem;
  }

  Button {
    margin: 2rem auto;
  }
`;

export default AboutMe;
