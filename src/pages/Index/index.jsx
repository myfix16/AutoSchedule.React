import './index.less';
import React from 'react';
import { Button, Modal, List, Row, Col, Popover, message, Input } from 'antd';
import { CheckCircleFilled, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import Calendar from './components/calendar';
import { genSchedules, getAvailableCourse } from '@/services/scheduler';
import $ from 'jquery';

export default function () {
  const [availableCourse, setAvailableCourse] = React.useState([]);
  const [avaSchedule, setAvaSchedule] = React.useState([]);
  const [addModal, setAddModal] = React.useState(false);
  const [currentSchedule, setCurrentSchedule] = React.useState({});
  const handleAddCourses = () => {
    setAddModal(true);
  };

  const InputRef = React.createRef('');

  React.useEffect(() => {
    if (addModal) {
      cancelFilter();
    }
  }, [addModal]);
  const filter = (text) => {
    var condition = text.toUpperCase();
    var lis = $('.availableCourseList .ant-list-items div');
    var matchingList = lis.filter(function (i, div) {
      var list_item_text = $(div).attr('id');
      return ~list_item_text.indexOf(condition);
    });

    lis.hide();
    matchingList.show();
  };

  const cancelFilter = () => {
    var lis = $('.availableCourseList .ant-list-items div');
    lis.show();
  };
  const submit = () => {
    let body = [];
    for (let course of availableCourse) {
      if (course.status === 1) {
        body.push({
          name: course.name,
          priority: 0,
        });
      }
    }

    genSchedules(body).then((res) => {
      setAvaSchedule(res);
      if (res.length === 0) {
        message.warning('There are no available schedules! Please Modify your selected courses!');
      } else {
        message.success(`There are ${res.length} available schedules!`);
      }
    });
  };

  React.useEffect(() => {
    getAvailableCourse().then((res) => {
      let data = [];
      for (let course of res) {
        data.push({ name: course, status: 0 });
      }
      setAvailableCourse(data);
    });
  }, []);

  return (
    <div className="page homepage">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={18} className="selected-course" style={{ borderRight: '1px solid #F0F0F0' }}>
          {/* <div className="available-course btn">
          </div> */}
          <List
            className="selected-course"
            header={
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Selected Courses</span>
                <Button onClick={handleAddCourses}>Add From Available Courses</Button>
              </div>
            }
            // dataSource={selCourse}
            dataSource={availableCourse}
            renderItem={(item, index) =>
              item.status === 1 && (
                <div className="list-item" id={item.name} index={`${index % 2}`}>
                  <span>{item.name}</span>
                  <Popover content={`Remove ${item.name}`}>
                    <MinusOutlined
                      onClick={() => {
                        // removeSelCourse(item, index);
                        let data = availableCourse;
                        data[index] = { name: item.name, status: 0 };
                        setAvailableCourse([...data]);
                      }}
                    />
                  </Popover>
                </div>
              )
            }
          />
        </Col>
        <Col span={6} className="available-schedule">
          {/* <div className="view-available-course btn">
            <Button onClick={viewAvailableCourses}>View Available Schedule</Button>
          </div> */}
          <List
            header={
              <div>
                <CheckCircleFilled
                  style={{ marginRight: '0.5rem', color: 'rgba(96, 66, 194, 0.3))' }}
                />
                <span>Available Schedule</span>
              </div>
            }
            dataSource={avaSchedule}
            renderItem={(item, index) => (
              <div className="list-item avaSched-item" id={item.id}>
                <span>Schedule &nbsp; #{item.id}</span>
                <Button
                  onClick={() => {
                    $('html,body').animate({ scrollTop: $('#calendar').offset().top }, 300);
                    // Modal.confirm({
                    //   title: <span>Schedule Info</span>,
                    //   icon: null,
                    //   content: JSON.stringify(item)
                    // })

                    setCurrentSchedule(item);
                  }}
                >
                  Check
                </Button>
              </div>
            )}
          />
        </Col>
      </Row>
      <Button className="genSched" onClick={() => submit()}>
        Generate My Schedule
      </Button>
      <Calendar currentSchedule={currentSchedule} />
      <Modal
        onOk={() => setAddModal(false)}
        title={
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap' }}>
            <span>
              Available Courses{' '}
              <a style={{ fontSize: '0.7rem', fontWeight: '400' }} onClick={() => cancelFilter()}>
                {' '}
                ALL{' '}
              </a>
            </span>
            <Input.Search
              ref={InputRef}
              style={{ width: '18rem', paddingRight: '2rem' }}
              placeholder="Search by course's name"
              onKeyUp={(e) => {
                if (e.key === 'Enter') filter(InputRef.current.state.value);
              }}
              onSearch={() => {
                filter(InputRef.current.state.value);
              }}
            ></Input.Search>
          </div>
        }
        visible={addModal}
        onCancel={() => setAddModal(false)}
      >
        <div>
          <List
            className="availableCourseList"
            dataSource={availableCourse}
            renderItem={(item, index) =>
              !item.status && (
                <div className="list-item" index={`${index % 2}`} id={item.name}>
                  <span>{item.name}</span>
                  <PlusOutlined
                    onClick={() => {
                      let data = availableCourse;
                      data[index] = { name: item.name, status: 1 };
                      setAvailableCourse([...data]);
                    }}
                  />
                </div>
              )
            }
            style={{ maxHeight: '15rem', overflowY: 'scroll' }}
            // loading
          ></List>
        </div>
      </Modal>
    </div>
  );
}
