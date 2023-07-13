
function calcularPagosEnCuotas() {
    let continuar = true
  
    while (continuar) {
      
      let montoTotal = parseFloat(prompt("Ingrese el monto total a pagar:"))
      let numeroCuotas = parseInt(prompt("Ingrese el número de cuotas:"))
  
     
      if (isNaN(montoTotal) || isNaN(numeroCuotas)) {
        alert("Debe ingresar valores numéricos válidos")
      } else {
        
        if ((numeroCuotas <= 0) || (montoTotal <= 0)) {
          alert("El número de cuotas o monto debe ser mayor que cero")
        } else {
          const montoCuota = montoTotal / numeroCuotas;
  
          alert("Monto total: $" + montoTotal + " " + "Cuotas: " + numeroCuotas + " " + "Monto por cuota: $" + montoCuota)
        }
      }
  
      let opcion = prompt("Desea realizar otro cálculo? (S/N)").toUpperCase()
      continuar = (opcion === "S")
    }
  }
  
  calcularPagosEnCuotas();