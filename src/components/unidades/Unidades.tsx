'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'

interface UnitData {
  id: string
  type: string
  coveredArea: number
  terraceArea: number
  totalArea: number
}

const units: UnitData[] = [
  {
    id: 'A',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'B',
    type: 'Tres ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'C',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'D',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'E',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'F',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'G',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
  {
    id: 'H',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
  },
];

export default function Unidades() {
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null)
  const [currentUnitIndex, setCurrentUnitIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  // Actualizar automáticamente el plano extendido al cambiar de unidad
  useEffect(() => {
    setSelectedUnit(units[currentUnitIndex].id)
  }, [currentUnitIndex])

  const handleUnitClick = (unitId: string) => {
    setSelectedUnit(unitId)
    if (isMobile) {
      setIsModalOpen(true)
    }
  }

  const nextUnit = () => {
    setCurrentUnitIndex((prev) => (prev + 1) % units.length)
  }

  const prevUnit = () => {
    setCurrentUnitIndex((prev) => (prev - 1 + units.length) % units.length)
  }

  const selectedUnitData = units.find(unit => unit.id === selectedUnit)
  const currentUnit = units[currentUnitIndex]

  const handleDownload = async () => {
    try {
      const response = await fetch(`/unidades/plano_extendido_${selectedUnit}.jpg`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Plano_Unidad_${selectedUnit}_WaldHaus.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error al descargar el plano:', error)
    }
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <section id="unidades" className="relative text-white font-sans min-h-screen bg-black overflow-hidden">
      <div className='container mx-auto px-4 md:px-20 relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-3xl uppercase tracking-[.5em] mb-8 text-center pt-28 pb-16"
          style={{
            fontFamily: "'Helvetica Now', sans-serif",
          }}
        >
          Unidades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Left Section - Building Overview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[70vh] rounded-lg bg-black border border-white/10 overflow-hidden"
          >
            <div className="relative h-full w-full">
              <AnimatePresence initial={false} custom={currentUnitIndex}>
                <motion.div
                  key={currentUnit.id}
                  custom={currentUnitIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0 p-6"
                >
                  <div className="absolute top-4 left-4 z-10">
                    <h3 className="text-xl font-light tracking-wider">Unidad {currentUnit.id}</h3>
                    <div className="h-0.5 w-12 bg-white/50" />
                  </div>

                  <motion.div
                    className="relative h-full w-full cursor-pointer"
                    onClick={() => handleUnitClick(currentUnit.id)}
                  >
                    <Image
                      src={`/unidades/plano_A.svg`}
                      alt={`Unidad ${currentUnit.id}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      className="transition-all duration-500"
                    />
                  </motion.div>

                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 bottom-4 flex justify-between items-center px-4 z-20">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevUnit}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
                {/* Unit Navigation */}
              <div className="flex justify-center items-center gap-2 md:gap-6">
                {units.map((unit, index) => (
                  <motion.button
                    key={unit.id}
                    onClick={() => setCurrentUnitIndex(index)}
                    className={`relative text-sm font-light tracking-[0.2em] transition-colors duration-300 ${
                      index === currentUnitIndex 
                        ? 'text-white after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white' 
                        : 'text-white/30 hover:text-white/50'
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {unit.id}
                  </motion.button>
                ))}
              </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextUnit}
                  className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>

              
            </div>
          </motion.div>

          {/* Right Section - Unit Details (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[70vh] rounded-lg bg-black border border-white/10 overflow-hidden hidden md:block"
          >
            <AnimatePresence mode="wait">
              {selectedUnit ? (
                <motion.div
                  key={selectedUnit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full p-6 relative"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-2/3 w-full mb-6 group"
                  >
                    <Image
                      src={`/unidades/plano_extendido_${selectedUnit}.jpg`}
                      alt={`Plano detallado unidad ${selectedUnit}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      className="transition-all duration-500"
                    />
                    <motion.button
                      onClick={handleDownload}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-black/80"
                    >
                      Descargar Plano
                    </motion.button>
                  </motion.div>

                  {selectedUnitData && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl font-light tracking-wider">Unidad {selectedUnitData.id}</h3>
                      <div className="h-0.5 w-12 bg-white/50" />
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <p className="text-lg">{selectedUnitData.type}</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <p className="text-sm text-gray-400">Superficie Total</p>
                          <p className="text-lg">{selectedUnitData.totalArea} m²</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <p className="text-sm text-gray-400">Superficie Cubierta</p>
                          <p className="text-lg">{selectedUnitData.coveredArea} m²</p>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <p className="text-sm text-gray-400">Superficie Terraza</p>
                          <p className="text-lg">{selectedUnitData.terraceArea} m²</p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center p-6"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg
                      className="w-16 h-16 mb-4 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </motion.div>
                  <p className="text-xl font-light tracking-wider mb-2">Seleccione una unidad</p>
                  <p className="text-sm text-gray-400">Haga click en el plano para ver más detalles</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mobile Modal */}
        <AnimatePresence>
          {isModalOpen && isMobile && selectedUnit && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                onClick={() => setIsModalOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10  z-[101] h-[85vh] overflow-y-auto"
                style={{ touchAction: 'pan-y' }}
              >
                {/* Close button */}
                <div 
                  className="sticky top-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-sm z-[102] flex justify-between items-center border-b border-white/10 mr-3"
                >
                  <h3 className="text-xl font-light">Unidad {selectedUnit}</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal content */}
                <div className="p-6 pt-2">
                  <div className="relative h-[35vh] w-full mb-6 bg-white/5 rounded-lg overflow-hidden group">
                    <Image
                      src={`/unidades/plano_extendido_${selectedUnit}.jpg`}
                      alt={`Plano detallado unidad ${selectedUnit}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      priority
                      className="transition-all duration-500"
                    />
                    <motion.button
                      onClick={handleDownload}
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300 px-2 py-2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-sm hover:bg-black/80 flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      
                    </motion.button>
                  </div>

                  {selectedUnitData && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-2">
                          <p className="text-lg font-light">{selectedUnitData.type}</p>
                          <div className="h-0.5 w-12 bg-white/50 mt-2" />
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                          <p className="text-sm text-gray-400">Superficie Total</p>
                          <p className="text-lg mt-1">{selectedUnitData.totalArea} m²</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                          <p className="text-sm text-gray-400">Superficie Cubierta</p>
                          <p className="text-lg mt-1">{selectedUnitData.coveredArea} m²</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg">
                          <p className="text-sm text-gray-400">Superficie Terraza</p>
                          <p className="text-lg mt-1">{selectedUnitData.terraceArea} m²</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}