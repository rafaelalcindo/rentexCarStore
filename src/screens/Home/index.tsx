import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, StatusBar, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import api from '../../service/api';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import { CarDTO } from '../../dtos/carDTO';

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';

export function Home() {

    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/cars');

                setCars(response.data);
            } catch (error: any) {
                console.log(error);
            } finally {
                setLoading(false);
            }

        }

        fetchCars();
    }, []);


    function handleCarDetails(car: CarDTO) {
        const name = 'CarDetails' as never;
        navigation.navigate(name, { car })
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(100)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>


            {loading ? <Load /> :
                <CarList
                    data={cars}
                    keyExtractor={(item: CarDTO) => String(item.id)}
                    renderItem={({ item }) => <Car
                        data={item}
                        onPress={() => handleCarDetails(item)}
                    />
                    }
                />
            }

        </Container >
    );
}