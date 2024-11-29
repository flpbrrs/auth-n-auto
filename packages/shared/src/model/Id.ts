import { v4 as uuid } from "uuid"
import { Validador } from "../utils/Validador";
import { isIdValido, isNaoVazio } from "../utils/validadores";

export class Id {
    readonly valor: string

    constructor(valor?: string, atributo?: string, objeto?: string) {
        this.valor = valor ?? uuid()

        Validador.validar(this.valor, atributo, objeto)
            .validarSe(isNaoVazio, "O Id fornecido não pode ser vazio")
            .validarSe(isIdValido, "O Id fornececido não é válido")
            .lancarSeErro()
    }

    static get generate(): Id {
        return new Id();
    }

    equals(id: Id): boolean {
        return this.valor === id.valor;
    }
}