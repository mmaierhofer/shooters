import * as React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Paper,
} from "@mui/material";

interface MenuItem {
  name: string;
  route: string;
  icon: any;
}

interface MenuItems extends Array<MenuItem> {}

interface props {
  menuItems: MenuItems;
}

export default function DropDownMenu({ menuItems }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        color="inherit"
        edge="start"
        aria-label="menu"
        onClick={handleClick}
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        sx={{ width: 320, maxWidth: "100%" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList>
          {menuItems.map((menuItem) => {
            return (
              <Link to={menuItem.route}>
                <MenuItem>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText>{menuItem.name}</ListItemText>
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}
