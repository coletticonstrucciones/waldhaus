/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Contacto() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col justify-end">
      <div className="container mx-auto px-4 flex flex-col items-center gap-16 pb-8">
        <h1 className="text-4xl md:text-6xl tracking-[0.5em] font-light">
          COLETTI.COM
        </h1>
        
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="#" className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors">
              <img 
                src="/twitter.svg" 
                alt="Twitter" 
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors">
              <img 
                src="/facebook.svg" 
                alt="Facebook" 
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors">
              <img 
                src="/instagram.svg" 
                alt="Instagram" 
                className="w-6 h-6"
              />
            </Link>
            <Link href="#" className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors">
              <img 
                src="/linkedin.svg" 
                alt="LinkedIn" 
                className="w-6 h-6"
              />
            </Link>
          </div>
          
          <div className="flex justify-center gap-8 mt-8 text-xs tracking-widest text-white/60">
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
