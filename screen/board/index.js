import React, { useEffect } from 'react';
import { View, StatusBar, StyleSheet, ScrollView, Text } from 'react-native';
import { Checkbox, NativeBaseProvider } from "native-base"
import styled from 'styled-components/native';

//Components
import Header from '../../components/Header/Index'
import Button from '../../components/Button/index'
import TabBar from '../../components/TabBar/index'

//Redux
import { connect } from 'react-redux';
import { setValue, setAddTask, setEditTask } from '../../redux/actions/actions';

function Board(props) {
  const { navigation, task, Tab } = props
  useEffect(() => {
    console.disableYellowBox = true;
  });

  const SH = (index, data, checked) => {
    props.setEditTask(index, data.title, checked, data.color)
  }

  const All = () => {
    return task.map((data, index) =>
      <Cheked>
        <NativeBaseProvider>
          <Checkbox isChecked={data.checked} onChange={(checked) => SH(index, data, checked)} colorScheme={data.color} aria-label="t1">{data.title}</Checkbox>
        </NativeBaseProvider>
      </Cheked>
    )
  }

  const Completed = () => {
    const result = task.filter(data => data.checked == true)
    return result.map((data, index) =>
      <Cheked>
        <NativeBaseProvider>
          <Checkbox isChecked={data.checked} onChange={(checked) => SH(index, data, checked)} colorScheme={data.color} aria-label="t1">{data.title}</Checkbox>
        </NativeBaseProvider>
      </Cheked>
    )
  }

  const UnCompleted = () => {
    const result = task.filter(data => data.checked == false)
    return result.map((data, index) =>
      <Cheked>
        <NativeBaseProvider>
          <Checkbox isChecked={data.checked} onChange={(checked) => SH(index, data, checked)} colorScheme={data.color} aria-label="t1">{data.title}</Checkbox>
        </NativeBaseProvider>
      </Cheked>
    )
  }

  return (
    <Contenedor>
      <StatusBar style="auto" />
      <Header
        name={'Board'}
        IconDisplay={true}
      />
      <TabBar />
      <Body>
        <Scroll showsVerticalScrollIndicator={false}>
          {Tab == 1 ? All() : Tab == 2 ? Completed() : Tab == 3 ? UnCompleted() : null}
        </Scroll>
        <Button
          name={'Add a task'}
          onpress={() => navigation.navigate('AddTask')}
          board={true}
        />
      </Body>
    </Contenedor>
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
  padding-left: 7%;
  padding-top: 0%;
  padding-right: 8%;
`;

const Scroll = styled(ScrollView)`
  height: 80%;
`;

const Cheked = styled(View)`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 7%;
`;

const mapStateToProps = state => {
  return {
    title: state.Inputs.title,
    task: state.Task.task,
    Tab: state.TabBar.tab,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    },
    setAddTask: (title) => {
      dispatch(setAddTask(title))
    },
    setEditTask: (index, title, checked, color) => {
      dispatch(setEditTask(index, title, checked, color))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)