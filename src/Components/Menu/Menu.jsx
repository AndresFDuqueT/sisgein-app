import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className=" bg-gray-50 p-4  flex flex-col gap-96 h-full">
      <div className="gap-5 " id="Superior">
        <Link to="/inventario" className="flex flex-row items-center gap-1">
          <img
            src="./src/assets/icons/inventario.svg"
            alt=""
            className="h-4 w-4"
          />
          <span className="">
            <h4 className="text-2xl">Inventario</h4>
          </span>
        </Link>
        <Link to="/proveedores" className="flex flex-row items-center gap-1">
          <img
            src="./src/assets/icons/Proveedor.svg"
            alt=""
            className="h-4 w-4"
          />
          <span className="">
            <h4 className="text-2xl">Proveedores</h4>
          </span>
        </Link>
      </div>
      <div id="inferior">
        <Link to="/Login" className="flex flex-row items-center gap-1">
          <img src="./src/assets/icons/logout.svg" alt="" className="h-5 w-5" />
          <span className="">
            <h4 className="text-xl">Cerrar Sesion</h4>
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
