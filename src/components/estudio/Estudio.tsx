'use client';
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function Estudio() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    { name: 'proyectos', image: '/proyectos.png' },
    { name: 'el taller', image: '/proyectos.png' },
    { name: 'visión', image: '/proyectos.png' },
    { name: 'historia', image: '/proyectos.png' }
  ]

  return (
    <section id="estudio" className="bg-black text-white py-12 sm:py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2
          className="text-base sm:text-xl md:text-3xl uppercase tracking-[.3em] sm:tracking-[.4em] md:tracking-[.5em] mb-4 sm:mb-6 md:mb-8 text-center pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-12 md:pb-16"
          style={{
            fontFamily: "'Helvetica Now', sans-serif",
            color: "#FFFFFF",
          }}
        >
          Estudio
        </h2>
        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            <div className="relative w-full aspect-square object-cover lg:col-span-2">
              <Image
                src="/colleti-espalda.png"
                alt="Estudio principal"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 sm:space-y-8 lg:col-span-3 px-0 sm:px-6 lg:px-10">
              <p className="text-base sm:text-lg font-light leading-relaxed">
                Somos una empresa de servicios profesionales integrados, especializada en el sector inmobiliario. Nuestro equipo de expertos se compone de arquitectos, ingenieros, especialistas en finanzas, administración y abogados, para facilitarles oportunidades a nuestros inversores.
                <br />
                <br />
                Somos una empresa de servicios profesionales integrados, especializada en el sector inmobiliario. Proporcionamos a nuestros clientes e inversores oportunidades para potenciar el valor de sus operaciones a través de la propiedad, el alquiler o la inversión en inmuebles.
                Con equipos de trabajo interdisciplinarios desarrollamos y evaluamos proyectos de inversión y definimos las necesidades principales de nuestros clientes.
              </p>
              <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-light">
                    {inView && (
                      <CountUp
                        end={80}
                        duration={2.5}
                        separator="."
                      />
                    )}
                  </span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-xs sm:text-sm tracking-wider block"
                  >
                    años
                  </motion.span>
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-light">
                    {inView && (
                      <CountUp
                        end={18}
                        duration={2.5}
                        separator="."
                      />
                    )}
                  </span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-xs sm:text-sm tracking-wider block"
                  >
                    edificios en altura
                  </motion.span>
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-light">
                    {inView && (
                      <CountUp
                        end={280000}
                        duration={2.5}
                        separator="."
                      />
                    )}
                  </span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-xs sm:text-sm tracking-wider block"
                  >
                    construidos
                  </motion.span>
                </div>
                <div className="text-center">
                  <span className="block text-lg sm:text-xl font-light">
                    {inView && (
                      <CountUp
                        end={180000}
                        duration={2.5}
                        separator="."
                      />
                    )}
                  </span>
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="text-xs sm:text-sm tracking-wider block"
                  >
                    construcciones privadas
                  </motion.span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col items-center sm:items-start">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <p className="mt-4 text-center w-full text-xl sm:text-2xl md:text-3xl tracking-widest">
                  {project.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
