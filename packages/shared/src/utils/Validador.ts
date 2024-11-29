import { ErroValidacao } from '../model/ErroValidacao';

export class Validador {
    private constructor(
        readonly valor: any,
        readonly atributo: string | null,
        readonly objeto: string | null,
        readonly erros: ErroValidacao[] = []
    ) { }

    static validar(valor: any, atributo?: string, objeto?: string): Validador {
        return new Validador(valor, atributo ?? null, objeto || null);
    }

    static combine(...validadores: Validador[]): ErroValidacao[] | null {
        const errosFiltrados = validadores
            .flatMap(v => v.erros)
            .filter(e => e !== null) as ErroValidacao[]

        return errosFiltrados.length > 0 ? errosFiltrados : null
    }

    validarSe<T>(callback: (valor: any, ...extras: T[]) => string | ErroValidacao | null, ...extras: T[]): Validador {
        const erro = callback(this.valor, ...extras);
        return erro === null
            ? this
            : this.adicionarErro(erro);
    }

    lancarSeErro(): void | never {
        if (!this.erros.length) return;
        throw this.erros;
    }

    private erroJaExiste(erro: ErroValidacao): boolean {
        return this.erros
            .some(e => Object.keys(e).every(key => e[key] === erro[key]))
    }

    private adicionarErro(codigoErro: string | ErroValidacao): Validador {
        const erroBase = typeof codigoErro === 'string'
            ? { codigo: codigoErro }
            : codigoErro;

        const erro = {
            ...erroBase,
            atributo: this.atributo ?? undefined,
            objeto: this.objeto ?? undefined
        }

        if (this.erroJaExiste(erro)) return this;
        const novoValidador = new Validador(
            this.valor,
            this.atributo,
            this.objeto,
            [...this.erros, erro]
        );

        return novoValidador;
    }

    get isValido(): boolean {
        return this.erros.length === 0;
    }

    get isInvalido(): boolean {
        return !this.isValido;
    }
}