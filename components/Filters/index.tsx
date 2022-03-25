import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import React, { useCallback } from 'react';
import { FilterActions } from '../../Actions';
import { useDispatch } from 'react-redux';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  console.log('Filter render');
  const HandleSearch = (e) => {
    const text = e.target.value;
    dispatch(FilterActions.ActionSearchFilterList(text.trim()));
  };

  const HandleStatus = useCallback((e) => {
    const selected = e.target.value;
    dispatch(FilterActions.ActionStatusFilterList(selected));
  }, []);

  const HandlePriority = useCallback((selected) => {
    console.log(selected);
    dispatch(FilterActions.ActionPriorityFilterList(selected));
  }, []);

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search onChange={HandleSearch} placeholder="input search text" />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={HandleStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24} md={12}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          onChange={HandlePriority}
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
      </Col>
    </Row>
  );
}
