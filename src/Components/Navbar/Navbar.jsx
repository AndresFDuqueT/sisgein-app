const BarraNavegacion = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center  bg-gray-50 py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700  lg:py-4">
      <div className="flex w-full flex-wrap items-center gap-3 px-3">
        <div>
          <a
            className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src="./src/assets/LOGO.svg"
              style={{ height: "20px" }}
              alt="TE Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div className="ml-5 flex flex-row-reverse w-[30%] items-center">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700  focus:outline-none motion-reduce:transition-none "
            placeholder="Buscar producto o proveedor"
            aria-label="Search"
            aria-describedby="button-addon2"
          />

          {/* Search icon */}
          <span className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700">
            <img
              src="./src/assets/icons/buscar.svg"
              alt=""
              className="h-6 w-6"
            />
          </span>
        </div>
      </div>
    </nav>
  );
};
export default BarraNavegacion;
