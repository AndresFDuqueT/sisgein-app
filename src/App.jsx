import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import de los componetes principales (constantes)
//import Menu from "./Components/Menu/Menu.jsx";
import BarraNavegacion from "./Components/Navbar/Navbar.jsx";

// import de las pag a utilizar
import InfoProveedores from "./Pages/InfoProveedores/InfoProveedores.jsx";
import Inventario from "./Pages/Inventario/Inventario.jsx";
import Login from "./Pages/Login/Login.jsx";
import Producto from "./Pages/Producto/Producto.jsx";
import Proveedores from "./Pages/Proveedores/Proveedores.jsx";

import "./App.css";

function App() {
  // layout para la aplicacion
  const Layout = () => {
    return (
      <div className="flex flex-col ">
        <div>
          <BarraNavegacion />
        </div>
        <div className="flex flex-row">
          <div className=" basis-1/6">sidebar</div>
          <div className=" basis-5/6">
            Main <Outlet />
          </div>
        </div>
        <div>footer</div>
      </div>
    );
  };

  // React Router Redireccionamiento de pag
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/infoProveedores",
          element: <InfoProveedores />,
        },
        {
          path: "/inventario",
          element: <Inventario />,
        },
        {
          path: "/producto",
          element: <Producto />,
        },
        {
          path: "/proveedores",
          element: <Proveedores />,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
