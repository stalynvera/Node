
import Categoria from '../componentes/Categoria'
import Tarjeta from '../componentes/Tarjeta'
import Link from "next/link"
const Inicio = () => {
    return (
        <div>
            <Categoria/>
            <Tarjeta/>
            <Link href="/Categorias/SubCategorias">
                Ir a SubCategorias
            </Link>
        </div>
    )
}
export default Inicio




