import Tarjeta2 from "../componentes/Tarjeta2"
import Link from "next/link"

const Productos = () => {
    return (
        <div>
            Estamos en la ruta de productos
            <Tarjeta2 />
            <Link href="/Productos/SubProducto">
                Ir a SubProductos
            </Link>
        </div>
    )
}

export default Productos
