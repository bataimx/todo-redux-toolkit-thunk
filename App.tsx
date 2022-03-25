import { Typography, Divider } from 'antd';
import './App.css';
import TodoList from './components/TodoList';
import Filters from './components/Filters';
import React, { useEffect } from 'react';
import { TodoListActions } from './Actions';
import { useDispatch } from 'react-redux';

const { Title } = Typography;

function App() {
  console.log('App render');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(TodoListActions.AsyncActionFetchTodo());
  }, []);

  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
    >
      <Title style={{ textAlign: 'center' }}>TODO App</Title>
      <Title level={4} style={{ textAlign: 'center', margin: 0 }}>
        Redux@toolkit
      </Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
