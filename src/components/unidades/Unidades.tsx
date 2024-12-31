'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { 
  XMarkIcon, 
  ArrowDownTrayIcon, 
  ArrowsPointingOutIcon, 
} from '@heroicons/react/24/outline'

interface UnitData {
  id: string
  type: string
  coveredArea: number
  terraceArea: number
  totalArea: number
  floor: number
  color: string
}

const units: UnitData[] = [
  {
    id: 'A',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 1,
    color: '#4299e1' // blue-500
  },
  {
    id: 'B',
    type: 'Tres ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 2,
    color: '#48bb78' // green-500
  },
  {
    id: 'C',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 3,
    color: '#ed8936' // orange-500
  },
  {
    id: 'D',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 4,
    color: '#9f7aea' // purple-500
  },
  {
    id: 'E',
    type: 'Un ambiente + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 5,
    color: '#f56565' // red-500
  },
  {
    id: 'F',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 6,
    color: '#38b2ac' // teal-500
  },
  {
    id: 'G',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 7,
    color: '#667eea' // indigo-500
  },
  {
    id: 'H',
    type: 'Dos ambientes + terraza',
    coveredArea: 137,
    terraceArea: 84,
    totalArea: 221,
    floor: 8,
    color: '#d69e2e' // yellow-600
  },
]

// Aquí definimos las rutas en <path> para cada floor de ejemplo
const floorPaths: Record<number, string> = {
  1: `M250.72,38.42 L250.72,178.04 L222.2,178.04 L221.98,278.9 L70.49,279.02 L72.13,271.97 L86.85,208.6 L130.24,208.6 L130.4,38.42 L250.72,38.42 Z`,
  2: `M250.71,38.42 L250.71,38.45 L330.7,38.46 L330.7,38.42 L330.7,220.04 L250.71,220.04 Z`,
  3: `M330.69,38.42 L548.64,38.42 L548.64,107.66 L574.68,107.66 L574.68,179.91 L410.78,179.91 L410.78,219.17 L330.69,219.17 L330.69,38.42 Z`,
  4: `M439.04,179.91 L574.68,179.91 L574.68,309.41 L439.04,309.41 Z`,
  5: `M574.69,309.16 L574.69,382.86 L539.24,382.86 L539.24,451.11 L410.59,451.11 L410.62,309.16 L574.69,309.16 Z`,
  6: `M410.59,451.36 L330.7,451.36 L330.7,276.56 L410.62,276.56 L410.62,309.41 L410.59,451.36 Z`,
  7: `M250.71,276.56 L330.69,276.56 L330.69,451.36 L250.71,451.36 Z`,
  8: `M222.09,307.77 L250.71,307.77 L250.71,451.36 L93.01,451.36 L93.01,360.58 L51.54,360.58 L70.49,279.01 L221.98,278.9 L222.09,278.9 L222.09,307.77 Z`
}

