import React from "react";
import SidebarRow from "./SidebarRow";
import PeopleIcon from "@material-ui/icons/People";
import "./Sidebar.css";
import { Chat, ExpandMoreOutlined, LocalHospital } from "@material-ui/icons";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fmex14-1.fna.fbcdn.net/v/t1.0-9/58442817_2141406325943457_4896427558284820480_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=kXdABJ7o3IwAX8xOCmX&_nc_ht=scontent.fmex14-1.fna&oh=9a7076370b0c044a1172f1bfc33174e9&oe=5FC06933"
        title="Yo mero"
      />
      <SidebarRow
        Icon={LocalHospital}
        title="COVID-19 Information Center"
      ></SidebarRow>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"></SidebarRow>
      <SidebarRow Icon={PeopleIcon} title="Friends"></SidebarRow>
      <SidebarRow Icon={Chat} title="Messenger"></SidebarRow>
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace"></SidebarRow>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"></SidebarRow>
      <SidebarRow Icon={ExpandMoreOutlined} title="More"></SidebarRow>
    </div>
  );
}

export default Sidebar;
