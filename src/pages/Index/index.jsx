import './index.less';
import React from 'react';
import { Button, Modal, List, Row, Col, Popover } from 'antd';
import { CheckCircleFilled,  MinusOutlined } from '@ant-design/icons';
import Calendar from './components/calendar';
import {getAvailableCourse} from '@/services/scheduler';

export default function () {
  const [availableCourse, setAvailableCourse] = React.useState([]);
  const [selCourse, setSelCourse] = React.useState([]);
  const handleAddCourses = () => {};
  const viewAvailableCourses = () => {};
  const removeSelCourse = ()=>{}
  React.useEffect(
    ()=>{
      getAvailableCourse().then(res=>{
        // console.log(res)
        setAvailableCourse(res.data)
      }
      )
    }, []   
  )
  return (
    <div className="page homepage">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={18} className="selected-course" style={{ borderRight: '1px solid #F0F0F0' }}>
          {/* <div className="available-course btn">
          </div> */}
          <List
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Selected Courses</span>
                <Button onClick={handleAddCourses}>Add From Available Courses</Button>
              </div>
            }
            // dataSource={selCourse}
            dataSource = {availableCourse}
            renderItem = {(item, index)=> <div className="list-item" id={item.name} index={`${index%2}`}><span>{item.name}</span> 
            <Popover content={`Remove ${item.name}`}>
            <MinusOutlined onClick={()=>{
              removeSelCourse()
            }}/> 
              </Popover>
            </div>}
          />
        </Col>
        <Col span={6} className="available-schedule">
          {/* <div className="view-available-course btn">
            <Button onClick={viewAvailableCourses}>View Available Schedule</Button>
          </div> */}
          <List
            header={
              <div>
                <CheckCircleFilled style={{ marginRight: '0.5rem', color: "rgba(96, 66, 194, 0.3))" }} />
                <span>Available Schedule</span>
              </div>
            }
          />
        </Col>
      </Row>
      <Calendar />
    </div>
  );
}
