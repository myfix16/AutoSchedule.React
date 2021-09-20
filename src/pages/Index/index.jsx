import './index.less';
import React from 'react';
import { Button, Modal, List, Row, Col } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
export default function () {
  const [availableCourse, setAvailableCourse] = React.useState([]);
  const [selCourse, setSelCourse] = React.useState([]);
  const handleAddCourses = () => {};
  const viewAvailableCourses = () => {};
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
            dataSource={selCourse}
          />
        </Col>
        <Col span={6} className="available-schedule">
          {/* <div className="view-available-course btn">
            <Button onClick={viewAvailableCourses}>View Available Schedule</Button>
          </div> */}
          <List
            header={
              <div>
                <CheckCircleOutlined style={{ marginRight: '0.5rem' }} />
                <span>Available Schedule</span>
              </div>
            }
          />
        </Col>
      </Row>
    </div>
  );
}