export default function Unidades() {
  const [selectedUnit, setSelectedUnit] = useState<UnitData>(units[0])
  const [showExtendedPlan, setShowExtendedPlan] = useState(false)
  const [hoveredFloor, setHoveredFloor] = useState<number | string>('base')
  const [debugMode, setDebugMode] = useState(false)

  // Funciones para moverse entre unidades (arriba/abajo)
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

  // Manejo de teclas (Arriba/Abajo/Escape)
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

  // Modo debug (Alt + D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'd') {
        setDebugMode(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Descarga del plano extendido
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
    <section id="unidades" className="relative min-h-screen bg-black text-white overflow-hidden pt-24 md:pt-0">


      <div className="container mx-auto px-4 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-6xl mx-auto">
          
          {/* ---------------- PLANO PRINCIPAL ---------------- */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[612.98/489.54] rounded-xl sm:rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden group"
            >
              {/* Contenedor principal escalado */}
              <div className="absolute inset-0" style={{ transform: 'scale(0.5)', transformOrigin: 'center center' }}>
                {/* Imagen base que siempre se muestra */}
                <div className="absolute inset-0 pointer-events-none">
                  <Image
                    src="/unidades/WALDHAUS-base.svg"
                    alt="Plano base"
                    fill
                    className="object-contain"
                    style={{
                      filter: 'brightness(1.5) contrast(1.2) invert(1)',
                      opacity: 0.8,
                      transform: 'scale(1.3)', // Mantener la proporción original
                    }}
                    priority
                  />
                </div>

                {/* Imagen que se muestra al hover para resaltar la planta correspondiente */}
                {hoveredFloor !== 'base' && (
                  <div className="absolute inset-0 pointer-events-none">
                    <Image
                      src={`/unidades/WALDHAUS-${hoveredFloor}.svg`}
                      alt={`Plano piso ${hoveredFloor}`}
                      fill
                      className="object-contain mix-blend-screen"
                      style={{
                        filter: 'brightness(2) contrast(1.2) saturate(0) drop-shadow(0 0 2px rgba(255,255,255,0.3))',
                        opacity: 0.4,
                      }}
                      priority
                    />
                  </div>
                )}

                {/* SVG superpuesto con <path> interactivos para cada unidad/piso */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 612.98 489.54"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {[...units]
                    .sort((a, b) => b.floor - a.floor) // Ordenar de arriba hacia abajo
                    .map((unit) => {
                    const pathD = floorPaths[unit.floor]
                    const isSelected = selectedUnit.id === unit.id
                    return (
                      <path
                        key={unit.id}
                        d={pathD}
                        fill={isSelected ? unit.color : 'transparent'}
                        fillOpacity={isSelected ? 0.3 : 0}
                        stroke={isSelected ? unit.color : debugMode ? unit.color : 'transparent'}
                        strokeWidth={isSelected || debugMode ? 2 : 0}
                        onMouseEnter={() => setHoveredFloor(unit.floor)}
                        onMouseLeave={() => setHoveredFloor('base')}
                        onClick={() => {
                          setSelectedUnit(unit)
                        }}
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          color: unit.color,
                        }}
                      />
                    )
                  })}
                </svg>
              </div>
              {/* Botón para ver plano extendido (modal) */}
              <button
                onClick={() => setShowExtendedPlan(true)}
                className="absolute bottom-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors z-20"
                aria-label="Ver plano extendido"
              >
                <ArrowsPointingOutIcon className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* ---------------- INFO DE LA UNIDAD SELECCIONADA ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {/* Plano extendido (visible solo en desktop) */}
            <div className="hidden sm:block bg-neutral-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={`/unidades/plano_extendido_${selectedUnit.id}.jpg`}
                  alt={`Plano extendido unidad ${selectedUnit.id}`}
                  fill
                  className="object-contain p-4"
                  priority
                />
                <button
                  onClick={handleDownload}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
                  aria-label="Descargar plano"
                >
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-4xl mb-2 sm:mb-3">Unidad {selectedUnit.id}</h2>
              <p className="text-lg sm:text-xl text-neutral-400">{selectedUnit.type}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Área Cubierta</p>
                <p className="text-xl sm:text-2xl">{selectedUnit.coveredArea}m²</p>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Terraza</p>
                <p className="text-xl sm:text-2xl">{selectedUnit.terraceArea}m²</p>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                <p className="text-neutral-400 text-sm sm:text-base mb-1 sm:mb-2">Total</p>
                <p className="text-xl sm:text-2xl">{selectedUnit.totalArea}m²</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------------- MODAL DE PLANO EXTENDIDO (solo mobile) ---------------- */}
      <AnimatePresence>
        {showExtendedPlan && (
          <div className="sm:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative w-full max-w-5xl aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/unidades/plano_extendido_${selectedUnit.id}.jpg`}
                  alt={`Plano extendido unidad ${selectedUnit.id}`}
                  fill
                  className="object-contain p-4"
                  priority
                />

                <div className="absolute top-4 right-4 flex gap-2">
                  {/* Botón de descarga */}
                  <button
                    onClick={handleDownload}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
                    aria-label="Descargar plano"
                  >
                    <ArrowDownTrayIcon className="w-5 h-5" />
                  </button>
                  {/* Botón de cierre */}
                  <button
                    onClick={() => setShowExtendedPlan(false)}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
                    aria-label="Cerrar plano extendido"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}