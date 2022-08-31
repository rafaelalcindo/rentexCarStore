import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
import { CarDTO } from '../../dtos/carDTO';

interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const navigation = useNavigation();
    const route = useRoute();

    const { car } = route.params as Params;

    function handleConfirmRental() {
        const namePage = 'Scheduling' as never;
        navigation.navigate(namePage);
    }

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={handleBack} />
            </Header>

            <CarImage >
                {/* <ImageSlider imageUrl={['https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png']} /> */}
                <ImageSlider imageUrl={car.photos} />
            </CarImage>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Acessories>
                    {
                        car.accessories.map(accessory => (
                            <Acessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Acessories>

                <About>{car.about}</About>

            </Content>

            <Footer>
                <Button
                    title='Escolher o período do aluguel'
                    onPress={handleConfirmRental}
                // handleConfirmRental
                />
            </Footer>

        </Container>
    );
}