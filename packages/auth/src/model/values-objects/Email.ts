import { isNaoNulo, isNaoVazio, ObjetoDeValor, Validador } from "@authnauto/shared"
import { isEmailValido } from "../../utils/validadores/isEmailValido"

export class Email extends ObjetoDeValor {
    constructor(readonly valor: string, atributo?: string, objeto?: string) {
        super()
        this.valor = valor?.trim() ?? ""

        this.erros = Validador.combine(
            Validador.validar(this.valor, atributo, objeto)
                .validarSe(isNaoNulo)
                .validarSe(isNaoVazio, "E-mail é um campo obrigatório")
                .validarSe(isEmailValido)
        ) || []
    }

    get usuario(): string {
        return this.valor!.split("@")[0]!
    }

    get dominio(): string {
        return this.valor!.split("@")[1]!
    }
}