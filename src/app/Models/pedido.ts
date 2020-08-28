import { Usuario } from './usuario';

export class Pedido {
    idPedido : number;
    fechapedido : string;
    estadopedido : string = "D";
    idUsuario : Usuario;
}
