import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import styled from 'styled-components/native';

//Components
import Header from '../../components/Header/Index'
import Button from '../../components/Button/index'
import Input from '../../components/Input/index'

//Util
import Dissmisskeyboard from '../../util/Dissmisskeyboard'
import { Deadline, Remind, Repeat } from '../../data/Items'

//Redux
import { connect } from 'react-redux';
import { setValue, setAddTask } from '../../redux/actions/actions';

const Inputs = [
  {
    'title': 'Title',
    'placeholder': 'Desing team meeting',
    'type': 'text',
    'state': 'title'
  },
  {
    'title': 'Deadline',
    'placeholder': '2021-02-28',
    'type': 'select',
    'item': Deadline,
    'state': 'deadline'
  },
  {
    'title': 'Time',
    'placeholder': 'sksk',
    'type': 'time',
  },
  {
    'title': 'Remind',
    'placeholder': '10 minute early',
    'type': 'select',
    'item': Remind,
    'state': 'remind'
  },
  {
    'title': 'Repeat',
    'placeholder': 'sksk',
    'type': 'select',
    'item': Repeat,
    'state': 'repeat'
  }
]

function AddTask(props) {
  const { navigation, title, deadline, remind, repeat } = props

  const Render = () => {
    return Inputs.map((data) =>
      <Input
        titulo={data.title}
        placeholder={data.placeholder}
        type={data.type}
        item={data.type == 'select' ? data.item : null}
        onchangetext={text => props.setValue(data.state, text)}
        value={props[data.state]}
      />
    )
  }

  const Clear = () => {
    props.setValue('title', '')
    props.setValue('deadline', '')
    props.setValue('remind', '')
    props.setValue('repeat', '')
  }

  const CreateTask = () => {
    if (title == 0 || deadline == 0 || remind == 0 || repeat == 0) {
      alert('Complete los campos')
    }
    else {
      const months = ['red', 'green', 'orange', 'pink', 'purple'];
      const random = Math.floor(Math.random() * months.length);
      props.setAddTask(title, months[random])
      navigation.navigate('Board')
      Clear()
    }
  }

  return (
    <Dissmisskeyboard>
      <Contenedor>
        <StatusBar style="auto" />
        <Header
          name={'Add Task'}
          back={true}
          onpress={() => navigation.navigate('Board')}
        />
        <Body>
          {Render()}
          <Button
            name={'Create a Task'}
            onpress={() => CreateTask()}
          />
        </Body>
      </Contenedor>
    </Dissmisskeyboard>
  );
}

const Contenedor = styled(View)`
  flex: 1;
  background: white;
`;

const Body = styled(View)`
  flex: 1;
  background: white;
  width: 100%;
  padding-left: 8%;
  padding-right: 8%;
  padding-top: 0%;
`;


const mapStateToProps = state => {
  return {
    title: state.Inputs.title,
    deadline: state.Inputs.deadline,
    remind: state.Inputs.remind,
    repeat: state.Inputs.repeat,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    },
    setAddTask: (title, color) => {
      dispatch(setAddTask(title, color))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTask)