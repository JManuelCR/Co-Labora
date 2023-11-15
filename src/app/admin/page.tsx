import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { reservations } from "@/data/reservations";

export default function admin() {
  return (
    <>
      <Navbar page="admin" />
      <section className="text-blue_800">
        <section className="flex flex-col bg-primary py-14 px-4">
          <div className="text-center text-white">
            <p className=" font-poppins text-sections font-bold leading-7 ">
              Bienvenido usuario administrador
            </p>
            <p className=" font-poppins text-[16px] leading-4 mt-6 ">
              Manejo y administración de las cuentas de usuario
            </p>
          </div>
        </section>
        <p className="text-blue_800 font-poppins text-suTitles text-center px-4 py-4">
          Lista de usuarios arrendadores e inmuebles
        </p>
        <section className="my-6 mx-4 spc600:mx-12 lg:mx-20 xl:mx-96">
          <table className="w-full">
            <thead>
              <th className="border border-solid border-secondary p-3 hidden md:table-cell">
                #
              </th>
              <th className="border border-solid border-secondary p-3">
                Arrendador
              </th>
              <th className="border border-solid border-secondary p-3">
                ID Usuario
              </th>
              <th className="hidden md:table-cell border border-solid border-secondary p-3">
                Fecha de Registro
              </th>
              <th className="border border-solid border-secondary p-3">
                Nombre del inmueble
              </th>
              <th className="hidden md:table-cell border border-solid border-secondary p-3">
                Archivos
              </th>
              <th className="hidden md:table-cell border border-solid border-secondary p-3">
                Ver mas
              </th>
            </thead>
            <tbody className="font-semibold text-start">
              {reservations.map((reservation, index) => (
                <tr key={index}>
                  <td className="border border-solid border-secondary p-3 hidden md:table-cell">
                    {index}
                  </td>
                  <td className="border border-solid border-secondary p-3">
                    {reservation.name}
                  </td>
                  <td className="border border-solid border-secondary p-3">
                    {index}
                  </td>
                  <td className="border border-solid border-secondary p-3 hidden md:table-cell">
                    {reservation.start_date}
                  </td>
                  <td className="border border-solid border-secondary p-3 ">
                    {reservation.name}
                  </td>
                  <td className="border border-solid border-secondary p-3 hidden md:table-cell">
                    {reservation.rating}
                  </td>
                  <td className="border border-solid border-secondary  hidden md:table-cell">
                    <button className="bg-primary rounded-lg px-3 py-1 text-white">
                      Ver mas
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-blue_800 font-poppins text-suTitles text-center px-4 py-4">
            Información del usuario
          </p>
          <p className="font-poppins text-[16px] leading-4 px-4 text-center">
            Información proporcionada por el usuario
          </p>
          <div className="flex gap-5 my-8 justify-center">
            <button className="border-2 border-primary rounded-lg w-[200px] h-10">
              <p className="font-poppins text-light">Rechazar</p>
            </button>
            <button className="bg-primary rounded-lg w-[200px] h-10">
              <p className="font-poppins text-light text-white">Aceptar</p>
            </button>
          </div>
          <section className="md:my-10">
            <div className="flex flex-col md:flex-row justify-center md:justify-start w-full">
              <div className="flex justify-center md:justify-start md:mx-5">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--l1HNuEDK--/c_imagga_scale,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/53570/2cb42370-2fcf-4f63-90fb-8b5a41aae9ee.jpg"
                  alt="User Image"
                  className="rounded-full h-20 w-20"
                />
              </div>
              <div className="flex justify-center text-center md:justify-start flex-col  gap-3">
                <p className="font-poppins text-[16px] leading-4 text-center md:text-start my-5 md:my-0">
                  Leandro Molina
                </p>
                <p className="font-poppins text-[16px] leading-4 px-4 md:px-0 text-center md:text-start">
                  Hola yo soy pablo y pongo en renta mi tapicería para que
                  puedas trabajar
                </p>
              </div>
            </div>
          </section>
          <section className="my-10 lg:mx-40 font-semibold">
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">
                Nombre completo
              </p>
              <input
                type="text"
                placeholder="Pablo López Ramírez"
                className="  w-full rounded-lg focus:outline-0 p-2"
              />
            </div>
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">Email</p>
              <input
                type="text"
                placeholder="pablo@gmail.com"
                className="  w-full rounded-lg focus:outline-0 p-2"
              />
            </div>
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">
                Número Telefónico
              </p>
              <input
                type="text"
                placeholder="(+52 1) 55 2646 7686"
                className="  w-full rounded-lg focus:outline-0 p-2"
              />
            </div>
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">
                Tipo de Inmueble
              </p>
              <input
                type="text"
                placeholder="Tapicería"
                className="  w-full rounded-lg focus:outline-0 p-2"
              />
            </div>
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">
                Localización del Inmueble
              </p>
              <input
                type="text"
                placeholder="Av. de la palam 35,Col.Nueva Santa María"
                className="  w-full rounded-lg focus:outline-0 p-2"
              />
            </div>
            <div>
              <p className="font-poppins text-[16px] leading-4 my-2 ">
                Descripción del Inmueble
              </p>
              <textarea
                placeholder="Mi tapicería cuenta con contactos  para conectar los taladros las herramientas y esta ubicada en un lugar cercano a servicios de transporte y tambien a tienditas donde puedes comprar un snack o algo de tomar"
                className="  w-full rounded-lg focus:outline-0 p-2 h-56 "
              />
            </div>
          </section>
          <p className="text-blue_800 font-poppins text-suTitles text-center px-4 py-4">
            Imagenes del Lugar
          </p>
          <section className="flex flex-wrap gap-x-2 gap-y-5 justify-center md:mx-40">
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
            <div>
              <img
                src="../temporal-images/holder-carpenter.webp"
                alt="imagen de la carpinteria momentanea"
                className="bg-cover rounded-2xl w-40 h-26"
              />
            </div>
          </section>
          <p className="text-blue_800 font-poppins text-suTitles text-center px-4 py-4">
            Documentación del usuario
          </p>
          <p className="font-poppins text-[16px] leading-4 px-4 text-center mb-10">
            Ver los archivos compartidos por el usuario
          </p>
          <section className="flex flex-wrap gap-x-2 gap-y-5 justify-center">
            <div>
              <div className="bg-gray rounded-t w-40 h-26 flex justify-center align-middle py-20">
                <p className="font-poppins text-small">Product Image</p>
              </div>
              <p className="font-poppins text-text">Image.pdf</p>
            </div>
            <div>
              <div className="bg-gray rounded-t w-40 h-26 flex justify-center align-middle py-20">
                <p className="font-poppins text-small">Product Image</p>
              </div>
              <p className="font-poppins text-text">Image.pdf</p>
            </div>
            <div>
              <div className="bg-gray rounded-t w-40 h-26 flex justify-center align-middle py-20">
                <p className="font-poppins text-small">Product Image</p>
              </div>
              <p className="font-poppins text-text">Image.pdf</p>
            </div>
          </section>
          <p className="text-blue_800 font-poppins text-suTitles text-center px-4 py-4 my-10">
            Contacta al usuario para una aclaración
          </p>
          <div className="lg:mx-40">
            <p className="font-poppins text-[16px] leading-4 my-2 ">
              Redacta el contenido del mensaje al usuario:
            </p>
            <textarea
              placeholder="Redacta el mensaje aca ..."
              className="border-2 border-primary w-full rounded-lg focus:outline-0 p-2"
            />
          </div>
          <div className="flex justify-center my-8">
            <button className=" bg-primary rounded-lg w-[200px] h-10">
              <p className="font-poppins text-light text-white">Enviar</p>
            </button>
          </div>
        </section>
      </section>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
