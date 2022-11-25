import React from "react";
import Container from "../components/Container";
import Local from "../components/Local";

function Locales() {
  const cupones = [
    {
      name: "Indumentaria",
      local: "pepito",
      direccion: "corrientes 202 - Rosario",
      img: "https://www.digitalsport.com.ar/files/products/60269fb65288b-548763-500x500.jpg",
      descripcion: "15% todos los martes",
      pdf: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    },
    {
      name: "Indumentaria",
      local: "pepito",
      direccion: "corrientes 202 - Rosario",
      img: "https://www.digitalsport.com.ar/files/products/60269fb65288b-548763-500x500.jpg",
      descripcion: "15% todos los martes",
      pdf: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    },
    {
      name: "Indumentaria",
      local: "pepito",
      direccion: "corrientes 202 - Rosario",
      img: "https://www.digitalsport.com.ar/files/products/60269fb65288b-548763-500x500.jpg",
      descripcion: "15% todos los martes",
      pdf: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    },
    {
      name: "Indumentaria",
      local: "pepito",
      direccion: "corrientes 202 - Rosario",
      img: "https://www.digitalsport.com.ar/files/products/60269fb65288b-548763-500x500.jpg",
      descripcion: "15% todos los martes",
      pdf: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    },
    {
      name: "Indumentaria",
      local: "pepito",
      direccion: "corrientes 202 - Rosario",
      img: "https://www.digitalsport.com.ar/files/products/60269fb65288b-548763-500x500.jpg",
      descripcion: "15% todos los martes",
      pdf: "http://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
    },
  ];

  return (
    <Container>
      {cupones.map((e, i) => {
        return <Local key={i} props={e} />;
      })}
    </Container>
  );
}

export default Locales;
