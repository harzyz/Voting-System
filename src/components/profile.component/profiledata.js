import { IoMdPerson } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdHelpCenter } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";

export const profiledata = [
  {
    id: 1,
    detail: 'Personal details',
    icon : <IoMdPerson />
  },
  {
    id: 2,
    detail: 'Change Password',
    icon : <RiLockPasswordFill />
  },
  {
    id: 3,
    detail: 'Language',
    icon : <CiGlobe />
  },
  {
    id: 4,
    detail: 'Notifications',
    icon : <IoNotificationsOutline />
  },
  {
    id: 5,
    detail: 'Get Help',
    icon : <MdHelpCenter />
  },
  {
    id: 6,
    detail: 'Terms & Conditions',
    icon : <IoIosPaper />
  },
]