/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Contacto() {
  return (
    <section id="contacto" className="bg-black text-white py-12 sm:py-16 md:py-24 min-h-screen flex flex-col justify-end">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 pb-6 sm:pb-8 md:pb-12">
        <h1 className="text-4xl lg:text-6xl tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] font-light text-center">
          COLETTI.COM
        </h1>
        
        <div className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <Link 
              href="#" 
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <img 
                src="/twitter.svg" 
                alt="Twitter" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
            <Link 
              href="#" 
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <img 
                src="/facebook.svg" 
                alt="Facebook" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
            <Link 
              href="#" 
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <img 
                src="/instagram.svg" 
                alt="Instagram" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
            <Link 
              href="#" 
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <img 
                src="/linkedin.svg" 
                alt="LinkedIn" 
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </Link>
          </div>
          
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-white/60">
            <Link href="#" className="hover:text-white transition-colors">
              POLICIES
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              LEGAL
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
