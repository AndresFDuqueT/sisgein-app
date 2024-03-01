import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DataTableInv = ({ data }) => {
  return (
    <div>
      <table className=" table-auto min-w-full text-left text-2xl font-light ">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th className="text-3xl font-semibold ">ID</th>
            <th className="text-3xl font-semibold">Nombre</th>
            <th className="text-3xl font-semibold">Autor</th>
            <th className="text-3xl font-semibold">Editorial</th>
            <th className="text-3xl font-semibold">Proveedor</th>
            <th className="text-3xl font-semibold">En Bodega</th>
            <th className="text-3xl font-semibold">Total Inventario</th>
            <th className="text-3xl font-semibold">Acceder</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-gray-500 dark:hover:bg-gray-200 "
              key={item.id}
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {item.id}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{item.nombre}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.autor}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.editorial}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.proveedor}</td>
              <td className="whitespace-nowrap px-6 py-4">{item.enBodega}</td>
              <td className="whitespace-nowrap px-6 py-4">
                {item.totalInventario}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <Link to="/producto">
                  <img
                    src="./src/assets/icons/config.svg"
                    alt=""
                    className="h-5 w-5 items-center"
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="list-style-none flex">
          <li>
            <a
              class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              1
            </a>
          </li>
          <li aria-current="page">
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// props

DataTableInv.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      autor: PropTypes.string.isRequired,
      editorial: PropTypes.string.isRequired,
      proveedor: PropTypes.string.isRequired,
      enBodega: PropTypes.number.isRequired,
      totalInventario: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default DataTableInv;
