import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Princess!!,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          HAPPIEST BIRTHDAY SHRUTIIII !!
          You're the Bestesttttt Besttt Personn i ever mettt uhh are the special person in my life.
          No one makes me laugh like u do  And one understands me the way u do. 
          You have the kindest heart and the brightest smile Always stay the same beautiful soul u are Shrutiii.
          Mein itni dhur se aapko koi gift toh nahi de sakta isliye hein online gift card banaya for u hope so aapko pasand aaye.
          Bs itna kehna chahta ki tu khush reh , hamesa muskurati rahe 
          kabhi kisi baat ka dard mehsoos na ho aur agar kabhi ho bhi gaya toh yaad rkhna main hoon tere saath hamesa
          NO matter where life take us,I"ll always your back You're truly one in a million Shrutiii
          Thanks for crazyyyy laughs and latee night talkssss
          I hope uhh stay forever with me and give me lot happiness. Stay tuned and connceted forever 
          The Bestest Bond I Have Made Ever!!
         </p>
        <p className="text-lg text-pink-600 font-semibold">
          Once again Happiest birthday shrutiiiiii enjoy your dayy !!
        </p>
      </motion.div>
    </div>
  );
};

export default Message;