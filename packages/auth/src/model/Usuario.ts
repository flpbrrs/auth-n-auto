import { Entidade, EntidadeProps, ErroValidacao } from "@authnauto/shared"
import { Email, NomePessoa } from './values-objects'

export interface UsuarioProps extends EntidadeProps {
    nome?: string,
    email?: string
}

export class Usuario extends Entidade<Usuario, UsuarioProps> {
    readonly nome!: NomePessoa
    readonly email!: Email

    constructor(props: UsuarioProps) {
        super(props)
        this.nome = new NomePessoa(props.nome, "nome", "Usuário")
        this.email = new Email(props.email!, "email", "Usuário")
        this.validar()
    }
}