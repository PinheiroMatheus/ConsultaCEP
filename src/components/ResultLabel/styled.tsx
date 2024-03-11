import theme from "@theme/index";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin-top: 80px;

    align-items: center;
    justify-content: center;

    gap: 20px;
`;

export const Rua = styled(TextInput)`
    width: 325px;
    padding: 15px;

    border-radius: 20px;
    text-align: center;
    
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GREY};
`;

export const Bairro = styled(TextInput)`
    width: 325px;
    padding: 15px;

    border-radius: 20px;
    text-align: center;

    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GREY};
`;

export const ContainerCidadeUf = styled.View`
    flex-direction: row;
    gap: 20px
`;

export const Cidade = styled(TextInput)`
    width: 240px;
    padding: 15px;

    border-radius: 20px;
    text-align: center;

    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GREY};
`;

export const UF = styled(TextInput)`
    width: 65px;
    padding: 15px;

    border-radius: 20px;
    text-align: center;

    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GREY};
`;