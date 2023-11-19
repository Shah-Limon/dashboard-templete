import React from "react";

const DashboardSidebar = () => {
  return (
    <>
      <div className="menu">
        <div className="menu-header">
          <a href="index.html" className="menu-header-logo">
            <img src="../assets/images/logo.svg" alt="logo" />
          </a>
          <a href="index.html" className="btn btn-sm menu-close-btn">
            <i className="bi bi-x" />
          </a>
        </div>
        <div className="menu-body">
          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <div className="avatar me-3">
                <img
                  src="../assets/images/user/man_avatar3.jpg"
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div>
                <div className="fw-bold">Timotheus Bendan</div>
                <small className="text-muted">Sales Manager</small>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-person dropdown-item-icon" /> Profile
              </a>
              <a href="#" className="dropdown-item d-flex align-items-center">
                <i className="bi bi-envelope dropdown-item-icon" /> Inbox
              </a>
              <a
                href="#"
                className="dropdown-item d-flex align-items-center"
                data-sidebar-target="#settings"
              >
                <i className="bi bi-gear dropdown-item-icon" /> Settings
              </a>
              <a
                href="./login.html"
                className="dropdown-item d-flex align-items-center text-danger"
                target="_blank"
              >
                <i className="bi bi-box-arrow-right dropdown-item-icon" />{" "}
                Logout
              </a>
            </div>
          </div>
          <ul>
            <li className="menu-divider">E-Commerce</li>
            <li>
              <a className="active" href="index.html">
                <span className="nav-link-icon">
                  <i className="bi bi-bar-chart" />
                </span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="nav-link-icon">
                  <i className="bi bi-receipt" />
                </span>
                <span>Orders</span>
              </a>
              <ul>
                <li>
                  <a href="./orders.html">List</a>
                </li>
                <li>
                  <a href="./order-detail.html">Detail</a>
                </li>
              </ul>
            </li>

            <li className="menu-divider">Pages</li>
            <li>
              <a href="#">
                <span className="nav-link-icon">
                  <i className="bi bi-person" />
                </span>
                <span>Profile</span>
              </a>
              <ul>
                <li>
                  <a href="./profile-posts.html">Post</a>
                </li>
                <li>
                  <a href="./profile-connections.html">Connections</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="nav-link-icon">
                  <i className="bi bi-person-circle" />
                </span>
                <span>Users</span>
              </a>
              <ul>
                <li>
                  <a href="./user-list.html">List View</a>
                </li>
                <li>
                  <a href="./user-grid.html">Grid View</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="nav-link-icon">
                  <i className="bi bi-lock" />
                </span>
                <span>Authentication</span>
              </a>
              <ul>
                <li>
                  <a href="./login.html" target="_blank">
                    Login
                  </a>
                </li>
                <li>
                  <a href="./register.html" target="_blank">
                    Register
                  </a>
                </li>
                <li>
                  <a href="./reset-password.html" target="_blank">
                    Reset Password
                  </a>
                </li>
                <li>
                  <a href="./lock-screen.html" target="_blank">
                    Lock Screen
                  </a>
                </li>
                <li>
                  <a href="./account-verified.html" target="_blank">
                    Account Verified
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="nav-link-icon">
                  <i className="bi bi-exclamation-octagon" />
                </span>
                <span>Error Pages</span>
              </a>
              <ul>
                <li>
                  <a href="./404.html" target="_blank">
                    404
                  </a>
                </li>
                <li>
                  <a href="./access-denied.html">Access Denied</a>
                </li>
                <li>
                  <a href="./under-construction.html" target="_blank">
                    Under Construction
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./settings.html">
                <span className="nav-link-icon">
                  <i className="bi bi-gear" />
                </span>
                <span>Settings</span>
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
