/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"
import { useRef, useState } from "react";

export default function editProfile() {
    const [dragActive, setDragActive] = useState<boolean>(false);
    const inputRef = useRef<any>(null);
    const [files, setFiles] = useState<any>([]);

    function handleChange(e: any) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < e.target.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.target.files[i]]);
            }
        }
    }

    function handleSubmitFile(e: any) {
        if (files.length === 0) {
            // no file has been submitted
        } else {
            // write submit logic here
        }
    }
    function handleDrop(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
                setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
            }
        }
    }
    function handleDragLeave(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }
    function handleDragOver(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }
    function handleDragEnter(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }
    function removeFile(fileName: any, idx: any) {
        const newArr = [...files];
        newArr.splice(idx, 1);
        setFiles([]);
        setFiles(newArr);
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }


    return (
        <>
            <Navbar page="login" />
            <section className="mx-[23px] my-[66px] md:my-0 xl:mx-0">
                <div className="md:mt-[209px] xl:mx-96">
                    <h1 className=" font-acme text-titles text-blue_700 text-center mb-[38px] ">Personaliza tu perfil</h1>
                    <form className="flex flex-col items-center justify-center">
                        <article
                            className={`${dragActive ? "border-2 border-primary" : "border-2 border-primary"
                                }  p-4 w-full rounded-[20px]  min-h-[10rem] text-center flex flex-col items-center justify-center`}
                            onDragEnter={handleDragEnter}
                            onSubmit={(e) => e.preventDefault()}
                            onDrop={handleDrop}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                        >
                            <input
                                placeholder="fileInput"
                                className="hidden"
                                ref={inputRef}
                                type="file"
                                multiple={true}
                                onChange={handleChange}
                                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                            />
                            <div className="flex flex-col justify-center gap-3">
                                <div className="flex justify-center">
                                    <img src="icons/cloud-upload-icon.webp" alt="Cloud upload" className="w-20 h-20" />
                                </div>
                                <span
                                    className=" cursor-pointer"
                                    onClick={openFileExplorer}
                                >
                                    <u className="font-poppins text-[16px] text-blue_800 no-underline">Selecciona una foto de perfil</u>
                                </span>{" "}
                            </div>
                            <div className="flex flex-col items-center p-3">
                                {files.map((file: any, idx: any) => (
                                    <div key={idx} className="flex flex-row space-x-5">
                                        <span>{file.name}</span>
                                        <span
                                            className="text-primary font-bold cursor-pointer"
                                            onClick={() => removeFile(file.name, idx)}
                                        >
                                            remove
                                        </span>
                                    </div>
                                ))}
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