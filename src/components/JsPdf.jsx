//usaremos una libreria de js llamada jsPDF para la creacion de documentos pdf
import { jsPDF } from "jspdf";
import 'jspdf-autotable'
const JsPdf = () => {
  //creamos un objrto para recorrer datos de prueba
  const data = {
    id: 123,
    nombre: "nombre",
    edad: 23,
    precio: 1000,
    no_factura: 12,
    cantidad: 2,
    total: 1300,
  };

  const downloadFacture = () => {
    const doc = new jsPDF();

    // doc.text(`Name: ${data.nombre}`, 10, 20);
    // doc.text(`Age: ${data.edad}`, 10, 30);
    // doc.text(`Price: ${data.precio}`, 10, 40);
    // doc.text(`No.Facture: ${data.no_factura}`, 10, 50);
    // doc.text(`Count: ${data.cantidad}`, 10, 60);
    // doc.text(`Total: ${data.total}`, 10, 70);
    doc.text('Factura', 95, 10);

    //creamos una tabla para acomidar los datos
    const colums = ["Name", "Age", "Price", "No_Facture", "Count", "Total"];

    const getData = [
      [
        `${data.nombre}`,
        `${data.edad}`,
        `${data.precio}`,
        `${data.no_factura}`,
        `${data.cantidad}`,
        `${data.total}`,
      ],
    ];

    //generamos la tabla
    doc.autoTable({
        startY: 20,
        head: [ colums ],
        body: getData 
    })

    //guardamos el archivo
    doc.save(`Facture_${data.id}.pdf`);
  };

  return (
    <div>
      <button onClick={downloadFacture}>Download</button>
    </div>
  );
};

export default JsPdf;
