import { Validador } from '../utils/Validador';
import { ErroValidacao } from './ErroValidacao';
import { Id } from './Id'
import { ObjetoDeValor } from './ObjetoDeValor';

export interface EntidadeProps {
    id?: string
}

export abstract class Entidade<Tipo, Props extends EntidadeProps> {
    readonly id: Id;
    readonly props: Props
    protected erros: ErroValidacao[] = []

    constructor(props: Props) {
        this.id = new Id(props.id)
        this.props = { ...props, id: this.id.valor }
    }

    protected validar(): void {
        const erros = Object.values(this).filter(prop => prop instanceof ObjetoDeValor).flatMap((obj: ObjetoDeValor) => obj.erros);
        if (erros.length > 0) {
            let objeto = erros[0].objeto!
            throw this.transformarErros({ objeto, erros });
        }
    }

    equals(entidade: Entidade<Tipo, Props>): boolean {
        return this.id.equals(entidade.id)
    }

    clone(novasProps: Props, ...args: any[]): Tipo {
        return new (this.constructor as any)(
            { ...this.props, ...novasProps },
            ...args
        )
    }

    private transformarErros(objetoErro: { objeto: string, erros: any[] }) {
        const errosAgrupados: Record<string, any[]> = {};

        objetoErro.erros.forEach(erro => {
            const atributo = erro.atributo;

            if (!errosAgrupados[atributo]) {
                errosAgrupados[atributo] = [];
            }

            errosAgrupados[atributo].push({
                ...erro,
                objeto: undefined,
                atributo: undefined,
            });
        });

        return {
            objeto: objetoErro.objeto,
            erros: errosAgrupados
        };
    }
}