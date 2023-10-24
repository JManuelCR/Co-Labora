'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from 'react';
export default function Detail() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };
  return (
    <>
    </>
  );
}
