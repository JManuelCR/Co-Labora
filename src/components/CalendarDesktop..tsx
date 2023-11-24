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
  const { show, values, datesArray } = props;
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [dates, setDates] = useState([
    moment(new Date("12-08-2023").toString()).format("L"),
    moment(new Date("12-09-2023").toString()).format("L"),
    moment(new Date("12-10-2023").toString()).format("L"),
    moment(new Date("12-11-2023").toString()).format("L"),
    moment(new Date("12-12-2023").toString()).format("L"),
    moment(new Date("12-13-2023").toString()).format("L"),
    moment(new Date("12-14-2023").toString()).format("L"),
    moment(new Date("12-25-2023").toString()).format("L"),
    moment(new Date("12-26-2023").toString()).format("L"),
  ]);
  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };
  setTimeout(() => {
    setRenderTimer(true);
  }, 100);
  
  useEffect(() => {
    const datesToBlock = datesArray.map((dates: string) => {
      return moment(new Date(dates).toString()).format("L")
    })
    console.log("arraysalida", datesToBlock)
    console.log("una fecha muestra",  [moment(new Date("12-26-2023").toString()).format("L")])
    setDates(datesToBlock)
  }, [datesArray]);

  useEffect(() => {
    const data = {
      startDate: startDate,
      endDate: endDate,
    };
    values(data);
  }, [startDate, endDate, values]);

  if (renderTimer && show) {
    return (
      <Space direction="vertical" size={12}>
        <RangePicker
          open
          size={size}
          className="border-0 shadow-none text-[18px] text-blue_700 font-poppins font-500 p-0 w-[415px] flex gap-[20px] bg-[transparent]"
          disabledDate={(current) => {
            let customDate = moment().format("DD-MM-YYYY");
            return (
              (current &&
                dates.includes(moment(current.toString()).format("L"))) ||
              current < moment(customDate, "DD-MM-YYYY")
            );
          }}
          format={"DD-MM-YYYY"}
          onChange={(e: any) => {
            if (e) {
              setStartDate(e[0].$d);
              setEndDate(e[1].$d);
            }
          }}
        />
      </Space>
    );
  }
}
