import HonestComment from '@/app/components/HonestComment';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold">McGill University – Desautels Faculty of Management, Montreal, Canada</h3>
            <p className="text-gray-600">2017 – 2021</p>
            <p>Bachelor of Commerce, Major in Finance, Minor in Computer Science.</p>
            <HonestComment comment="Arrived in Montreal at 17 with my hands in my pockets. 
            Learned a lot about life, myself and becoming an adult.
            Got some humbling grades my first semester, but made up for it with time and graduated with a decent GPA. 
            Some classes were pretty tough, specifically my finance major classes and the comp sci ones too. Spent long nights in the library and learned to study properly. 
            Was surrounded by really smart people and made some lifelong friends. Also partied a bit." />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Lycée Albert 1er, Monaco</h3>
            <p className="text-gray-600">2014 – 2017</p>
            <p>French Baccalaureate – Economics and Sociology</p>
            <p>Awards: Graduated with Highest Honours with a final grade of 16.97/20</p>
            <HonestComment comment="These were beautiful years, growing up and going to school in Monaco was a privilege. Made lifelong friends." />
          </div>
        </div>
      </div>
    </section>
  )
}

