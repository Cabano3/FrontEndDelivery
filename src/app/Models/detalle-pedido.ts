import { Pedido } from './pedido';
import { Producto } from './producto';

export class DetallePedido {
    idDetPedido : number;
    cantidad : number;
    recargaentrega : number;
    iva : number = 0.12;
    subtotal : number;
    total : number;
    idProducto : Producto;
    idPedido : Pedido;
}
