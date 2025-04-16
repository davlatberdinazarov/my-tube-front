import React from "react";
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

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)

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
            src={ user?.avatar ?`${BASE_URL}/${user?.avatar}` : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" }
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
          className={`flex items-center gap-2 rounded ${"hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"}`}
        >
          <PowerIcon className="h-4 w-4" />
          <Typography as="span" variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


// nav list component
const navListItems = [
  {
    label: "Account",
    icon: UserCircleIcon,
  },
  {
    label: "Blocks",
    icon: CubeTransparentIcon,
  },
  {
    label: "Docs",
    icon: CodeBracketSquareIcon,
  },
];

export function ComplexNavbar() {
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

        <Button size="sm" variant="text">
          <span>Create Video</span>
        </Button>
        <Link to="/login">
          <Button size="sm" variant="text">
            <span>Log In</span>
          </Button>
        </Link>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}
