'use client'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { DatePicker, Radio, Space } from 'antd';
import moment from 'moment';
import { showCalendar } from '@/types/showCalendar.types';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const { RangePicker } = DatePicker;

export default function CalendarDesktop(props:showCalendar ) 
{
    const [size, setSize] = useState<SizeType>('middle');
    const [renderTimer, setRenderTimer] = useState(false);
    const { show } = props;

    const handleSizeChange = (e: RadioChangeEvent) => {
      setSize(e.target.value);
    };
    setTimeout(() => {
        setRenderTimer(true)    
    }, 50)
    if(renderTimer){
        return (
            <Space direction="vertical" size={12}>
            <RangePicker 
            size={size}
            className='border-0 shadow-none text-[18px] text-blue_700 font-poppins font-500 p-0 w-[415px] flex gap-[20px] bg-[transparent]'
            disabledDate={(current) => {
                let customDate = moment().format("DD-MM-YYYY");
                return current && current < moment(customDate, "DD-MM-YYYY");
              }} 
            format={"DD-MM-YYYY"}
            />
          </Space>
        );
    }
}