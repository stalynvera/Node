import Link from "next/link"

const Navbar = () => {
     return (
         <div>
           <Link href="/Categorias">
           Categorias
           </Link>
           <Link href="/SubCategoria">
           Productos
           </Link>
         </div>
    )
    
};
export default Navbar;

