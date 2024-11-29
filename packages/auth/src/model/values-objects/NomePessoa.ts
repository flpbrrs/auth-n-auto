import {
    isNaoNulo,
    isNaoVazio,
    temTamanhoMaiorOuIgualA,
    Validador,
    ObjetoDeValor
} from '@authnauto/shared';

export class NomePessoa extends ObjetoDeValor {
    constructor(readonly completo?: string, atributo?: string, objeto?: string) {
        super()
        this.completo = completo?.trim() || ''

        this.erros = Validador.combine(
            Validador.validar(this.completo, atributo, objeto)
                .validarSe(isNaoNulo)
                .validarSe(isNaoVazio)
                .validarSe(temTamanhoMaiorOuIgualA, 4),
            Validador.validar(this.completo.split(' ')[1], atributo, objeto)
                .validarSe(isNaoVazio, "O usuário deve possuir pelo menos um sobrenome")
        ) || []
    }

    get nome() {
        return this.completo!.split(" ")[0]
    }

    get reduzido() {
        return this.completo!.split(" ").slice(0, 2).join(" ");
    }

    get sobrenomes(): string[] {
        return this.completo!.split(" ").slice(1)
    }
}