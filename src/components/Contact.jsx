import { motion } from 'framer-motion'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <section id="contact" className="section-padding bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-2xl text-gray-400 hover:text-primary 
                transition-colors">
                <FaFacebookSquare />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-primary 
                transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-primary 
                transition-colors">
                <SiGmail />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-neutral-800 rounded-md focus:outline-none 
                  focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-neutral-800 rounded-md focus:outline-none 
                  focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-neutral-800 rounded-md focus:outline-none 
                  focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact