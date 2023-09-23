/* eslint-disable @next/next/no-img-element */
import { dataBD } from "@/data/card-data";

interface Props {
    name: string;
    address: string;
    rating: number;
    opinions: number;
    price: number;
    days: number;
    nameItem: string;
    priceItem: number;
}

export default function CardReservationDetail(props: Props) {
    const {
        name,
        address,
        rating,
        opinions,
        price,
        days,
        nameItem,
        priceItem,
    } = props;


    return (
        <section>
        <section className="rounded-se-xl rounded-ss-xl p-2 bg-secondary gap-3 text-white spc600:p-8">
            <div className="flex mb-3">
                <div className=" py-3 basis-1/2">
                    <h1 className="font-acme text-[20px]">{name}</h1>
                    <p className="font-poppins text-small">{address}</p>
                    <div className="hidden lg:flex font-poppins text-small  gap-3 ">
                        <img src="icons/star-icon.webp" alt="sol icono" className="w-4 h-4" />
                        <p>{rating}</p>
                        <p>{`(${opinions}valoraciones)`}</p>
                    </div>
                </div>
                <div className="basis-1/2 ">
                    <img
                        src="../temporal-images/holder-carpenter.webp"
                        alt="imagen de la carpinteria momentanea"
                        className="bg-cover rounded-[10px] w-full h-full"
                    /></div>
            </div>
            <div className="h-1 w-full bg-primary mb-3"></div>
            <h2 className="font-poppins text-[16px] ">Detalle de la reservación</h2>
            <div className="flex justify-between">
                <p>{`${price} MXN x ${days}`}</p>
                <p>{`$ ${price * days}.00 MXN `} </p>
            </div>
            <h2 className="font-poppins text-[16px]  py-5">Items Adicionales</h2>
            <div className="flex justify-between">
                <div className="flex gap-3">
                <img src="icons/Boton-Eliminar.svg" alt="Boton de eliminar" />
                <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-3">
                <img src="icons/Boton-Eliminar.svg" alt="Boton de eliminar" />
                <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-3">
                <img src="icons/Boton-Eliminar.svg" alt="Boton de eliminar" />
                <p>{`${nameItem} x ${days}`}</p>
                </div>
                <p>{`$ ${priceItem * days}.00 MXN `} </p>
            </div>
            <div className="flex justify-between my-5">
                <p>Comisión Co-Labora</p>
                <p>$ 425.00 MXN </p>
            </div>
        </section>
            <div className="bg-white flex justify-between text-primary border-x-2 border-b-2 border-gray font-poppins text-[20px] rounded-ee-xl rounded-es-xl p-2 spc600:p-8 ">
                <p>Total (MXN) </p>
                <p>$4170.00 MXN</p>
            </div>
        </section>
    )
}