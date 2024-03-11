import theme from "@theme/index";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;

    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 20px;
`;

export const TextInputLabel = styled(TextInput)`
    width: 200px;
    padding: 15px;

    border-radius: 20px;
    text-align: center;

    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GREY};
`;

export const SearchButton = styled.TouchableOpacity`
    width: 100px;
    padding: 15px;

    border-radius: 20px;

    align-items: center;
    justify-content: center;

    background-color: ${theme.COLORS.BLACK};
`;

export const SearchButtonText = styled.Text`
    color: ${theme.COLORS.YELLOW};
`;