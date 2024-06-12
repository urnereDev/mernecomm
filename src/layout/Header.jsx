import { FiSearch } from "react-icons/fi";
function Header() {
  const menuItems = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Logout",
      url: "/logout",
    },
  ];
  return (
    <div className="bg-orange-400 h-[50px] flex items-center px-3 justify-between">
      <div className="text-white font-bold">
        <a href="/">E-commerce</a>
      </div>
      <div className="flex items-center bg-white rounded-md">
        <input
          className="rounded-md items-center px-5 outline-none"
          type="text"
          placeholder="Search"
        />
        <button>
          <FiSearch className="m-3 border-none text-orange-400" />
        </button>
      </div>
      <div className="relative">
        <img className="h-8" src="src/img/users.png" alt="" />
        <div className="absolute">
          {menuItems.map((item, i) => (
            <div key={i}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
