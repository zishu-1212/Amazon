import React, { useState } from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./index.css";

import { DatePicker, Form } from "antd";
import moment from "moment";

const Date_piker = () => {
  const [dateRange, setDateRange] = useState([moment(), moment()]);

  return (
    <Form.Item  colon={false}
    className="w-100"
    >
      <DatePicker.RangePicker
        format="MMM Do, YYYY"
      
        separator={"-"}
        onChange={x => {
          console.log(x);
          setDateRange(x);
        }}
        allowClear={false}
      />
    </Form.Item>
  );
};
export default Date_piker

// ReactDOM.render(<App />, document.getElementById("container"));
