import { Bairro, Cidade, Container, ContainerCidadeUf, Rua, UF } from "./styled";

export function ResultLabel() {
    return (
        <Container>
            <Rua
                editable={false}
                placeholder="Rua"
                value={() => { }} />
            <Bairro
                editable={false}
                placeholder="Bairro"
                value={() => { }} />
            <ContainerCidadeUf>
                <Cidade
                    editable={false}
                    placeholder="Cidade"
                    value={() => { }} />
                <UF
                    editable={false}
                    placeholder="UF"
                    value={() => { }} />
            </ContainerCidadeUf>
        </Container>
    )
}