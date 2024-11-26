'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
}

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: isHovered ? -30 : 0 }}
        transition={{ duration: 0.3 }}
        className="block"
      >
        {children}
      </motion.span>
      <motion.span
        initial={{ y: 30 }}
        animate={{ y: isHovered ? 0 : 30 }}
        transition={{ duration: 0.3 }}
        className="block"
      >
        Visit Site
      </motion.span>
    </motion.a>
  )
}

