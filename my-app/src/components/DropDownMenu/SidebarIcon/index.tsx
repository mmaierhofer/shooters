import React from "react";

interface props {
  icon: any;
}

export default function SidebarIcon({ icon }: props) {
  return (
    <>
      <div className="text-2xl text-gray-400 cursor-pointer hover:bg-gray-100 rounded-full p-3">
        {icon}
      </div>
    </>
  );
}
