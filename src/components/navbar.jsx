import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,

} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { BASE_URL } from "../utils";
import { MainContext } from "../layouts/MainLayout";
import { CreateVideo } from "./dialogs/create-video";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const { user, logOut } = useContext(MainContext)

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={`${user.avatar ? BASE_URL + "/" + user?.avatar : "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"}`}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Link className=" border-none hover:border-none" to="/profile">
          <MenuItem
            className={`flex items-center gap-2 rounded ${"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"}`}
          >
            <Cog6ToothIcon className="h-4 w-4" />
            <Typography as="span" variant="small" className="font-normal">
              Porfile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem
          onClick={logOut}
          className={`flex items-center gap-2 rounded ${"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"}`}
        >
          <PowerIcon className="h-4 w-4" />
          <Typography  as="span" variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


export function ComplexNavbar({ user }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/">
          <Typography variant="h5" className="font-medium mr-4">
            My tube
          </Typography>
        </Link>

        <CreateVideo/>
        <Link to="/login">
          <Button size="sm" variant="text">
            <span>Log In</span>
          </Button>
        </Link>
        <ProfileMenu user={user} />
      </div>
    </Navbar>
  );
}
