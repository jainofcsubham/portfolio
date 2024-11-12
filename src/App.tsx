import { Github, Linkedin, Mail, Code2, Cpu, Database, Layout } from 'lucide-react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">


      <Hero />

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            <p className="mb-6">
              I'm a Senior Software Engineer with expertise in full-stack development and cloud architecture. 
Passionate about crafting innovative business solutions and committed to continuous learning and technological advancement to optimize workflow efficiency.
            </p>
            <p>
              My experience includes leading development teams, building scalable applications, and mentoring junior developers. 
              I've consistently improved development efficiency and product stability throughout my career.
            </p>
          </div>
        </div>
      </section>

      <Stats />

      <Experience />

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, Angular, Redux, JavaScript</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Java, Spring Boot, Node.js, Python</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-600">SQL, NoSQL, PostgreSQL</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Layout className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud & Tools</h3>
              <p className="text-gray-600">AWS, Microservices, Serverless</p>
            </div>
          </div>
        </div>
      </section>

      <Education />

      {/* Projects Section */}
      {/* <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="Ontelo.io" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Ontelo.io</h3>
                <p className="text-gray-200 mb-4">Interactive learning platform with React and Serverless architecture</p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                alt="One Money" 
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">One Money</h3>
                <p className="text-gray-200 mb-4">Account aggregator platform built with Angular</p>
                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                  View Project <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-600">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/jainofcsubham" className="text-white hover:text-black transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://linkedin.com/in/jainsubhamofc" className="text-white hover:text-black transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
              <a href="mailto:jainofcsubham597@gmail.com" className="text-white hover:text-black transition-colors">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Subham Jain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;