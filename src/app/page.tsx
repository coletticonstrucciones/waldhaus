import Concepto from "@/components/concepto/Concepto";
import PortadaPrincipal from "@/components/portada-principal/PortadaPrincipal";
import Ubicacion from "@/components/ubicacion/Ubicacion";

export default function page() {
  return (
    <main>
      <PortadaPrincipal />
      <Concepto />
      <Ubicacion />
    </main>
  )
}
