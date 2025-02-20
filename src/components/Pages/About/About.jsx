import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function About({ backgroundColor, borderColor }) {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 50; // Adjust this value to control when the animation triggers

      if (scrollPosition > triggerPosition) {
        controls.start({ opacity: 1, y: 0 }).then(() => {
          // Reset position after animation completes
          controls.set({ y: 0 });
        });
      }
    };

    handleScroll(); // Trigger the animation on the first render

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="about-heading"
      >
        <h4 style={{ backgroundColor }}>About Me</h4>
        <h2>Know Me More</h2>
      </motion.div>
      <div className="about-text">
        <div className="about-details">
          <p className="p-name">
            Hi there!, I'm <span style={{ borderColor }}>Vikas</span>
          </p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-details"
          >
            I'm a React developer with 1.10 year of experience in building web
            applications. I'm passionate about creating beautiful and intuitive
            user interfaces that provide an enjoyable user experience. In my
            current role at Neuronimbus Software Services Pvt. Ltd.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-details"
          >
            In my free time, I like to play online games and creating awesome
            user interface and I also enjoy contributing to open source projects
            and attending local tech meetups.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-details"
          >
            I'm excited to continue growing my skills and experience as a
            frontend developer. Thank you for considering my application!
          </motion.p>
        </div>
        <div className="my-age" style={{ backgroundColor }}>
          <div className="age-1">
            <h1>26</h1>
            <h2 className="text-nowrap">Year's old</h2>
          </div>
        </div>
      </div>
      <div className="about-me" style={{ borderColor }}>
        <div className="Name">
          <p className="one">Name:</p>
          <p>Vikas</p>
        </div>
        <div className="Email">
          <p className="Two">Email:</p>
          <p>
            <a href="mailto:vikasjajoriya1998@gmail.com">
              vikasjajoriya1998@gmail.com
            </a>
          </p>
        </div>
        <div className="dob">
          <p className="Three">Date of birth:</p>
          <p>03/12/1998</p>
        </div>
        <div className="From">
          <p className="Four">From:</p>
          <p>Gurugram-122503, India</p>
        </div>
      </div>
    </div>
  );
}
// import React, { useEffect, useState } from "react";
// import "../../../Scss/Components/About.scss";
// import { motion, useAnimation } from "framer-motion";

// export default function About({ backgroundColor, borderColor }) {
//   const controls = useAnimation();
//   const [currentAge, setCurrentAge] = useState(1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const triggerPosition = 50; // Adjust this value to control when the animation triggers
//       const maxAge = 24; // The final age value

//       if (scrollPosition > triggerPosition) {
//         const fastIncrementDelay = 50; // Delay between fast increments in milliseconds
//         const slowIncrementDelay = 200; // Delay between slow increments in milliseconds
//         const fastIncrementThreshold = 20; // The age value at which the increment slows down

//         const incrementAge = (age) => {
//           setCurrentAge(age);
//         };

//         let delay = 0;

//         for (let age = 1; age <= maxAge; age++) {
//           if (age <= fastIncrementThreshold) {
//             setTimeout(() => incrementAge(age), delay);
//             delay += fastIncrementDelay;
//           } else {
//             setTimeout(() => incrementAge(age), delay);
//             delay += slowIncrementDelay;
//           }
//         }

//         controls.start({ opacity: 1, y: 0 }).then(() => {
//           // Reset position after animation completes
//           controls.set({ y: 0 });
//         });
//       }
//     };

//     handleScroll(); // Trigger the animation on the first render

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [controls]);

//   return (
//     <div className="about" id="about">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={controls}
//         exit={{ opacity: 0, y: -50 }}
//         transition={{ duration: 0.5 }}
//         className="about-heading"
//       >
//         <h4 style={{ backgroundColor }}>About Me</h4>
//         <h2>Know Me More</h2>
//       </motion.div>
//       <div className="about-text">
//         <div className="about-details">
//           <p className="p-name">
//             Hi there!, I'm <span style={{ borderColor }}>Vikas</span>
//           </p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="p-details"
//           >
//             I'm a frontend developer with One year of experience in building web
//             applications. I'm passionate about creating beautiful and intuitive
//             user interfaces that provide an enjoyable user experience. In my
//             current role at Neuronimbus Software Pvt. Ltd.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             className="p-details"
//           >
//             In my free time, I like to play online games and creating awesome
//             user interface and I also enjoy contributing to open source projects
//             and attending local tech meetups.
//           </motion.p>
//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={controls}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="p-details"
//           >
//             I'm excited to continue growing my skills and experience as a
//             frontend developer. Thank you for considering my application!
//           </motion.p>
//         </div>
//         <div className="my-age" style={{ backgroundColor }}>
//           <div className="age-1">
//             <h1>{currentAge}</h1>
//             <h2>Year's old</h2>
//           </div>
//         </div>
//       </div>
//       <div className="about-me" style={{ borderColor }}>
//         <div className="Name">
//           <p className="one">Name:</p>
//           <p>Vikas</p>
//         </div>
//         <div className="Email">
//           <p className="Two">Email:</p>
//           <p>
//             <a href="mailto:vikasjajoriya1998@gmail.com">
//               vikasjajoriya1998@gmail.com
//             </a>
//           </p>
//         </div>
//         <div className="dob">
//           <p className="Three">Date of birth:</p>
//           <p>03/12/1998</p>
//         </div>
//         <div className="From">
//          <p className="Four">From:</p>
//           <p>Gurugram-122503, India</p>
//         </div>
//       </div>
//     </div>
//   );
// }