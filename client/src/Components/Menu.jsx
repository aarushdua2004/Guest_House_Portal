// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Menu = () => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [hovered, setHovered] = useState(null);
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     localStorage.setItem("selectedItem", selectedItem);
//   }, [selectedItem]);

//   const menuItems = [
//     { key: 1, name: "home", label: "HOME", link: "/" },
//     {
//       key: 2,
//       name: "dining",
//       label: "DINING",
//       link: "/" + (user.role?.toLowerCase() || "unknown") + "/dining",
//     },
//     {
//       key: 5,
//       name: "reservation",
//       label: "ROOM RESERVATION",
//       link: "/" + (user.role?.toLowerCase() || "unknown") + "/reservation",
//     },
//     { key: 3, name: "people", label: "PEOPLE", link: "/people" },
//     { key: 4, name: "location", label: "LOCATION", link: "/location" },
//     { key: 6, name: "contact", label: "CONTACT", link: "/contact" },
//   ];

//   return (
//     <div className=" menu w-full h-15 flex shrink justify-center ">
//       <div className="menu-container w-full h-12 pr-3 text-white bg-[#365899] pl-8">
//         <ul className="h-full w-full">
//           <div className="flex justify-between h-full items-center text-lg">
//             {menuItems.map((item) => (
//               <Link
//                 exact="true"
//                 to={item.link}
//                 key={'menu-'+item.key}
//                 onClick={() => setSelectedItem(`${item.name}`)}
//                 className={`flex justify-center items-center px-8 h-full ${
//                   (selectedItem === item.name || hovered === item.name) &&
//                   " bg-[#284272d7]"
//                 } `}
//                 onMouseOver={() => setHovered(`${item.name}`)}
//                 onMouseOut={() => setHovered(null)}
//               >
//                 <li>
//                   <div className="text-center">{item.label}</div>
//                 </li>
//               </Link>
//             ))}
//           </div>
//         </ul>

//       </div>
//     </div>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hovered, setHovered] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    localStorage.setItem("selectedItem", selectedItem);
  }, [selectedItem]);

  const menuItems = [
    { key: 1, name: "home", label: "HOME", link: "/" },
    {
      key: 2,
      name: "dining",
      label: "DINING",
      link: "/" + (user.role?.toLowerCase() || "unknown") + "/dining",
    },
    {
      key: 5,
      name: "reservation",
      label: "ROOM RESERVATION",
      link: "/" + (user.role?.toLowerCase() || "unknown") + "/reservation",
    },
    { key: 3, name: "people", label: "PEOPLE", link: "/people" },
    { key: 4, name: "location", label: "LOCATION", link: "/location" },
    { key: 6, name: "contact", label: "CONTACT", link: "/contact" },
  ];

  return (
    <div className=" bg-[#365899] flex justify-center w-full">
      <div className="menu-container  text-white max-w-[80%] ">
        <ul className="menu flex justify-around flex-wrap">
          {menuItems.map((item) => (
            <Link
              exact="true"
              to={item.link}
              key={"menu-" + item.key}
              onClick={() => setSelectedItem(item.name)}
              className={`px-8 menu-item ${
                selectedItem === item.name ||
                (hovered === item.name && "bg-[#284272d7] text-white")
              }`}
              onMouseOver={() => setHovered(item.name)}
              onMouseOut={() => setHovered(null)}
            >
              <li className="p-4">{item.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
