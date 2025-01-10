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
              href="https://www.google.com/maps/search/?api=1&query=Lola+Mora+35+Yerba+Buena+Argentina+4017"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </Link>
            <Link
              href="mailto:info@coletti.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </Link>
            <Link
              href="https://coletti.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </Link>
            <Link
              href="https://wa.me/5493815502501"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 aspect-video flex items-center justify-center hover:border-white/40 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                <path strokeLinecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </Link>
          </div>

          <div className="flex justify-end gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-wider sm:tracking-widest text-white/60">
            <p className="transition-colors">
              +54 381 260 69 01
            </p>
            {/* <Link href="#" className="hover:text-white transition-colors">
              LEGAL
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  )
}
