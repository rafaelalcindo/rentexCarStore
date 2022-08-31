import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import {
    Calendar,
    DayProps,
    generateInterval,
    MarkedDateProps
} from '../../components/Calendar';



export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);

    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirm() {
        const namePage = 'SchedulingDetails' as never;
        navigation.navigate(namePage);
    }

    function handleBack() {
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps) {

        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        // console.log('Start date: ', start);
        // console.log('End date: ', end);

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);
    }

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
                    onPress={handleBack}
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
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    );
}