export default function Topbar() {
  return (
    <header className="navbar flex items-center justify-between bg-base-200 border-b border-base-300 px-4">
          <div className="flex items-center gap-2">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-square btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <h1 className="text-lg font-bold">Panel de Control</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Eduardo</span>
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {/* <img src="https://i.pravatar.cc/32" alt="avatar" /> */}
              </div>
            </div>
          </div>
        </header>
  );
}
