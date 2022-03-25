import { Input, Button, Select, Tag } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoListActions } from '../../Actions';
import { FilterStatus, TodoModel } from '../../models';

function TodoInputs() {
  const [text, setText] = useState('');
  const [prioriry, setPrioriry] = useState('Low');
  const dispatch = useDispatch();

  console.log('TodoInputs render');
  const HandleChangeText = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  const HandleChangePriority = useCallback(
    (e) => {
      setPrioriry(e);
    },
    [prioriry]
  );

  const HandleClickAdd = () => {
    const item = {
      name: text,
      prioriry: prioriry,
      status: FilterStatus.Todo,
    } as TodoModel;
    dispatch(TodoListActions.AsyncActionPutTodo(item));
    setText('');
    setPrioriry('Low');
  };

  return (
    <Input.Group style={{ display: 'flex' }} compact>
      <Input value={text} onChange={HandleChangeText} />
      <Select
        defaultValue="Medium"
        value={prioriry}
        onChange={HandleChangePriority}
      >
        <Select.Option value="High" label="High">
          <Tag color="red">High</Tag>
        </Select.Option>
        <Select.Option value="Medium" label="Medium">
          <Tag color="blue">Medium</Tag>
        </Select.Option>
        <Select.Option value="Low" label="Low">
          <Tag color="gray">Low</Tag>
        </Select.Option>
      </Select>
      <Button onClick={HandleClickAdd} type="primary">
        Add
      </Button>
    </Input.Group>
  );
}
export default memo(TodoInputs);
