import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="h-screen w-full relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900" id="hero">
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TEJAS SANGHAI
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack & Automation Engineer
        </motion.p>
      </div>

      <Canvas className="z-0">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1.5, 64, 64]}>
          <meshStandardMaterial color="#0ff" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </section>
  );
};

export default Hero;