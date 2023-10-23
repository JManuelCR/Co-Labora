"client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UserInput() {
  const [desc, setDesc] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const [header, payload, signature] = token.split(".");
      const decodedPayload = JSON.parse(atob(payload));
      const id = decodedPayload.id;
      fetch(`http://localhost:8080/users/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("Esta es la respuesta del getUser", response);
          if (response.data) {
            setDesc(response.data);
          }
        })
        .catch((error) => {
          alert(`${error} error al hacer el fetch`);
          // Aquí puedes manejar el error de la manera que desees
        });
    }
  }, []);

  const onSubmit = (data: any) => {
    // if (data.userDesc) {
    //   fetch(`http://localhost:8080/users/`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: JSON.stringify({
    //       id: id,
    //       description: data.userDesc,
    //     }),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((response) => {
    //       console.log("esta es la respuesta al patch", response);
    //     });
    // }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <section className="mx-[29px] my-[42px] lg:mx-[180px] xl:mx-[350px] lg:my-24 items-center md:mx-36">
        <h1 className="font-poppins text-suTitles text-blue_700 font-bold text-center">
          Permite a Juan conocer mas de ti
        </h1>
        <p className="font-poppins text-small text-blue_700 mt-[34px] mb-[30px] ">
          Danos una breve reseña de ti y del trabajo que desempeñas
        </p>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            id="reseña"
            className="border-2 accent-primary border-primary rounded-[10px] focus:outline-0 focus:border-primary required p-4 mb-[30px] placeholder:font-roboto placeholder:text-small placeholder:text-blue_300 w-full text-black"
            placeholder="Redacta el mensaje aca ..."
            {...register("userDesc", {
              required: "Este campo es obligatorio",
              minLength: 10,
            })}
            value={desc}></textarea>
          <input type="text" />
          <p className="font-poppins text-small text-blue_700 mb-[30px]">
            Porque elegiste el inmueble de Juan, cuéntanos que fue lo que te
            gusto
          </p>
          <textarea
            id="inmueble"
            className="border-2 accent-primary border-primary rounded-[10px] focus:outline-0 focus:border-primary required p-4 mb-[30px] placeholder:font-roboto placeholder:text-small placeholder:text-blue_300 w-full text-black"
            placeholder="Redacta el mensaje aca ..."
            {...register("property", {
              required: "Este campo es obligatorio",
              minLength: 10,
            })}></textarea>
          <div className="border-2 border-primary rounded-[10px] w-full">
            <p className="font-poppins text-small text-blue_500 p-[19px] ">
              Por que te pedimos esta información? Es importante para los
              usuarios que ponen en renta sus espacios conocer un poco mas sobre
              ti y tu profesión para poderte brindar el mejor servicio.
            </p>
            {/* <p className="font-poppins text-small text-[#280AE5] p-[19px] text-center ">
              Conoce más ....
            </p> */}
          </div>
          {/* <Link href={"/"}>
            <div className="flex justify-center"></div>
          </Link> */}
          <button type="submit" id="submit-description"></button>
        </form>
      </section>
    </>
  );
}
