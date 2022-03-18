import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import MenuItem from "@mui/material/MenuItem";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Menu from "@mui/material/Menu";
import DropDownMenu from "../../components/DropDownMenu";

export default function Header() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      name: "Add Workshop",
      route: "/workshop/add",
      icon: <AddIcon />,
    },
    {
      name: "My Workshops",
      route: "/workshops",
      icon: <FormatListBulletedIcon />,
    },
    {
      name: "My Locations",
      route: "/locations",
      icon: <LocationOnIcon />,
    },
  ];

  return (
    <div className="absolute h-20 bg-white w-screen flex flex-row">
      <div className="w-44 border-b z-50"></div>
      <div className="bg-white shadow-lg flex-grow z-0"></div>
    </div>
  );
}
