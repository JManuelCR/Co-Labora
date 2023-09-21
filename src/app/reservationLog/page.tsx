/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Navbar from "@/components/Navbar"
import FooterMobile from "@/components/FooterMobile"
import Footer from "@/components/Footer"
import React, {useState} from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { dataBD } from "@/data/card-data";
import Pagination from "@/components/Pagination";

export default function ReservationLog() {
    

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(dataBD.length / rowsPerPage);
    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return dataBD.slice(start, end);
    }, [page, dataBD]);

   

    return (
        <>
            <Navbar page="ReservationLog" />
            <section className="sm:my-28">
                <article className="my-[52px] mx-[22px]">
                    <h1 className="font-acme text-titles text-blue_700  mb-[52px] lg:mb-40 text-center ">Tus Reservaciones</h1>
                   
                    <Table aria-label="Example table with client side pagination" className="xsm:border-2 xsm:border-secondary rounded-xl lg:py-20 "
                        bottomContent={
                            <div className="flex w-full justify-center text-center p-5">
                             <Pagination />


                            </div>
                        }
                        classNames={{
                            wrapper: "min-h-[222px]",
                        }}
                    >
                        <TableHeader>
                            <TableColumn key="name" className=" xsm:bg-third  font-poppins text-suTitles text-blue_800 w-1/3">Titulo</TableColumn>
                            <TableColumn key="size" className=" font-poppins text-suTitles text-blue_800 xsm:bg-secondary">Fecha</TableColumn>
                            <TableColumn key="price" className=" font-poppins text-suTitles text-blue_800 xsm:bg-third">Costo</TableColumn>
                        </TableHeader>
                        <TableBody items={items}>
                            {(item) => (
                                <TableRow key={item.name} className="xsm:border-b-2 xsm:border-secondary text-center font-poppins text-suTitles text-blue_800">
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                   
                </article>
            </section>
            <section className="md:hidden mt-[30px] " >
                <FooterMobile />
            </section>
            <section className="windowXl2 hidden md:block md:mt-[230px] lg:mt-[285px]">
                <Footer />
            </section>
        </>
    )
}
