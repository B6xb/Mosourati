"use client";

import "../styles/index.css";

import SidebarMenu from "react-bootstrap-sidebar-menu";

const MosouratiNavBar = (props) => {
  return (
    <SidebarMenu className="sidebar flex items-center">
      <SidebarMenu.Body>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon className="sideBarIcon pr-[10px]">
              B
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>Bander Mutairi</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Sub>
          <SidebarMenu.Sub.Toggle>
            <SidebarMenu.Nav.Icon />
            <SidebarMenu.Nav.Title>Recent</SidebarMenu.Nav.Title>
          </SidebarMenu.Sub.Toggle>
          <SidebarMenu.Sub.Collapse>
            <SidebarMenu.Nav>
              <SidebarMenu.Nav.Link>
                <SidebarMenu.Nav.Icon>Personal</SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>Commission</SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
          </SidebarMenu.Sub.Collapse>
        </SidebarMenu.Sub>
      </SidebarMenu.Body>
    </SidebarMenu>
  );
};

export default MosouratiNavBar;
