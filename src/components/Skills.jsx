import { motion } from 'framer-motion'
import { FaReact, FaNode, FaCss3  } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiHtml5 } from 'react-icons/si'


const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
    { name: 'Node.js', icon: FaNode, level: 75 },
    { name: 'Html', icon: SiHtml5, level: 90 },
    { name: 'Javascript', icon: SiJavascript, level: 70 },
    { name: 'Css', icon: FaCss3 , level: 85 },
  ]

  return (
    <section id="skills" className="section-padding bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-6 rounded-xl"
            >
              <skill.icon className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-neutral-700 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills