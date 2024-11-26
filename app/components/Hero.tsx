import { GithubIcon, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Alexandre Saussier</h1>
        <p className="text-xl mb-6">Product Manager | Indie Hacker | Builder</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://github.com/alexsaussier" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <GithubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/alexandre-saussier-171b0b152/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={24} />
          </a>
          <a href="mailto:asaussier99@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={24} />
          </a>
        </div>
        <p className="max-w-2xl mx-auto text-gray-600">
          Product Owner with experience in blockchain technology and AI consulting. 
          Passionate about new technologies, building products and coding.
        </p>
      </div>

      <div className="absolute bottom-16 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </section>
  )
}

