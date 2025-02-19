/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import {
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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

// Mapping de unidades a PDFs (solo para descarga)
const unitToPdfMap: Record<string, string> = {
  'A': 'PLANTILLA DPTO 2 DOMITORIOS B.pdf',
  'B': 'PLANTILLA DPTO LOFT.pdf',
  'C': 'PLANTILLA DPTO 2 DOMITORIOS C.pdf',
  'D': 'PLANTILLA DPTO 1 DOMITORIO B.pdf',
  'E': 'PLANTILLA DPTO 1 DOMITORIO A.pdf',
  'F': 'PLANTILLA DPTO LOFT.pdf',
  'G': 'PLANTILLA DPTO LOFT.pdf',
  'H': 'PLANTILLA DPTO 2 DOMITORIOS A.pdf',
}

// Mapping de unidades a imágenes webp (para visualización)
const unitToImageMap: Record<string, string> = {
  'A': 'PLANTILLA DPTO 2 DOMITORIOS B.webp',
  'B': 'PLANTILLA DPTO LOFT.webp',
  'C': 'PLANTILLA DPTO 2 DOMITORIOS C.webp',
  'D': 'PLANTILLA DPTO 1 DOMITORIO B.webp',
  'E': 'PLANTILLA DPTO 1 DOMITORIO A.webp',
  'F': 'PLANTILLA DPTO LOFT.webp',
  'G': 'PLANTILLA DPTO LOFT.webp',
  'H': 'PLANTILLA DPTO 2 DOMITORIOS A.webp',
}

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
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Funciones para moverse entre unidades (arriba/abajo)
  const handleNextUnit = () => {
    const currentIndex = units.findIndex((u) => u.id === selectedUnit.id)
    const nextIndex = (currentIndex + 1) % units.length
    setSelectedUnit(units[nextIndex])
  }

  const handlePrevUnit = () => {
    const currentIndex = units.findIndex((u) => u.id === selectedUnit.id)
    const prevIndex = (currentIndex - 1 + units.length) % units.length
    setSelectedUnit(units[prevIndex])
  }

  // Función para descargar el PDF
  const handleDownload = () => {
    const pdfUrl = `/unidades/${unitToPdfMap[selectedUnit.id]}`
    window.open(pdfUrl, '_blank')
  }

  // Función para manejar el click en una unidad
  const handleUnitClick = (unit: UnitData) => {
    setSelectedUnit(unit)
    setIsModalOpen(true)
    console.log('Modal should open', { unit, isModalOpen: true }) // Debug log
  }

  useEffect(() => {
    console.log('Modal state changed:', isModalOpen) // Debug log
  }, [isModalOpen])

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
  }, [handleNextUnit, handlePrevUnit, selectedUnit, showExtendedPlan])

  // Modo debug (Alt + D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'd') {
        setDebugMode((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      id="unidades"
      className="relative lg:min-h-screen bg-black text-white overflow-hidden pt-24 md:pt-0"
    >
      <h2
        className="text-base sm:text-xl md:text-3xl uppercase tracking-[.3em] sm:tracking-[.4em] md:tracking-[.5em] mb-4 sm:mb-6 md:mb-8 text-center pt-16 sm:pt-20 md:pt-28"
        style={{
          fontFamily: "'Helvetica Now', sans-serif",
          color: "#FFFFFF",
        }}
      >
        UNIDADES
      </h2>

      {/* Contenedor principal: alineado al centro y al fondo (bottom) */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* ---------------- PLANO PRINCIPAL (SVG) ---------------- */}
        <div className="relative flex items-center justify-center w-full max-w-[780px] lg:scale-[1.15] scale-[1.4] mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[612.98/489.54] group"
          >
            {/* Efecto de glow */}
            <div 
              className="absolute inset-0 blur-[2px] opacity-50"
              style={{ 
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)',
                transform: 'scale(1.5)',
              }}
            />
            
            {/* Contenedor principal escalado */}
            <div className="absolute inset-0" style={{ transform: 'scale(0.585)', transformOrigin: 'center center' }}>
              {/* Imagen base que siempre se muestra */}
              <div className="absolute inset-0 pointer-events-none">
                <Image
                  src="/unidades/WALDHAUS-base.svg"
                  alt="Plano base"
                  fill
                  className="object-contain"
                  style={{
                    // filter: 'brightness(1.2) contrast(1.2) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.3))',
                    opacity: 1,
                    transform: 'scale(1.3)',
                  }}
                  priority
                />
              </div>

              {/* Imagen que se muestra al hover */}
              {hoveredFloor !== 'base' && (
                <div className="absolute inset-0">
                  <Image
                    src={`/unidades/WALDHAUS-${hoveredFloor}.svg`}
                    alt={`Plano piso ${hoveredFloor}`}
                    fill
                    className="object-contain"
                    style={{
                      // filter: 'brightness(1.2) contrast(1.2) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.3))',
                      opacity: 1,
                      mixBlendMode: 'normal',
                    }}
                    priority
                  />
                </div>
              )}

              {/* SVG interactivo */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 612.98 489.54"
                preserveAspectRatio="xMidYMid meet"
              >
                {[...units]
                  .sort((a, b) => b.floor - a.floor)
                  .map((unit) => {
                    const pathD = floorPaths[unit.floor]
                    const isSelected = selectedUnit.id === unit.id
                    const isHovered = hoveredFloor === unit.floor
                    return (
                      <path
                        key={unit.id}
                        d={pathD}
                        fill={isSelected || isHovered ? unit.color : 'rgba(255,255,255,0.1)'}
                        fillOpacity={isSelected || isHovered ? 0.4 : 0.1}
                        stroke={
                          isSelected || isHovered || debugMode
                            ? unit.color
                            : 'rgba(255,255,255,0.3)'
                        }
                        strokeWidth={
                          isSelected || isHovered || debugMode
                            ? 2
                            : 1
                        }
                        onMouseEnter={() => setHoveredFloor(unit.floor)}
                        onMouseLeave={() => setHoveredFloor('base')}
                        onClick={() => handleUnitClick(unit)}
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          color: unit.color,
                        }}
                      />
                    )
                  })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---------------- MODAL DE PLANO EXTENDIDO ---------------- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-transparent rounded-lg overflow-hidden"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 border-4 border-neutral-600 border-t-white rounded-full animate-spin"></div>
                </div>
              )}
              <div className="relative aspect-[662/468]">
                <Image
                  src={`/unidades/${unitToImageMap[selectedUnit.id]}`}
                  alt={`Plano unidad ${selectedUnit.id}`}
                  width={662}
                  height={468}
                  className={`w-full h-full object-contain transition-opacity duration-300 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                  onLoadStart={() => setIsLoading(true)}
                  priority
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDownload()
                  }}
                  className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white rounded-full p-2.5 transition-all duration-300 backdrop-blur-sm group"
                  aria-label="Descargar plano"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
