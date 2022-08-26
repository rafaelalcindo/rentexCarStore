import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImage,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,

    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';



export function SchedulingDetails() {

    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmScreen() {
        const namePage = 'SchedulingComplete' as never;
        navigation.navigate(namePage);
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImage >
                <ImageSlider imageUrl={['https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png']} />
            </CarImage>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborgini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580,00</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Acessory name='380Km/h' icon={SpeedSvg} />
                    <Acessory name='3.2s' icon={AccelerationSvg} />
                    <Acessory name='800 HP' icon={ForceSvg} />
                    <Acessory name='Gasoline' icon={GasolineSvg} />
                    <Acessory name='Auto' icon={ExchangeSvg} />
                    <Acessory name='2 pessoas' icon={PeopleSvg} />
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>
                    <DateInfo>

                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>

                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.shape}
                    />
                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>Total</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 500 x3 Diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>

            </Content>

            <Footer>
                <Button
                    title='Alugar Agora'
                    onPress={handleConfirmScreen}
                    color={theme.colors.success}
                />
            </Footer>

        </Container>
    );
}