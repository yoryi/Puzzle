import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Responsive from '../../util/Resposive';

//Imagen
import Notificacion from '../../assets/icon/notificacion.png';
import Buscar from '../../assets/icon/Search.png';
import Menu from '../../assets/icon/menu.png';
import Atras from '../../assets/icon/atras.png';

export default function Header(props) {
    const icons = [Buscar, Notificacion, Menu]
    const { IconDisplay, onpress } = props

    const render = () => {
        return icons.map((data) =>
            <TouchableOpacity>
                <Image source={data} style={{ width: Responsive(3), height: Responsive(3) }} />
            </TouchableOpacity>
        )
    }

    const button = () => {
        return <View style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{paddingRight: '15%'}} onPress={onpress}>
                <Image source={Atras} style={{ width: Responsive(2.5), height: Responsive(2.5) }} />
            </TouchableOpacity>
            <Title>{props.name}</Title>
        </View>
    }

    return (
        <Container>
            <SideA>
                {IconDisplay ? <Title>{props.name}</Title> : button()}
            </SideA>
            <SideB>
                {IconDisplay ? render() : null}
            </SideB>
        </Container >
    );
};

const Title = styled(Text)`
  font-size: ${Responsive(3)};
  color: black;
  font-weight: 600;
`;

const Container = styled(View)`
    height: 14%;
    background: white;
    justify-content: center;
    padding-left: 7%;
    padding-right: 7%;
    padding-top: 12%;
    background-color: white;
    flex-direction: row;
    border-bottom-width: 1;
    border-color: #C7C7C7;
`;

const SideA = styled(View)`
    width: 65%;
    height: 100%;
    background: white;
    justify-content: center;
`;

const SideB = styled(View)`
    width: 37%;
    height: 100%;
    background: white;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;