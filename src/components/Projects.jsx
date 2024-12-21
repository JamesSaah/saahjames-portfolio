import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: "/images/james_project3.png",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website with animations",
      image: "/images/james_profile13.jpg",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management platform",
      image: "/images/james_profile10.png",
      tech: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Future Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-xl overflow-hidden"
            >
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 
                    transition-all duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-sm bg-neutral-800 px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-primary hover:text-blue-400 
                  transition-colors">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects