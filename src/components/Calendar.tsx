"use client";
import React from "react";
import type { DatePickerProps } from "antd";
import moment from "moment";
import { DatePicker, Space } from "antd";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  // console.log("esto es date", date);
};

const CalendarMobile: React.FC = () => (
  <Space direction="vertical">
    <DatePicker
      onChange={onChange}
      disabledDate={(current) => {
        let customDate = moment().format("DD-MM-YYYY");
        return current && current < moment(customDate, "DD-MM-YYYY");
      }}
      className="border-0 shadow-none text-[18px] text-blue_700 font-poppins font-500 p-0 w-[100px]"
      placeholder="Selecciona una fecha"
    />
  </Space>
);

export default CalendarMobile;
