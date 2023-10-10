const rootElement = document.getElementById("root");
let rootElementInnerHTML = "";
let recordTotal = 0;
let recordAcumulative = 0;

function getNestedRecordsExample() {
  return [
    {
      id: 1,
      nombre: "Camila Lopez",
      detalles: {
        descripcion: "matricula normal",
        contacto: {
          email: "clopez@mail.com",
          telefono: 83242834,
        },
        valorMatricula: 200000,
      },
    },
    {
      id: 2,
      nombre: "Pedro Perez",
      detalles: {
        descripcion: "beca",
        contacto: {
          email: "pperez@mail.com",
          telefono: 83242834,
        },
        valorMatricula: 0,
      },
    },
    {
      id: 3,
      nombre: "Juan Yarce",
      detalles: {
        descripcion: "matricula normal",
        contacto: {
          value: "jyarce@mail.com",
          telefono: 1122334455,
        },
        valorMatricula: 400000,
      },
    },
    {
      id: 4,
      nombre: "Alberto Benitez",
      detalles: {
        descripcion: "matricula condicional",
        contacto: {
          value: "abenitez@mail.com",
          telefono: 234534566,
        },
        valorMatricula: 600000,
      },
    },
  ];
}

getNestedRecordsExample().map((object, index) => {
  recordTotal++;
  recordAcumulative += object.detalles.valorMatricula || 0;
});

rootElementInnerHTML += `<p><b>Total de matrículas:</b> ${recordTotal}</p><p><b>Valor acumulativo de matrículas:</b> ${recordAcumulative}</p>`;
rootElement.innerHTML = rootElementInnerHTML;
