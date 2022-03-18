import * as React from "react";
import Searchbar from "../../components/DropDownMenu/Searchbar";

export default function Header() {
  return (
    <div className="absolute max-h-20 h-20 bg-white w-screen flex flex-row">
      <div className="w-44 border-b z-50"></div>
      <div className="bg-white shadow-lg flex-grow z-0">
        <div className="w-3/4">
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
