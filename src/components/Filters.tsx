export default function Filters() {
  return (
    <article className="flex flex-col ">
      <section className="border border-solid border-b-blue_800">
        <p>Filters</p>
        <div>
          <button>Reset</button>
          <button className="font-bold">X</button>
        </div>
      </section>
      <section className="border border-solid border-b-blue_800">
        <h4>Rango de precios</h4>
        <div>Aqui va el slider de precios</div>
        <div>
          <input type="number" placeholder="Minimo" className="text-start">
            $
          </input>
          <input type="number" placeholder="Maximo" className="text-start">
            $
          </input>
        </div>
      </section>
      <section></section>
      <section></section>
    </article>
  );
}
