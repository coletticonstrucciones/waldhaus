import Concepto from "@/components/concepto/Concepto";
import PortadaPrincipal from "@/components/portada-principal/PortadaPrincipal";
import Proyecto from "@/components/proyecto/Proyecto";
import Ubicacion from "@/components/ubicacion/Ubicacion";
import Unidades from "@/components/unidades/Unidades";
import Estudio from "@/components/estudio/Estudio";
import Contacto from "@/components/contacto/Contacto";

export default function page() {
  return (
    <main className="overflow-x-hidden">
      <PortadaPrincipal />
      <Concepto />
      <Ubicacion />
      <Proyecto />
      <Unidades />
      <Estudio />
      <Contacto />
    </main>
  )
}
