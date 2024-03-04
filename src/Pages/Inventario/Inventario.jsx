import { useState } from "react";
import DataTableInv from "../../Components/dataTableInv/DataTableInv";
import Modal from "../../Components/Modal/Modal.jsx";
import data from "../../data.js";

const Inventario = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" grid-cols-1 grid-rows-6">
      <div className="col-span-1 row-span-2 bg-white rounded-md border-gray-200 m-5 p-5">
        <h1 className="text-center text-4xl font-semibold m-5">
          Datos Generales del Inventario
        </h1>
        <div className=" flex flex-row m-1 gap-1 ">
          <div className="flex-1 flex-col ">
            <h4 className="text-center text-3xl font-semibold">Registro</h4>
            <table className="table-fixed w-fit">
              <thead>
                <tr>
                  <th className="text-center text-xl">Ultimos 7 dias</th>
                  <th className="text-center text-xl">Sesion Actual</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-xl">1156 unidades</td>
                  <td className="text-center text-xl">113 unidades</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 flex-col ">
            <h4 className="text-center text-3xl font-semibold">Almacen</h4>
            <table className="table-fixed w-fit">
              <thead>
                <tr>
                  <th className="text-center text-xl">Bodega</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-xl">
                    02 Principal - Pereira Centro
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 flex-col">
            <h4 className="text-center text-3xl font-semibold">Stock</h4>
            <table className="table-fixed w-fit">
              <thead>
                <tr>
                  <th className="text-center text-xl">Pocas Unidades</th>
                  <th className="text-center text-xl">Fuera de Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-xl">72 items</td>
                  <td className="text-center text-xl ">12 items</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-2 bg-white rounded-md border-gray-200 m-5 p-5 h-full">
        <div className="flex flex-row m-5 justify-between">
          <h3 className="text-5xl font-medium">Inventario</h3>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setOpen(true)}
          >
            Agregar Item
          </button>
        </div>
        <DataTableInv data={data} />
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className=" w-2/4">
          <div className="mx-auto my-4 w-96">
            <h3 className="text-lg text-center font-black text-gray-800">
              Creacion de Nuevo Item
            </h3>
            <div className="flex flex-row gap-1 justify-center ">
              <h5 className="text-lg font-semibold">Almacen:</h5>
              <h6 className="text-lg font-medium"> La Principal</h6>
            </div>
            <div className="flex flex-row gap-1 justify-center ">
              <h5 className="text-lg font-semibold">Item ID:</h5>
              <h6 className="text-lg font-medium"> 10153</h6>
            </div>

            {/* Form Basica para la creaion de un item nuevo */}
            <form className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
              <label className="block mb-2">
                Nombre del Producto:
                <input
                  type="text"
                  name="productName"
                  placeholder="Por favor introducir el nombre del producto"
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>

              <label className="block mb-2">
                Cantidad:
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>

              <label className="block mb-2">
                Editorial:
                <input
                  type="text"
                  name="editorial"
                  placeholder="Por favor introducir el nombre de la editorial"
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>

              <label className="block mb-2">
                Proveedor:
                <input
                  type="text"
                  name="provider"
                  placeholder="Por favor introducir el nombre del proveedor "
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>

              <label className="block mb-2">
                Géneros:
                <input
                  type="text"
                  name="genres"
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>

              <label className="block mb-2">
                Idioma:
                <input
                  type="text"
                  name="language"
                  placeholder="Por favor intrucir los idiomas del libro"
                  className="w-full px-2 py-1 border rounded-md"
                />
              </label>
            </form>
          </div>
          <div className="flex justify-end gap-4">
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Crear
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Inventario;
