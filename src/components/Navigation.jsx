import { Outlet, Link } from "react-router-dom";
import "./navigation.css";
export default function Navigation() {
  return (
    <div>
      <div>
        <div className="top-bar">
          <div className="title-container">
            <h1 className="header-text">
              Heaven Burns <span className="header-highlight">Red</span>
            </h1>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
