import { Container, SearchButton, SearchButtonText, TextInputLabel } from "./styled";

export function SearchLabel() {
    return (
        <Container>
            <TextInputLabel placeholder="Digite o CEP"/>
            <SearchButton>
                <SearchButtonText>Buscar</SearchButtonText>
            </SearchButton>
        </Container>
    )
}