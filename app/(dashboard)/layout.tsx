import Header from "@cd/components/header.component";
import SideBarComponent from "@cd/components/side-bar.component";
import { headerHeight } from "@cd/lib/general-sizes.data";
import React from "react";

const DashboardLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="dashboard-layout">
      <SideBarComponent />
      <section
        style={{
          flex: 1,
          height: "100%",
          padding: "0 10px",
          position: "relative",
        }}
      >
        <Header />
        <main
          style={{
            width: "100%",
            height: `calc(100% - ${headerHeight})`,
          }}
          className="dashboard-layout-children"
        >
          {children}
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
