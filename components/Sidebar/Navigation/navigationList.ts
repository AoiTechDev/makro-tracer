import { BiSolidDashboard } from "react-icons/bi";
import { FaBowlFood } from "react-icons/fa6";
import { RiSettings4Fill } from "react-icons/ri";
const sidebarList = [
    {
      icon: <BiSolidDashboard className="text-3xl" />,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Ingredients",
      link: "/ingredients",
    },
    {
      icon: <FaBowlFood className="text-3xl" />,
      title: "Meals",
      link: "/meals",
    },
    {
      icon: <RiSettings4Fill className="text-3xl" />,
      title: "Settings",
      link: "/settings",
    },
  ];