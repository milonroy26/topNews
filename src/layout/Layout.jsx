import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>{item["name"]}</a>
              </li>
            </ul>
          </div>
          <Link>
            <img
              className="w-[100px] h-[100%]"
              src="https://tds-images.thedailystar.net/sites/all/themes/sloth/logo.svg"
              alt=""
            />
          </Link>
        </div>

        {/* PC */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a> {item.name} </a>
            </li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
