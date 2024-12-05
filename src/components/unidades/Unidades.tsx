import Image from 'next/image'

export default function Unidades() {
  return (
    <section className="relative text-white font-sans min-h-screen bg-black">
      <div className='px-20 mx-auto'>
        <h2
          className="text-sm md:text-3xl uppercase tracking-[.5em] mb-8 text-center pt-28 pb-16"
          style={{
            fontFamily: "'Helvetica Now', sans-serif",
            color: "#FFFFFF",
          }}
        >
          Unidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[60vh] w-full">
            <Image
              src="/images/unidades/interior.jpg"
              alt="Interior de unidad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full">
            <Image
              src="/images/unidades/plano.jpg"
              alt="Plano de unidad"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Floor plan details */}
              <div className="text-center">
                <span className="block text-xl font-light">2-3</span>
                <span className="text-sm uppercase tracking-wider">Dormitorios</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-light">2</span>
                <span className="text-sm uppercase tracking-wider">Baños</span>
              </div>
              <div className="text-center">
                <span className="block text-xl font-light">120m²</span>
                <span className="text-sm uppercase tracking-wider">Superficie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
