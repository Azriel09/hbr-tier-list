import { Outlet, Link } from "react-router-dom";
import "./navigation.css";
export default function Navigation() {
  return (
    <div>
      <div>
        <div className="top-bar">
          <div className="glass">
            {" "}
            <div className="banner"></div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
