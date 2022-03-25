import { Col, Row } from 'antd';
import React from 'react';
import Todo from '../Todo';
import { useSelector } from 'react-redux';
import { SelectorFilterTodoList } from '../../Selectors';
import { TodoModel } from '../../models';
import TodoInputs from '../TodoInputs';

export default function TodoList() {
  const TodoList = useSelector(SelectorFilterTodoList) as TodoModel[];
  console.log('TodoList render');

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {TodoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            prioriry={item.prioriry}
            status={item.status}
          />
        ))}
      </Col>
      <Col span={24}>
        <TodoInputs />
      </Col>
    </Row>
  );
}
