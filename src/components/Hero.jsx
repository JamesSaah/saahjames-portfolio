import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex mt-10 items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='grid grid-cols-2 gap-10'>
          <img 
            src="/images/james_project4.jpeg" 
            alt="james" 
            className='w-full h-full object-contain aspect-square rounded-xl overflow-hidden shadow-lg'
            loading="eager"
            style={{ imageRendering: 'crisp-edges' }}
          />

          <div>
          <h1 className="text-2xl md:text-8xl font-bold mb-6">
            James Saah Kollie
            <span className="block text-2xl md:text-3xl text-secondary mt-2">
              Mid-Level Frontend Developer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Building modern web experiences with React, Tailwind CSS, and cutting-edge technologies
          </p>
          </div>
          </div>
          
          <button className="btn-primary">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero