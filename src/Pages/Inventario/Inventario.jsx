import DataTableInv from "../../Components/dataTableInv/DataTableInv";
import data from "../../data.js";

const Inventario = () => {
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
        <DataTableInv data={data} />
      </div>
    </div>
  );
};
export default Inventario;
