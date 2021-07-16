import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styled from 'styled-components/native';
import RNPicker from 'react-native-picker-select';
import Responsive from '../../util/Resposive';

export default function Input(props) {
  const { text, titulo, placeholder, type, item, onchangetext, value } = props

  const Select = () => {
    return <RNPicker
      placeholder={item[0]}
      items={item}
      value={value}
      onValueChange={onchangetext}
    />
  }

  const Input = () => {
    return <Title
      placeholder={placeholder}
      onChangeText={onchangetext}
      value={value}>
      {text}
    </Title>
  }

  const Time = () => {
    return <View style={{ height: '100%', width: '100%' }}>

    </View>
  }

  return (
    <Contenedor>
      <Subtitle>{titulo}</Subtitle>
      <Body>
        {type == 'text' ? Input() : type == 'select' ? Select() : type == 'time' ? Time() : null}
      </Body>
    </Contenedor>
  );
};

const Contenedor = styled(View)`
  padding-top: 5%;
`;

const Subtitle = styled(Text)`
  font-size: ${Responsive(1.9)};
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  font-weight: 500;
`;

const Title = styled(TextInput)`
  font-size: ${Responsive(2)};
  color: black;
  height: 100%;
  width: 100%;
`;

const Body = styled(View)`
  background: #F9F9F9;
  height: ${Responsive(6.5)};
  border-radius: 9;
  justify-content: center;
  align-items: flex-start;
  padding-left: 6%;
  top: 5%;
`;