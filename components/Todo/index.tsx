import { Row, Tag, Checkbox } from 'antd';
import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { TodoListActions } from '../../Actions';
import { FilterStatus, TodoModel } from '../../models';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

const getCheckedByStatus = (status: FilterStatus): boolean => {
  return [FilterStatus.Completed, FilterStatus.All].includes(status);
};

const getStatusByChecked = (checked: boolean): FilterStatus => {
  return checked ? FilterStatus.Completed : FilterStatus.Todo;
};

function Todo({ id, name, prioriry, status }: TodoModel) {
  const [checked, setChecked] = useState(getCheckedByStatus(status));
  const dispatch = useDispatch();
  console.log('Todo child Item render');

  const toggleCheckbox = useCallback(() => {
    setChecked(!checked);
    const todo = {
      id,
      name,
      prioriry,
      status: getStatusByChecked(!checked),
    };
    dispatch(TodoListActions.AsyncActionPatchTodo(todo));
  }, [checked]);

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
export default memo(Todo);
