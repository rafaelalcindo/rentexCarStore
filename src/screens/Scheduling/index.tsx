import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';

import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';
import { Button } from '../../components/Button';


export function Scheduling() {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
                <BackButton
                    color={theme.colors.shape}
                    onPress={() => { }}
                />

                <Title>
                    Escolha Uma {'\n'}
                    data de inicio e {'\n'}
                    fim do Aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue selected={false} >
                            15/06/2022
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue selected={false} >
                            15/06/2022
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>


            </Header>

            <Content>

            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                />
            </Footer>
        </Container>
    );
}