import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import de los componetes principales (constantes)
import Menu from "./Components/Menu/Menu.jsx";
import BarraNavegacion from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

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
          <div className=" flex-initial w-56 h-full">
            <Menu />
          </div>
          <div className=" basis-full bg-slate-50">
            <Outlet />
          </div>
        </div>
        <div>
          <Footer />
        </div>
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
