import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";
import { BiTrip } from "react-icons/bi";

export default function Sidebar() {
  return (
    <>
      <div className="h-full w-24 bg-white shadow-sm border-r-2 border-gray-100 flex flex-col items-center">
        <BiHomeAlt color="grey" size={24} />
        <BiCalendarWeek color="grey" size={24} />
        <BiFoodMenu color="grey" size={24} />
        <BiUser color="grey" size={24} />
        <BiTrip color="grey" size={24} />
      </div>
    </>
  );
}
