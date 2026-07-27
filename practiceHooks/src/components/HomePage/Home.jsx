import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "State Hook", to: "/statehook", current: false },
  { name: "Use Effect", to: "/useeffect", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Disclosure
        as="nav"
        className="relative border-b border-white/10 bg-slate-900/95 shadow-lg shadow-slate-950/40"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-slate-800 text-white"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium",
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full p-1 text-slate-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              <Menu as="div" className="relative ml-3">
                <MenuButton className="flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-slate-700"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User"
                  />
                </MenuButton>

                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg shadow-slate-950/40 ring-1 ring-white/10 focus:outline-none">
                  <MenuItem>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/statehook"
                      className="block px-4 py-2 text-sm text-slate-200 hover:bg-slate-700"
                    >
                      State Hook
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden bg-slate-900/95">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

    </div>
  );
}
