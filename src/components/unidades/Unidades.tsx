/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

interface UnitData {
  id: string
  type: string
  coveredArea: number
  terraceArea: number
  totalArea: number
  floor: number
}

const units: UnitData[] = [
  {
    id: 'A',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 1
  },
  {
    id: 'B',
    type: 'Tres ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 2
  },
  {
    id: 'C',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 3
  },
  {
    id: 'D',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 4
  },
  {
    id: 'E',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 5
  },
  {
    id: 'F',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 6
  },
  {
    id: 'G',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 7
  },
  {
    id: 'H',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 8
  },
]

export default function Unidades() {
  const [selectedUnit, setSelectedUnit] = useState<UnitData>(units[0])
  const [showExtendedPlan, setShowExtendedPlan] = useState(false)

  const handleNextUnit = () => {
    const currentIndex = units.findIndex(u => u.id === selectedUnit.id)
    const nextIndex = (currentIndex + 1) % units.length
    setSelectedUnit(units[nextIndex])
  }

  const handlePrevUnit = () => {
    const currentIndex = units.findIndex(u => u.id === selectedUnit.id)
    const prevIndex = (currentIndex - 1 + units.length) % units.length
    setSelectedUnit(units[prevIndex])
  }

  // Manejar teclas para navegación
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showExtendedPlan) {
        setShowExtendedPlan(false)
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        handlePrevUnit()
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        handleNextUnit()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedUnit, showExtendedPlan])

  const handleDownload = async () => {
    try {
      const response = await fetch(`/unidades/plano_extendido_${selectedUnit.id}.jpg`)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Plano_Unidad_${selectedUnit.id}_WaldHaus.jpg`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error al descargar el plano:', error)
    }
  }

  return (
    <section id='unidades' className="relative min-h-screen bg-black text-white overflow-hidden pt-24 md:pt-0">
      {/* Selector de Unidades */}
      <div className="absolute top-8 sm:top-20 left-1/2 -translate-x-1/2 z-10 w-[90%] sm:w-auto">
        <div className="flex items-center justify-between sm:justify-center gap-2 w-full">
          <button
            onClick={handlePrevUnit}
            className="p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
            aria-label="Unidad anterior"
          >
            <ChevronUpIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="bg-neutral-900/80 backdrop-blur-sm px-6 py-2 rounded-full flex-1 sm:flex-initial text-center">
            <span className="text-base sm:text-lg whitespace-nowrap">Unidad {selectedUnit.id}</span>
          </div>
          <button
            onClick={handleNextUnit}
            className="p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
            aria-label="Siguiente unidad"
          >
            <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-6xl mx-auto">
          {/* Plano Principal */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden group"
            >
              <Image
                src={`/unidades/WALDHAUS-${selectedUnit.floor}.svg`}
                alt={`Plano unidad ${selectedUnit.id}`}
                fill
                className="object-contain p-8 sm:p-12 group-hover:scale-105 transition-transform duration-500 mix-blend-screen"
                onClick={() => setShowExtendedPlan(true)}
                priority
                style={{
                  filter: 'brightness(1.5) contrast(1.2)',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 70%)'
                }}
              />
            </motion.div>
          </div>

          {/* Información de la Unidad */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-4xl mb-2 sm:mb-3">Unidad {selectedUnit.id}</h2>
              <p className="text-lg sm:text-xl text-neutral-400">{selectedUnit.type}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Área Cubierta</p>
                <p className="text-lg sm:text-2xl">{selectedUnit.coveredArea} m²</p>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Área Terraza</p>
                <p className="text-lg sm:text-2xl">{selectedUnit.terraceArea} m²</p>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Área Total</p>
                <p className="text-lg sm:text-2xl">{selectedUnit.totalArea} m²</p>
              </div>
            </div>

            <button
              onClick={() => setShowExtendedPlan(true)}
              className="bg-neutral-900/50 backdrop-blur-sm py-3 sm:py-4 px-4 sm:px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800/50 transition-colors group"
            >
              <ArrowsPointingOutIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              <span className="text-base sm:text-lg">Ver Plano Detallado</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modal de Plano Extendido */}
      <AnimatePresence>
        {showExtendedPlan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[600] flex items-center justify-center p-2 sm:p-4"
            onClick={() => setShowExtendedPlan(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full h-[90vh] sm:h-[80vh] sm:max-w-5xl bg-neutral-900/50 rounded-2xl border border-neutral-800"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10 flex gap-4">
                <button
                  onClick={handleDownload}
                  className="p-2 sm:p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors group"
                  aria-label="Descargar plano"
                >
                  <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  onClick={() => setShowExtendedPlan(false)}
                  className="p-2 sm:p-3 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                  aria-label="Cerrar vista ampliada"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="h-full p-4 sm:p-8 flex items-center justify-center">
                <div className="relative w-full h-full max-h-full">
                  <Image
                    src={`/unidades/plano_extendido_${selectedUnit.id}.jpg`}
                    alt={`Plano extendido unidad ${selectedUnit.id}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}