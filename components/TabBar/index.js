import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native'
import Responsive from '../../util/Resposive';

//Imagen
import Icono from '../../assets/icon/tab.png';

//Redux
import { connect } from 'react-redux';
import { setValue, setFilter} from '../../redux/actions/actions';

function TabBar(props) {
  const {TabBar} =  props

  const Tab = [
    {
      'name': 'All',
      'width': 9,
      'position': 0,
      'Image': TabBar==1?Icono:null,
      'Color': TabBar==1? '#2B2C4B' : '#CBCCCC',
      'space': '20%'
    },
    {
      'name': 'Completed',
      'Image': TabBar==2?Icono:null,
      'Color': TabBar==2? '#2B2C4B' : '#CBCCCC',
      'width': 15,
      'position': 30,
      'space': '13%'
    },
    {
      'name': 'UnCompleted',
      'Image': TabBar==3?Icono:null,
      'Color': TabBar==3? '#2B2C4B' : '#CBCCCC',
      'width': 15,
      'position': 35,
      'space': '13%'
    },
    {
      'name': 'Favorite',
      'Image': TabBar==4?Icono:null,
      'Color': TabBar==4? '#2B2C4B' : '#CBCCCC',
      'width': 15,
      'position': 18,
      'space': '13%'
    }
  ]

  const Icon = (index)=>{
    if(index==0){
      props.setValue('tab', 1)
    }
    if(index==1){
      props.setValue('tab', 2)
    }
    if(index==2){
      props.setValue('tab', 3)
    }
    if(index==3){
      props.setValue('tab', 4)
    }
  }

  const Render = () => {
    return Tab.map((data, index) =>
      <Button width={Responsive(data.width)} onPress={() => Icon(index)}>
        <Title space={data.space} color={data.Color}>{data.name}</Title>
        <Position value={data.position}>
          <Img source={data.Image} resizeMode={'contain'} />
        </Position>
      </Button>
    )
  }
  return (
    <Contenedor>
      <Scroll horizontal={true} showsHorizontalScrollIndicator={false}>
        {Render()}
        <Space/>
      </Scroll>
    </Contenedor>
  );
};


const mapStateToProps = state => {
  return {
    TabBar: state.TabBar.tab,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabBar)

const Space = styled(View)`
  width: 50;
`;

const Title = styled(Text)`
  font-size: ${Responsive(2)};
  color: ${props => props.color};
  padding-bottom: ${props => props.space};
`;

const Img = styled(Image)`
  width: ${Responsive(2.5)};
  height: ${Responsive(2.5)};
`;

const Position = styled(View)`
  left: ${props => props.value};
`;

const Button = styled(TouchableOpacity)`
  width: ${props => props.width};
  background: white;
  justify-content: flex-end;
  align-items: flex-start;
  top: 2%;
`;

const Contenedor = styled(View)`
  height: 7%;
  background: white;
  width: 100%;
  padding-left: 7%;
  padding-top: 0%;
  padding-right: 0%;
  border-width: 1;
  border-color: #C7C7C7;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0; 
`;

const Scroll = styled(ScrollView)`
  height: 100%
`;


