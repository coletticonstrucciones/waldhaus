/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

export default function Estudio() {
  const projects = [
    { name: 'proyectos', image: '/proyectos.png' },
    { name: 'el taller', image: '/proyectos.png' },
    { name: 'visión', image: '/proyectos.png' },
    { name: 'historia', image: '/proyectos.png' }
  ]

  return (
    <section className="bg-black text-white py-24 min-h-screen">
      <div className="container mx-auto px-4">
        <h2
          className="text-sm md:text-3xl uppercase tracking-[.5em] mb-8 text-center pt-28 pb-16"
          style={{
            fontFamily: "'Helvetica Now', sans-serif",
            color: "#FFFFFF",
          }}
        >
          Estudio
        </h2>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="relative w-full aspect-square object-cover col-span-2">
              <Image
                src="/colleti-espalda.png"
                alt="Estudio principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8 col-span-3 px-10">
              <p className="text-lg font-light leading-relaxed">
                Somos una empresa de servicios profesionales integrados, especializada en el sector inmobiliario. Nuestro equipo de expertos se compone de arquitectos, ingenieros, especialistas en finanzas, administración y abogados, para facilitarles oportunidades a nuestros inversores. Botón más sobre nosotros.
                <br />
                <br />
                Somos una empresa de servicios profesionales integrados, especializada en el sector inmobiliario. Proporcionamos a nuestros clientes e inversores oportunidades para potenciar el valor de sus operaciones a través de la propiedad, el alquiler o la inversión en inmuebles.
                Con equipos de trabajo interdisciplinarios desarrollamos y evaluamos proyectos de inversión y definimos las necesidades principales de nuestros clientes.
              </p>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <span className="block text-xl font-light">80</span>
                  <span className="text-sm tracking-wider">años</span>
                </div>
                <div className="text-center">
                  <span className="block text-xl font-light">18</span>
                  <span className="text-sm tracking-wider">edificios en altura</span>
                </div>
                <div className="text-center">
                  <span className="block text-xl font-light">280.000</span>
                  <span className="text-sm tracking-wider">construidos</span>
                </div>
                <div className="text-center">
                  <span className="block text-xl font-light">180.000</span>
                  <span className="text-sm tracking-wider">construcciones privadas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16 ">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col items-start">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <p className="mt-4 text-center text-3xl tracking-widest">{project.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
