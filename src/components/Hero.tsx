import { Download } from 'lucide-react';
import subham from "../assets/images/subham.jpeg";
import resume from "../assets/files/Subham_Jain_Resume.pdf";
import logo from "../assets/images/signature.png";
export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className='absolute  top-8 left-8'>
        <img src={logo} alt='logo' className='w-48' />
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-600">
                <img 
                  src={subham}
                  alt="Subham Jain" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full">
                <span className="text-sm font-semibold">Open to Work</span>
              </div> */}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Subham Jain
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Senior Software Engineer
            </p>
            <p className="text-gray-400 mb-8 max-w-xl">
              Passionate software engineer with expertise in full-stack development, cloud architecture, and team leadership.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Get in touch
              </a>
              <a href={resume} download="Subham_Jain_Resume" target="_blank" className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg transition-colors">
              <Download className="w-5 h-5 inline mr-1 animate" /> Resume
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}