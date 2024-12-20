import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 mb-4">
              I'm a passionate Frontend Developer with 3+ years of experience in building 
              responsive and user-friendly web applications. Specializing in React and 
              modern JavaScript, I create efficient and scalable solutions.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in web development started with a curiosity for creating 
              beautiful user interfaces, and has evolved into a deep understanding 
              of frontend architecture and best practices.
            </p>
            <button className="btn-primary">Download CV</button>
          </div>


          <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="/src/assets/images/james_profile14.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
        </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About