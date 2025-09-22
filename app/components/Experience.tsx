import HonestComment from '@/app/components/HonestComment'
import AnimatedLink from './AnimatedLink'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-12">
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-xl font-semibold">Founder&apos;s Associate</h3>
                <AnimatedLink href="https://ready.co">
                  ready.co
                </AnimatedLink>
              </div>
              <p className="text-gray-600">Ready (formerly Argent), London, United-Kingdom | March 2025 - Present</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Leading special internal projects (e.g. rebranding from Argent to Ready, device security ramp-up).</li>
              <li>Building internal automation tools and AI agents using Python and Gumloop & Improving operational efficiency throughout teams.</li>
              <li>Investor & board reporting.</li>
              <li>GTM Strategy and Market research.</li>
            </ul>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-xl font-semibold">Product Owner</h3>
              <AnimatedLink href="https://nchain.com">
                nchain.com
              </AnimatedLink>
            </div>
            <p className="text-gray-600">nChain, London, United-Kingdom | June 2023 – December 2024</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Product owner for nChain Certify, a web application to issue digital certificates on blockchain.</li>
              <li>Leading a team of 2 engineers, 1 UX designer and 1 QA.</li>
              <li>Responsible for product communications across departments.</li>
              <li>Blockchain technology consulting: Led 4 engagement proposals for prospective clients in 3 countries.</li>
              <li>Advised 7 startups on product design and implementation in web3 incubator BlockDojo.</li>
            </ul>
            <HonestComment comment="Went down the blockchain rabbit hole, learned a lot about how blockchain and cryptography works. 
            Specifically UTXO-based blockchains. I got assigned responsibility for managing products, and realized how much I loved building things. " />
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="text-xl font-semibold">Business Analyst - Omnia AI, Intelligent Automation</h3>
              <AnimatedLink href="https://deloitte.ca">
                deloitte.ca
              </AnimatedLink>
            </div>
            <p className="text-gray-600">Deloitte, Montréal, Canada | September 2021 – February 2023</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Worked on 6 client projects within Deloitte Canada&apos;s Artificial Intelligence consulting practice.</li>
              <li>Successfully led a team of 2 developers and 2 QA analysts.</li>
              <li>Led our practice&apos;s internal resourcing operations.</li>
              <li>Participated in various business development activities.</li>
            </ul>
            <HonestComment comment="First job out of school, I was nervous and excited at the same time. 
            Felt super privileged to be working on large projects for big companies at just 21. 
            I tried to be the best consultant I could and to always be up to the challenge. Was definitely tough sometimes but I really enjoyed it. 
            Learned to present to senior folks, go straight to the point and work quickly under pressure. I also built some cool automations. 
            Managed a small tech team for the first time. I only keep good memories, it was a great school of life. Left because I wanted to move back to Europe and work in a smaller company/startup." />
          </div>
        </div>
      </div>
    </section>
  )
}

