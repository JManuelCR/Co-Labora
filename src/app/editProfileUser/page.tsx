/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"
import { useRef, useState } from "react";

export default function EditProfile() {
    const [images, setImages] = useState<any>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    function selectFiles(){
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }

    function onFileSelect(event: any) {
        const files = event.target.files;
        if(files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0]!== 'image') continue;
            if(!images.some((e: any)=> e.name === files[i].name)) {
                setImages((prevImages: any) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function deleteImage(index: any){
        setImages((prevImages: any) => 
            prevImages.filter((_: any, i: any)=> i !== index)
        );
    }

    function onDragOver(event: any){
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event: any){
        event.preventDefault();
        setIsDragging(false);
    }

    function onDrop(event: any){
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            if(files[i].type.split('/')[0]!== 'image') continue;
            if(!images.some((e: any)=> e.name === files[i].name)) {
                setImages((prevImages: any) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }
    return (
        <>
            <Navbar page="login" />
            <section className="mx-[23px] my-[66px] md:my-0 lg:mx-52 xl:mx-28">
                <div className="md:mt-[209px] xl:mx-96">
                    <h1 className=" font-acme text-titles text-blue_700 text-center mb-[38px] ">Personaliza tu perfil</h1>
                    <form className="flex flex-col items-center justify-center gap-7">
                        <article
                            className={`${isDragging ? "border-2 border-primary" : "border-2 border-primary"
                                }  p-4 w-full rounded-[20px]  min-h-[10rem] text-center flex flex-col items-center justify-center`}
                        
                            onDrop={onDrop}
                            onDragLeave={onDragLeave}
                            onDragOver={onDragOver}
                        >
                            <input
                                placeholder="fileInput"
                                className="hidden"
                                ref={fileInputRef}
                                type="file"
                                multiple={true}
                                onChange={onFileSelect}
                                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                            />
                            <div className="flex  gap-5">
                                <div className="flex flex-col basis-1/2 justify-center">
                                    <div className="flex justify-center">
                                        <img src="icons/cloud-upload-icon.webp" alt="Cloud upload" className="w-20 h-20" />
                                    </div>
                                    <span
                                        className=" cursor-pointer"
                                        role="button"
                                        onClick={selectFiles}
                                    >
                                        <u className="font-poppins text-[16px] text-blue_800 no-underline">Selecciona una foto de perfil</u>
                                    </span>{" "}
                                </div>
                                <div className="basis-1/2 flex flex-wrap">
                                {images.map((images: any, index: any) => (
                                    <div key={index} className="flex flex-col space-x-5">
                                        <span
                                            className="text-primary font-bold cursor-pointer gap-3"
                                            onClick={() => deleteImage(index)}
                                        >
                                            remove
                                        </span>
                                 <img src={images.url} alt={images.name} className="spc600:h-60 spc600:w-40 h-32 w-20 rounded-lg" />
                                    </div>
                                ))}
                                </div>
                            </div>
                        </article>
                        <textarea name="userName" id="userName" className="w-full placeholder:font-poppins placeholder:text-[16px] h-20 md:h-full placeholder:text-blue_700 border-2 border-primary rounded-md my-[26px] mx-[17px] placeholder:text-center placeholder:pt-2 pl-4 pt-4 focus:outline-0 focus:border-primary" placeholder="Cambia tu nombre de usuario"></textarea>
                        <textarea name="description" id="description" className="w-full  placeholder:font-poppins placeholder:text-[16px] h-40 md:h-full placeholder:text-blue_700 border-2 border-primary rounded-md mb-12 mx-[17px] placeholder:text-center placeholder:pt-2 p-6 focus:outline-0 focus:border-primary" placeholder="Agrega una descripción sobre ti y tu profesión..."></textarea>
                        <div className="mb-[90px] flex justify-center ">
                            <button className="bg-primary rounded-lg w-[200px] h-11">
                                <p className="font-poppins text-[16px] text-white">Guardar Cambios</p>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="md:hidden mt-[25px] " >
                <FooterMobile />
            </section>
            <section className="windowXl2 hidden md:block md:mt-[270px] lg:mt-[235px]">
                <Footer />
            </section>
        </>
    )
}