import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import {
  Forum,
  StorefrontOutlined,
  SupervisedUserCircle,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <div className="header">
      {/* Bem convention */}
      <div className="header__left">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search on Facebook" type="text" name="" id="" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>

        <div className="header__option ">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar></Avatar>
          <h4>Profile name</h4>
        </div>
        <IconButton>
          <AddIcon></AddIcon>
        </IconButton>
        <IconButton>
          <Forum></Forum>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon></NotificationsActiveIcon>
        </IconButton>
        <IconButton>
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
