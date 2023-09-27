"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import Image from "next/image";
import uploadFile from "../../../public/icons/upload-files.svg";

export default function ImageUpload() {
  const onDrop = useCallback((acceptedFiles: any) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
<div className="flex justify-center mt-[10px]">
<div className="flex flex-col items-center w-[335px] h-auto  md:w-[750px] lg:w-[900px] md:h-[1008px] border-2 border-secondary rounded-[26px]">
      <h1 className="font-acme text-blue_800 text-[24px] md:text-[40px] font-normal leading-[36px] tracking-[-0.8px] block h-[28px] mt-[17px]">Adjunta fotos del lugar</h1>
      <h2 className="font-poppins text-blue_800 leading-[36px] tracking-[-0.46px] block">(8min)</h2>
      <Dropzone onDrop={(acceptedImages) => console.log(acceptedImages)}>
        {({ getRootProps, getInputProps }) => (
          <section className="w-[300px] md:w-[700px] h-[140px] md:h-[340px] bg-secondary rounded-[20px]">
            <div
              className="w-full h-full flex flex-col justify-center items-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Image
                src={uploadFile}
                alt="Upload file icon"
                className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
              />
              <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                Sube tus imagenes
              </div>
              <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                o anexa tus archivo aquí
              </p>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="w-[335px] md:w-[700px] gap-[15px] md:gap-[44px] flex flex-col md:flex-row mt-[27px]">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="font-acme text-blue_800 text-[24px] md:text-[32px] text-center font-normal leading-[24px] md:leading-[36px] tracking-[-0.48] md:tracking-[-0.8px] md:block w-[230px] md:w-[235px] mb-4">Sube un comprobante de domicilio</h3>
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="w-[300px] md:w-[328px] h-[140px] md:h-[340px] bg-secondary rounded-[20px]">
                <div
                  className="w-full h-full flex flex-col justify-center items-center md:mt-6"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <Image
                    src={uploadFile}
                    alt="Upload file icon"
                    className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
                  />
                  <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                    Sube tus imagenes
                  </div>
                  <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                    o anexa tus archivo aquí
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h3 className="font-acme text-blue_800 text-[24px] md:text-[32px] text-center font-normal leading-[36px] tracking-[-0.8px] block w-[235px]">Sube una imagen de tu INE</h3>
          <h4 className="font-acme text-blue_800 text-4 text-center font-normal leading-[36px] tracking-[-0.8px] bm-[10px] md:mb-[24px] mt-[-8px]">( pasaporte o carta de naturalización )</h4>
          <h4></h4>
          <Dropzone onDrop={(acceptedDNI) => console.log(acceptedDNI)}>
            {({ getRootProps, getInputProps }) => (
              <section className="w-[300px] md:w-[328px] h-[140px] md:h-[340px] bg-secondary rounded-[20px] mb-[12px] md:mb-0">
                <div
                  className="w-full h-full flex flex-col justify-center items-center md:mt-6"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  <Image
                    src={uploadFile}
                    alt="Upload file icon"
                    className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
                  />
                  <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                    Sube tus imagenes
                  </div>
                  <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                    o anexa tus archivo aquí
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
      </div>
    </div>
</div>
  );
}
