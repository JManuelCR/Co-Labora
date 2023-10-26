"use client";
import React, { useState, useEffect } from "react";
import type { RadioChangeEvent } from "antd";
import { DatePicker, Radio, Space } from "antd";
import moment from "moment";
import { showCalendar } from "@/types/showCalendar.types";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import { get } from "http";


const { RangePicker } = DatePicker;

export default function CalendarDesktop(props: any) {
  const [size, setSize] = useState<SizeType>("middle");
  const [renderTimer, setRenderTimer] = useState(false);
  const { show, values } = props;
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [dates, setDates] = useState([
    moment(new Date('11-09-2023').toString()).format('L'),
    moment(new Date('11-08-2023').toString()).format('L'),
    moment(new Date('11-10-2023').toString()).format('L'),
    moment(new Date('11-16-2023').toString()).format('L'),
    moment(new Date('11-17-2023').toString()).format('L'),
    moment(new Date('11-18-2023').toString()).format('L'),
    moment(new Date('11-19-2023').toString()).format('L'),
    moment(new Date('11-20-2023').toString()).format('L'),
    moment(new Date('11-21-2023').toString()).format('L'),

  ]);
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  setTimeout(() => {
    setRenderTimer(true);
  }, 50);

  useEffect(() => {
    const data = {
      startDate: startDate,
      endDate: endDate,
    };
    values(data);
  }, [startDate, endDate]);


  if (renderTimer && show) {
    return (
      <Space direction="vertical" size={12}>
        <RangePicker
          open
          size={size}
          className="border-0 shadow-none text-[18px] text-blue_700 font-poppins font-500 p-0 w-[415px] flex gap-[20px] bg-[transparent]"
          disabledDate={(current) => {
            let customDate = moment().format("DD-MM-YYYY");
            return current && dates.includes(moment(current.toString()).format('L')) || current < moment(customDate, "DD-MM-YYYY");
          }}
          format={"DD-MM-YYYY"}
          onChange={(e: any) => {
            if (e) {
              setStartDate(e[0].$d);
              setEndDate(e[1].$d);
            }
          }
        }
        />
      </Space>
    );
  }
}
