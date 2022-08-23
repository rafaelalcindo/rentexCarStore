import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Header,
    CarImage
} from './styles';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

export function CarDetails() {
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImage >
                <ImageSlider imageUrl={['https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png']} />
            </CarImage>

        </Container>
    );
}