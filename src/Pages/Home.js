import React from "react";

//components
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Technologies from "../Components/Home/Technologies";
//Animations
import { pageAnimation } from "../UI/Animations";
import { motion } from "framer-motion";
import MiniProjects from "../Components/Home/MiniProjects";
const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Hero />
      <About />
      <Technologies />
      <MiniProjects />
    </motion.div>
  );
};

export default Home;
