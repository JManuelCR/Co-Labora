 const Pagination = () => {
   

    return (
        <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
        <div className=" flex flex-1 items-center justify-between">
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-blue_800 ring-1 ring-inset ring-secondary hover:bg-third focus:z-20 focus:outline-offset-0"
              >
                <span>Previous</span>
                
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center border-2 border-primary px-4 py-2 text-sm font-semibold text-blue_800 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-blue_800 ring-1 ring-inset ring-secondary hover:bg-third focus:z-20 focus:outline-offset-0"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-blue_800 ring-1 ring-inset ring-secondary hover:bg-third focus:z-20 focus:outline-offset-0 md:inline-flex"
              >
                3
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-blue_800 ring-1 ring-inset ring-secondary hover:bg-third focus:z-20 focus:outline-offset-0"
              >
                <span>Next</span>
                
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
}

export default Pagination;