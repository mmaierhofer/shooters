import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiCalendarWeek } from "react-icons/bi";
import { BiFoodMenu } from "react-icons/bi";
import { BiTrip } from "react-icons/bi";
import SidebarIcon from "../../components/DropDownMenu/SidebarIcon";

export default function Sidebar() {
  return (
    <>
      <div className="h-full w-24 bg-white shadow-sm border-r-2 border-gray-100 flex flex-col justify-center">
        <div className="flex flex-col items-center h-2/4 justify-between">
          <SidebarIcon icon={<BiHomeAlt />} />
          <SidebarIcon icon={<BiCalendarWeek />} />
          <SidebarIcon icon={<BiFoodMenu />} />
          <SidebarIcon icon={<BiUser />} />
          <SidebarIcon icon={<BiTrip />} />
        </div>
      </div>
    </>
  );
}
