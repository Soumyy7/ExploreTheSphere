import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Packages</h2>
      <Outlet />
    </div>
  );
}
