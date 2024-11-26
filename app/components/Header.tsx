import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-center space-x-6">
          <li><Link href="#home" className="text-gray-600 hover:text-gray-900">Home</Link></li>
          <li><Link href="#education" className="text-gray-600 hover:text-gray-900">Education</Link></li>
          <li><Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link></li>
          <li><Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
          <li><Link href="#skills" className="text-gray-600 hover:text-gray-900">Skills</Link></li>
        </ul>
      </nav>
    </header>
  )
}

