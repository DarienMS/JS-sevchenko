
 /* function calcularPagosEnCuotas() {
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
  
  calcularPagosEnCuotas(); */ 





///////////////////////////////////////////////////////////////////////////* Preentrega 2 *///////////////////////////////////////////////////////////
  






  class Producto {
    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  }
  
  const productos = [];
  
  function agregarProducto() {
    const nombre = prompt("Ingrese el nombre del producto");
    const precio = parseFloat(prompt("Ingrese el precio del producto"));
    const stock = parseInt(prompt("Ingrese la cantidad del producto"));
  
    if (isNaN(precio) || isNaN(stock)) {
      console.log("Error: El precio y el stock deben ser valores validos");
      return;
    }
  
    const producto = new Producto(nombre, precio, stock);
    productos.push(producto);
    console.log("Producto agregado");
  }
  
  function eliminarProducto() {
    const nombre = prompt("Ingrese el nombre del producto que desea eliminar");
    const index = productos.findIndex(producto => producto.nombre === nombre);
  
    if (index !== -1) {
      productos.splice(index, 1);
      console.log("Producto eliminado exitosamente");
    } else {
      console.log("Error: No se encontró un producto con ese nombre");
    }
  }
  
  function buscarProducto() {
    const nombre = prompt("Ingrese el nombre del producto que desea buscar");
    const producto = productos.find(producto => producto.nombre === nombre);
  
    if (producto) {
      console.log("Producto encontrado");
      console.log(producto);
    } else {
      console.log("Error: No se encontro un producto con ese nombre");
    }
  }
  
  
  
 
  agregarProducto();
  agregarProducto();
  agregarProducto();
  console.log(productos);
  
  eliminarProducto();
  console.log(productos);
  
  buscarProducto();
  
 