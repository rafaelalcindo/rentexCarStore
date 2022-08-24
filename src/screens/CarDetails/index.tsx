import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
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
    Footer
} from './styles';

export function CarDetails() {
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


                <About>
                    sdfasfasdfasdf asdf asdf asdf asdf asdf as
                    fasd fasdfasdf asdf asdf asd gasdfasf as
                    fa sdfasdf asdf asdf asdf as fasd
                </About>

                <About>
                    sdfasfasdfasdf asdf asdf asdf asdf asdf as
                    fasd fasdfasdf asdf asdf asd gasdfasf as
                    fa sdfasdf asdf asdf asdf as fasd
                </About>
                <About>
                    sdfasfasdfasdf asdf asdf asdf asdf asdf as
                    fasd fasdfasdf asdf asdf asd gasdfasf as
                    fa sdfasdf asdf asdf asdf as fasd
                </About>
                <About>
                    sdfasfasdfasdf asdf asdf asdf asdf asdf as
                    fasd fasdfasdf asdf asdf asd gasdfasf as
                    fa sdfasdf asdf asdf asdf as fasd
                </About>



            </Content>

            <Footer>
                <Button
                    title='Confirmar'
                />
            </Footer>

        </Container>
    );
}