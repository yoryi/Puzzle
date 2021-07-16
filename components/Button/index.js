import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import Responsive from '../../util/Resposive';

export default function Button(props) {
    const { name, onpress, board } = props
    return (
        <Contenedor top={board?'-8%':'18%'} onPress={onpress}>
            <Title>{name}</Title>
        </Contenedor>
    );
};

const Title = styled(Text)`
  font-size: ${Responsive(2)};
  color: white;
`;

const Contenedor = styled(TouchableOpacity)`
  background: #28BF6E;
  height: ${Responsive(7)};
  border-radius: 15;
  justify-content: center;
  align-items: center;
  top: ${props => props.top};
`;