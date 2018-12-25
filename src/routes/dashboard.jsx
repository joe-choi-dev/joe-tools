import Dashboard from "views/Dashboard/Dashboard";
import UserProfile from "views/UserProfile/UserProfile";
import TableList from "views/TableList/TableList";
import Typography from "views/Typography/Typography";
import Messages from "views/Messages/Messages";
import Icons from "views/Icons/Icons";
import Maps from "views/Maps/Maps";
import Notifications from "views/Notifications/Notifications";
import Upgrade from "views/Upgrade/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/dt",
    name: "DT",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/messages",
    name: "Messages",
    icon: "pe-7s-news-paper",
    component: Messages
  },
  {
    path: "/verses",
    name: "Memory Verses",
    icon: "pe-7s-anchor",
    component: Typography
  },
  {
    path: "/books",
    name: "Books",
    icon: "pe-7s-bookmarks",
    component: Messages
  },
  // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade
  // },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
