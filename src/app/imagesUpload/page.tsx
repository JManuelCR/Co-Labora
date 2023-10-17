"use client";
import React, {
  useCallback,
  createRef,
  useState,
  SetStateAction,
  useEffect,
} from "react";
import { useDropzone } from "react-dropzone";
import Dropzone from "react-dropzone";
import Image from "next/image";
import uploadFile from "../../../public/icons/upload-files.svg";
import { user } from "@nextui-org/react";

export default function ImageUpload({ props }: any) {
  const onDrop = useCallback((acceptedFiles: any) => {}, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [images, setImages] = useState<any>();
  const [files, setFiles] = useState<any>();
  const [identification, setIdentification] = useState<any>();

  const submit = ():any => {
    const toUpload = {
      images: images,
      documents: files,
      dni:identification
    };
    props(toUpload);
  }

  const PropertyImages = (images: any) => {
    setImages(images);
  };
  const PropertyFiles = (images: any) => {
    setFiles(images);
  };
  const UserDNI = (images: any) => {
    setIdentification(images);
  };
  const clearPropertyImages = () => {
    return setImages(undefined);
  };
  const clearPropertyFiles = () => {
    return setFiles(undefined);
  };
  const clearUserDNI = () => {
    return setIdentification(undefined);
  };

  //   Dropzone.options.myDropzone = {
  //   url: "https://your-bucket-name.s3.amazonaws.com/",
  //   paramName: "file",
  //   maxFilesize: 10, // MB
  //   createImageThumbnails: false,
  //   headers: {
  //     "x-amz-acl": "public-read"
  //   },
  //   init: function() {
  //     this.on("sending", function(file, xhr, formData) {
  //       formData.append("key", "uploads/" + file.name);
  //       formData.append("Content-Type", file.type);
  //     });
  //   }
  // };

  return (
    <div className="flex justify-center mt-[10px]">
      <div className="flex flex-col items-center w-[335px] h-auto  md:w-[750px] lg:w-[900px] pb-8 border-2 border-secondary rounded-[26px]">
        <h1 className="font-acme text-blue_800 text-[24px] md:text-[40px] font-normal leading-[36px] tracking-[-0.8px] block h-[28px] mt-[17px]">
          Adjunta fotos del lugar
        </h1>
        <h2 className="font-poppins text-blue_800 leading-[36px] tracking-[-0.46px] block">
          (8min)
        </h2>
        <Dropzone onDrop={(acceptedImages) => PropertyImages(acceptedImages)}>
          {({ getRootProps, getInputProps }) => (
            <section className="w-[300px] md:w-[700px] h-[140px] md:h-[340px] bg-secondary rounded-[20px]">
              <div
                className="w-full h-full flex flex-col justify-center items-center"
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                {images === undefined ? (
                  <>
                    <Image
                      src={uploadFile}
                      alt="Upload file icon"
                      className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
                    />
                    <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                      Sube tus imágenes
                    </div>
                    <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                      o anexa tus archivo aquí
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-primary font-acme stroke-[-0.48px] leading-[48px] font-semibold text-2xl ">
                      Imágenes seleccionadas:
                    </p>
                    <ul>
                      {images.map((img: any, index: Number) => {
                        return (
                          <li
                            key={`img-${index}`}
                            className="text-white font-semibold text-lg "
                          >
                            {img.path}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
              </div>
            </section>
          )}
        </Dropzone>
        {images !== undefined ? (
          <button
            onClick={clearPropertyImages}
            className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]"
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
        <div className="w-[335px] md:w-[700px] gap-[15px] md:gap-[44px] flex flex-col md:flex-row mt-[27px]">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h3 className="font-acme text-blue_800 text-[24px] md:text-[32px] text-center font-normal leading-[24px] md:leading-[36px] tracking-[-0.48] md:tracking-[-0.8px] md:block w-[230px] md:w-[235px] mb-4">
              Sube un comprobante de domicilio
            </h3>
            <Dropzone onDrop={(acceptedFiles) => PropertyFiles(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section className="w-[300px] md:w-[328px] h-[140px] md:h-[340px] bg-secondary rounded-[20px] px-8">
                  <div
                    className="w-full h-full flex flex-col justify-center items-center md:mt-6"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {files === undefined ? (
                  <>
                    <Image
                      src={uploadFile}
                      alt="Upload file icon"
                      className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
                    />
                    <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                      Sube tus imágenes
                    </div>
                    <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                      o anexa tus archivo aquí
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-primary font-acme stroke-[-0.48px] leading-[48px] font-semibold text-2xl ">
                      Imágenes seleccionadas:
                    </p>
                    <ul className="w-full">
                      {files.map((img: any, index: Number) => {
                        return (
                          <li
                            key={`img-${index}`}
                            className="text-white font-semibold text-lg break-words"
                          >
                            {img.path}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                  </div>
                </section>
              )}
            </Dropzone>
            {files !== undefined ? (
          <button
            onClick={clearPropertyFiles}
            className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]"
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h3 className="font-acme text-blue_800 text-[24px] md:text-[32px] text-center font-normal leading-[36px] tracking-[-0.8px] block w-[235px]">
              Sube una imagen de tu INE
            </h3>
            <h4 className="font-acme text-blue_800 text-4 text-center font-normal leading-[36px] tracking-[-0.8px] bm-[10px] md:mb-[24px] mt-[-8px]">
              ( pasaporte o carta de naturalización )
            </h4>
            <h4></h4>
            <Dropzone onDrop={(acceptedDNI) => UserDNI(acceptedDNI)}>
              {({ getRootProps, getInputProps }) => (
                <section className="w-[300px] md:w-[328px] h-[140px] md:h-[340px] bg-secondary rounded-[20px] mb-[12px] md:mb-0 px-8">
                  <div
                    className="w-full h-full flex flex-col justify-center items-center md:mt-6"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    {identification === undefined ? (
                  <>
                    <Image
                      src={uploadFile}
                      alt="Upload file icon"
                      className="w-[48px] h-[37px] md:w-[94px] md:h-[75px] stroke-2"
                    />
                    <div className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]">
                      Sube tus imágenes
                    </div>
                    <p className="hidden md:block text-white font-poppins font-light text-[14px] tracking-[0.28px] leading-[22px]">
                      o anexa tus archivo aquí
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-primary font-acme stroke-[-0.48px] leading-[48px] font-semibold text-2xl ">
                      Identificación seleccionada:
                    </p>
                    <ul className="w-full">
                      {identification.map((img: any, index: Number) => {
                        return (
                          <li
                            key={`img-${index}`}
                            className="text-white font-semibold text-lg break-words"
                          >
                            {img.path}
                          </li>
                        );
                      })}
                    </ul>
                  </>
                )}
                  </div>
                </section>
              )}
            </Dropzone>
            {identification !== undefined ? (
          <button
            onClick={clearUserDNI}
            className="text-white text-[14px] font-semibold leading-[22px] tracking-[-0.28px] rounded-md bg-primary flex justify-center items-center w-[140px] md:w-[170px] h-[40px] mt-[19px] md:mt-[30px]"
          >
            Cancelar
          </button>
        ) : (
          <></>
        )}
          </div>
        </div>
      </div>
      <button className="bg-transparent" onClick={submit()} id="upload-images"></button>
    </div>
  );
}
