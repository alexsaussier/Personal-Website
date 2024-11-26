export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Alexandre Saussier. All rights reserved.</p>
          <p className="mt-2">
            <a href="mailto:asaussier99@gmail.com" className="hover:underline">asaussier99@gmail.com</a> | 
            <a href="tel:+33670175424" className="hover:underline ml-2">+33 6 70 17 54 24</a>
          </p>
        </div>
      </footer>
    )
  }
  
  