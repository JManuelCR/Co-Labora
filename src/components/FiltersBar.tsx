import Image from "next/image";
import Search from "../../public/icons/search.svg";
import FilterIcn from "../../public/icons/adjustments.svg";
import map from "../../public/icons/map.svg";
export default function FiltersBar() {
  return (
    <article className="flex justify-around my-5">
      <section className="flex items-center gap-5">
        <div className="flex h-fit  border-solid border-2 border-primary rounded-xl p-2 foc">
          <input
            type="text"
            placeholder="Encuentra un espacio..."
            className="border-none focus:outline-none text-blue_800"
          />
          <Image src={Search} alt="search icon" width={24} height={24} />
        </div>
        <button
          type="button"
          className="bg-primary text-white font-poppins px-10 py-2 rounded-xl">
          Buscar
        </button>
      </section>
      <section className="flex gap-10">
        <button
          type="button"
          className="bg-primary text-white font-poppins px-10 py-2 flex items-center rounded-xl gap-3">
          Filter
          <Image src={FilterIcn} alt="filter button" width={32} height={32} />
        </button>
        <button>
          <Image src={map} alt="map icon" width={50} height={50} />
        </button>
      </section>
    </article>
  );
}
