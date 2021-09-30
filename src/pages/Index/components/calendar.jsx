import { LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import { Divider, Popover } from "antd";

import React from 'react'
import "./calendar.less"


export default function Calendar(props) {
  return (
    <div className="schedule" id="calendar">
        <Divider />
        {/* <div style={{marginBottom: "0.5rem"}}>
        <Divider />
           <LeftCircleOutlined /> <span style={{borderBottom: "1px solid rgb(195, 195, 195)"}}>Current View: No.1 </span><RightCircleOutlined/>
        </div> */}

      <table class="calendar-table" border="1">
          
        <thead>
          <tr>
            <td class="calendar-table-head">
              Time
            </td>
            <td class="calendar-table-head">
              Monday
            </td>
            <td class="calendar-table-head">
              Tuesday
            </td>
            <td class="calendar-table-head">
              Wednesday
            </td>
            <td class="calendar-table-head">
              Thursday
            </td>
            <td class="calendar-table-head">
              Friday
            </td>
          </tr>
        </thead>
        <tbody>
          <tr index='0'>
            <td class="calendar-table-content">
              8:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='1'>
            <td class="calendar-table-content">
              9:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='2'>
            <td class="calendar-table-content">
              9:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='3'>
            <td class="calendar-table-content">
              10:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='4'>
            <td class="calendar-table-content">
              10:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='5'>
            <td class="calendar-table-content">
              11:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='6'>
            <td class="calendar-table-content">
              11:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='7'>
            <td class="calendar-table-content">
              12:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='8'>
            <td class="calendar-table-content">
              12:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='9'>
            <td class="calendar-table-content">
              13:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='10'>
            <td class="calendar-table-content">
              13:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='11'>
            <td class="calendar-table-content">
              14:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='12'>
            <td class="calendar-table-content">
              14:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='13'>
            <td class="calendar-table-content">
              15:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='14'>
            <td class="calendar-table-content">
              15:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='15'>
            <td class="calendar-table-content">
              16:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='16'>
            <td class="calendar-table-content">
              16:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='17'>
            <td class="calendar-table-content">
              17:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='18'>
            <td class="calendar-table-content">
              17:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='19'>
            <td class="calendar-table-content">
              18:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='20'>
            <td class="calendar-table-content">
              18:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='21'>
            <td class="calendar-table-content">
              19:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='22'>
            <td class="calendar-table-content">
              19:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='23'>
            <td class="calendar-table-content">
              20:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr index='24'>
            <td class="calendar-table-content">
              20:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
        </tbody>
        <div className="skeleton">
          {
            props.currentSchedule.sessions && props.currentSchedule.sessions.map((item, index)=>(
              <Block session={item}/>
            ))
          }
        </div>
      </table>
    </div>
  );
}


const Block = (props) => {
  const {session} = props
  let {sessionTimes} = session;
  function calHeight(startTime, endTime) {
    let startMin = startTime.hour * 60 + startTime.minute;
    let endMin = endTime.hour*60 + endTime.minute;
    let diffMin = endMin -startMin;

    return diffMin/30 * 1.5  + 'rem'
  }

  function calTop(startTime) {
    
    let topMin = 8*60+30;
    let startMin = startTime.hour * 60 + startTime.minute;
    // let startMin = 12*60
    let borderWidthRem = 1/Number.parseFloat(document.getElementById('root').style.fontSize)

    // let startMin = 10* 60 + 0;
    // Math.floor((startMin-topMin)/30)*borderWidthRem+
    return (startMin - topMin)/30*1.5 + Math.floor((startMin-topMin)/30)*borderWidthRem+ 'rem';

  }

  function calLeft(dayOfWeek) {
    return (dayOfWeek-1)*8+"rem"
  }
  return (
    <div>
{ sessionTimes.map((item, index)=>{ 
      return (<Popover
      content={<div>
        <div className="session-name">Session: {session.name+'   ['+ session.sessionType+']'}</div>
        <div className="instructor"> <span> Instructor: {session.instructor}</span></div>
        <div className="startTime"> <span> Start Time: {item.startTime.hour + ' : ' + (item.startTime.minute||"00")}</span></div>
        <div className="endTime"> <span> End Time : {item.endTime.hour + ' : ' + (item.endTime.minute || '00')}</span></div>
        <div className="location"><span>Location: {session.location}</span></div>
      </div>}
      >
        <div className="block" 
      style={{
        height: calHeight(item.startTime, item.endTime),
        top:calTop(item.startTime),
        left: calLeft(item.dayOfWeek)
      }}
      >
        <span className="session-name" style={{lineHeight: calHeight(item.startTime, item.endTime)}}>{session.name}</span>
        {/* <div className="startTime" style={{fontSize: "0.5rem"}}> <span> Start Time: {item.startTime.hour + ' : ' + item.startTime.minute}</span></div>
      <div className="endTime" style={{fontSize: "0.5rem"}}> <span> End Time : {item.endTime.hour + ' : ' + item.endTime.minute}</span></div> */}
      </div>
      </Popover> )
    })}
    </div>


  )
}