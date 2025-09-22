import HonestComment from '@/app/components/HonestComment'
import AnimatedLink from '@/app/components/AnimatedLink'

export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">Finterpret.co</h3>
                <span className="text-gray-400 text-sm italic">
                  (deprecated)
                </span>
              </div>
              <p>An AI companion for making better stock market investments.</p>
              <p className="text-sm text-gray-600 mt-2">Stack: Next.js, mongoDB, Vercel, Stripe</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">Etudes-Canada.com</h3>
                <AnimatedLink href="https://etudes-canada.com">
                  etudes-canada.com
                </AnimatedLink>
              </div>
              <p>A guide for studying in Canada with a webpage and payment gateway.</p>
              <p className="text-sm text-gray-600 mt-2">Stack: React, Firebase, Stripe</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">AutoTrader</h3>
              <p>Fully automated cryptocurrency trading bot in Python.</p>
              <p className="text-sm text-gray-600 mt-2">Stack: Python, Coinbase API</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">GPT-Powered Twitter Bots</h3>
              <p>Automated Twitter accounts powered by chatGPT.</p>
              <p className="text-sm text-gray-600 mt-2">Stack: Python, Twitter API, OpenAI API</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">Battersea Web Design</h3>
                <AnimatedLink href="https://batterseawebdesign.com">
                  batterseawebdesign.com
                </AnimatedLink>
              </div>
              <p>A web development agency that builds websites for SMEs, mobile apps, and Web App MVPs.</p>
              <p className="text-sm text-gray-600 mt-2">Stack: Next.js, React, Node.js, Various CMS</p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <HonestComment comment="I have been coding and building things in my free time since I was 19 years old. 
            I built many things, from automated trading bots, to digital guides, to web apps.
            First thing I ever built was a Python script that automatically notified me when spots opened for fully-booked classes at McGill." />

          </div>
          
        </div>
      </section>
    )
  }
  
  