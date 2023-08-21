
export default function Advantages(){
    return(
        <main className="bg-white md:h-[452px] w-full flex flex-col md:p-14 gap-14">
          <div className="flex justify-center">  
            <h1 className="text-4xl font-[acme]">¿Porqué Co-labora?</h1>
          </div>
          <section className="flex gap-5 text-center">
            <div className="flex flex-col items-center p-3 basis-1/4">
                <img src="@/pages/assets/spaceship-icon.webp" alt="Icono Cohete"  className="h-28 w-28"/>
                <h2 className="text-4xl font-[acme] text-primary">Experiencias únicas</h2>
                <p className="text-lg font-[poppins] text-blue_800">Cada vez que rentes estas abriendo la ventana a una experiencia nueva</p>
            </div>
            <div className="flex flex-col items-center p-3 basis-1/4">
                <img src="@/pages/assets/Icon-Money.svg" alt="Icono bolsa con dinero"  className="h-28 w-28"/>
                <h2 className="text-4xl font-[acme] text-primary">Adaptado a ti</h2>
                <p className="text-lg font-[poppins] text-blue_800">Renta el lugar que cumpla con lo que necesitas</p>
            </div>
            <div className="flex flex-col items-center p-3 basis-1/4">
                <img src="@/pages/assets/Icon-Users.svg" alt="Icono Usuarios"  className="h-28 w-28"/>
                <h2 className="text-4xl font-[acme] text-primary">Te conectamos</h2>
                <p className="text-lg font-[poppins] text-blue_800">Conoce nuevas personas cada día</p>
            </div>
            <div className="flex flex-col items-center p-3 basis-1/4">
                <img src="@/pages/assets/Icon-Compass.svg" alt="Icono Compass"  className="h-28 w-28"/>
                <h2 className="text-4xl font-[acme] text-primary">Explora</h2>
                <p className="text-lg font-[poppins] text-blue_800">Nuevo día nuevas oportunidades de viajar con tu trabajo por la ciudad</p>
            </div>
            
          </section>
        </main>
    )
}