import { login } from "./feature/login";
import { mostrarMesasDisponibles } from "./feature/table-list";
console.log("===== SISTEMA DE RESERVAS v1.0.0 =====");
const acceso = login("ana@example.com", "1234");
if (acceso) {
console.log("Acceso concedido ");
mostrarMesasDisponibles();
} else {
console.log("Acceso denegado ");
}
export function procesarReserva(cliente: string, total: number): string {
 console.log(`Procesando reserva para ${cliente}.`);
 let descuento = 0;
 let puntosGanados = Math.floor(total / 10);

 if (cliente === "Juan Pérez") {
 descuento = total * 0.1;
 total -= descuento;
 console.log(` Descuento aplicado de ${descuento.toFixed(2)} €`);
 }
 
 console.log(`Total a pagar: ${total} €`);
 console.log(` El cliente ${cliente} ha ganado ${puntosGanados} puntos.`);
 return "Reserva completada correctamente con puntos de recompensa y con descuento.";

}