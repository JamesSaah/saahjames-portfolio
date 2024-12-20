const Footer = () => {
    return (
      <footer className="bg-neutral-900 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary">James Saah Kollie</h3>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer