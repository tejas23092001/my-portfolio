import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen px-8 py-24 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <motion.h2
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="max-w-3xl text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I’m Tejas Sanghai, a passionate Software Engineer with a strong foundation in React, Node.js, Python, and cloud-native technologies. I've contributed to scalable test frameworks, built network automation at Arista Networks, and love pushing the web's creative boundaries. This portfolio is a blend of code and creativity.
      </motion.p>
    </section>
  );
};

export default About;
