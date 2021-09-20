import { LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";
import { Divider } from "antd";
import "./calendar.less"
export default function Calendar() {
  return (
    <div className="schedule">
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
          <tr>
            <td class="calendar-table-content">
              8:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              9:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              9:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              10:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              10:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              11:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              11:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              12:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              12:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              13:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              13:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              14:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              14:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              15:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              15:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              16:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              16:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              17:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              17:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              18:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              18:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              19:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              19:30
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
            <td class="calendar-table-content">
              20:00
            </td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
            <td class="calendar-table-content"></td>
          </tr>
          <tr>
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
      </table>
    </div>
  );
}
