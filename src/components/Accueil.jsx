import { motion } from "framer-motion";

const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionA = motion.a;

export default function Accueil() {
  return (
    <section
      id="accueil"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-gray-700"
    >
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold mb-4 tracking-widest text-gray-800 text-center max-w-xl"
      >
        Magdalena Lemus Serrano - PhD.
      </MotionH1>

      <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded mb-6"></div>

      <MotionP
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl italic text-gray-600 mb-8 max-w-lg text-center"
      >
        Linguiste, traductrice et développeuse web junior.
      </MotionP>

      <MotionA
        href="mailto:magdalena.lemusser@gmail.com"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-lg hover:from-gray-900 hover:to-gray-700 transition transform"
      >
        Me contacter
      </MotionA>
    </section>
  );
}
