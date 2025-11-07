let subtotal = 0;
let descuentoAplicado = 0;
let envio = 0;
let cuponUsado = false;
let opcion = 0;

while (opcion !== 5) {
  console.log("\n=== Simulador de checkout ===");
  console.log("1. Agregar producto ($50.000)");
  console.log("2. Aplicar cupon de descuento");
  console.log("3. Calcular costo de envio");
  console.log("4. Calcular Total a pagar");
  console.log("5. Salir");

  opcion = Number(prompt("Seleccione una opción: "));

  if (opcion === 1) {
    subtotal = subtptal + 50000;
    console.log("producto agregado. Subtotal actual: $" + subtotal);

  } else if (opcion === 2) {
    if (subtotal === 0) {
      console.log("Debe agregar productos antes de aplicar un cupon.");
    } else if (cuponUsado === true) {
      console.log("Ya aplico un cupon no puede aplicar otro.");
    } else {
      let codigoCupon = prompt("Ingrese el codigo del cupon (DTO10 o DTO20): ");
      if (codigoCupon === "DTO10") {
        descuentoAplicado = subtotal * 0.10;
        subtotal = subtotal - descuentoAplicado;
        cuponUsado = true;
        console.log("Cupon aplicado Descuento del 10% nuevo subtotal: $" + subtotal);
      } else if (codigoCupon === "DTO20") {
        descuentoAplicado = subtotal * 0.20;
        subtotal = subtotal - descuentoAplicado;
        cuponUsado = true;
        console.log("Cupon aplicado descuento del 20% Nuevo subtotal: $" + subtotal);
      } else {
        console.log("Cupon no valido.");
      }
    }

  } else if (opcion === 3) {
    if (subtotal === 0) {
      console.log("Debe agregar productos antes de calcular el envio");
    } else {
      if (subtotal < 100000) {
        envio = 15000;
        console.log("Costo de envio: $15.000");
      } else {
        envio = 0;
        console.log("Envio gratis.");
      }
    }

  } else if (opcion === 4) {
    if (subtotal === 0) {
      console.log("Debe agregar productos antes de calcular el total.");
    } else if (envio === 0 && subtotal < 100000) {
      console.log("Debe calcular el costo de envío antes de ver el total.");
    } else {
      let totalPagar = subtotal + envio;
      console.log("\n=== RESUMEN DE COMPRA ===");
      console.log("Subtotal: $" + (subtotal).toFixed(0));
      console.log("Descuento aplicado: $" + descuentoAplicado.toFixed(0));
      console.log("Costo de envío: $" + envio.toFixed(0));
      console.log("TOTAL A PAGAR: $" + totalPagar.toFixed(0));
    }

  } else if (opcion === 5) {
    console.log("Gracias por comprar en Tienda Web. ¡Hasta pronto!");
  } else {
    console.log("Opción inválida. Intente nuevamente.");
  }
}
