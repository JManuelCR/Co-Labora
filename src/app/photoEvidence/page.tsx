"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/FooterMobile";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";
export default function PhotoEvidence() {
  const uploader = Uploader({ apiKey: "public_kW15bgi7zXRxZE5fEHnY5mtm5m7y" });
  const uploaderOptions = {
    multi: true,
    showFinishButton: true,
    styles: {
      colors: {
        primary: "#A54729",
      },
    },
  };
  return (
    <>
      <Navbar page="evidence" />
      <article className="flex flex-col border border-solid border-primary rounded-xl p-10 items-center h-[100%] m-14 max-md:flex-wrap max-md:p-2 max-md:m-3 ">
        <section className="">
          <h1 className="font-acme text-titles text-blue_800 max-sm:text-titleMobil ">
            Adjunta fotos del lugar
          </h1>
          <p className="font-poppins font-light text-blue_800">(8 min)</p>
          <div className="w-full">
            <UploadDropzone
              uploader={uploader}
              options={uploaderOptions}
              onUpdate={(files) =>
                console.log(files.map((x) => x.fileUrl).join("\n"))
              }
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
              width="600px"
              height="375px"
            />
          </div>
        </section>
        <section className="flex flex-row gap-24 max-md:flex-wrap">
          <div className="flex flex-col">
            <h3 className="font-acme text-blue_800 text-titleMobil text-center max-sm:text-titleMobil">
              Sube un comprobante de domicilio
            </h3>
            <UploadDropzone
              uploader={uploader}
              options={uploaderOptions}
              onUpdate={(files) =>
                console.log(files.map((x) => x.fileUrl).join("\n"))
              }
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
              width="600px"
              height="375px"
            />
          </div>
          <div>
            <h3 className="font-acme text-blue_800 text-titleMobil text-center max-sm:text-titleMobil">
              Sube una imagen de tu INE
            </h3>
            <p className="font-acme text-text text-blue_800 text-center">
              ( pasaporte o carta de naturalizacion )
            </p>
            <UploadDropzone
              uploader={uploader}
              options={uploaderOptions}
              onUpdate={(files) =>
                console.log(files.map((x) => x.fileUrl).join("\n"))
              }
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
              width="600px"
              height="375px"
            />
          </div>
        </section>
        <button className="bg-primary text-white font-poppins rounded-xl px-4 py-1">
          Siguiente
        </button>
      </article>
      <footer className="hidden md:block ">
        <Footer />
      </footer>
      <footer className="block md:hidden ">
        <FooterMobile />
      </footer>
    </>
  );
}
