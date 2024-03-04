import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((info) => setCategories(info));
  }, []);
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <a href="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-sm-dark.png"
                    alt="logo-sm-dark"
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-dark.png"
                    alt="logo-dark"
                    height={22}
                  />
                </span>
              </a>
              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-sm-light.png"
                    alt="logo-sm-light"
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-light.png"
                    alt="logo-light"
                    height={22}
                  />
                </span>
              </a>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="ri-menu-2-line align-middle" />
            </button>
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="input-group">
                <button
                  className="btn btn-rounded dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects <i className="mdi mdi-chevron-down ms-2" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Users
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Projects
                    </a>
                  </li>
                </ul>
                <input
                  type="text"
                  className="form-control bg-transparent"
                  placeholder="Search.."
                  aria-label="Text input with dropdown button"
                />
                <span className="mdi mdi-magnify" />
              </div>
            </form>
            <div className="dropdown dropdown-mega d-none d-xl-block ms-2">
              <button
                type="button"
                className="btn header-item waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="false"
                aria-expanded="false"
              >
                Mega Menu
                <i className="mdi mdi-chevron-down" />
              </button>
              <div className="dropdown-menu dropdown-megamenu">
                <div className="row">
                  <div className="col-sm-8">
                    <div className="row">
                      <div className="col-md-4">
                        <h5 className="font-size-14 mt-0">UI Components</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="javascript:void(0);">Lightbox</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Range Slider</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Sweet Alert</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Rating</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Forms</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Tables</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Charts</a>
                          </li>
                        </ul>
                      </div>
                      {/* end col */}
                      <div className="col-md-4">
                        <h5 className="font-size-14 mt-0">Applications</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="javascript:void(0);">Ecommerce</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Calendar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Email</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Projects</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Tasks</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Contacts</a>
                          </li>
                        </ul>
                      </div>
                      {/* end col */}
                      <div className="col-md-4">
                        <h5 className="font-size-14 mt-0">Extra Pages</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="javascript:void(0);">Light Sidebar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Compact Sidebar</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Horizontal layout</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Maintenance</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Coming Soon</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Timeline</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">FAQs</a>
                          </li>
                        </ul>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end col */}
                  <div className="col-sm-4">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="font-size-14 mt-0">UI Components</h5>
                        <ul className="list-unstyled megamenu-list">
                          <li>
                            <a href="javascript:void(0);">Lightbox</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Range Slider</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Sweet Alert</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Rating</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Forms</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Tables</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Charts</a>
                          </li>
                        </ul>
                      </div>
                      {/* end col */}
                      <div className="col-sm-5">
                        <div>
                          <img
                            src="assets/images/megamenu-img.png"
                            alt="megamenu-img"
                            className="img-fluid mx-auto d-block"
                          />
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end col */}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="top-icon">
                  <i className="ri-search-line" />
                </div>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                      />
                      <button className="btn btn-primary" type="submit">
                        <i className="ri-search-line" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* end */}
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="top-icon">
                  <i className="mdi mdi-apps" />
                </div>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <div className="px-lg-2">
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/github.png" alt="Github" />
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/bitbucket.png"
                          alt="bitbucket"
                        />
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>
                  <div className="row g-0">
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img
                          src="assets/images/brands/mail_chimp.png"
                          alt="mail_chimp"
                        />
                        <span>Mail Chimp</span>
                      </a>
                    </div>
                    <div className="col">
                      <a className="dropdown-icon-item" href="#">
                        <img src="assets/images/brands/slack.png" alt="slack" />
                        <span>Slack</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <div className="top-icon">
                  <i className="mdi mdi-fullscreen" />
                </div>
              </button>
            </div>
            {/* end  */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="top-icon">
                  <i className="mdi mdi-bell" />
                </div>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0">Notifications</h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small">
                        {" "}
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar="" style={{ maxHeight: 230 }}>
                  <a href="" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="ri-shopping-cart-line" />
                        </span>
                      </div>
                      <div className="flex-1">
                        <h6 className="mt-0 mb-1">Your order is placed</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-3.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-1">
                        <h6 className="mt-0 mb-1">James Lemire</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            It will seem like simplified English.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 1 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="ri-checkbox-circle-line" />
                        </span>
                      </div>
                      <div className="flex-1">
                        <h6 className="mt-0 mb-1">Your item is shipped</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            If several languages coalesce the grammar
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 3 min ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" className="text-reset notification-item">
                    <div className="d-flex">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        className="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div className="flex-1">
                        <h6 className="mt-0 mb-1">Salena Layfield</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p className="mb-0">
                            <i className="mdi mdi-clock-outline" /> 1 hours ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-2 border-top">
                  <div className="d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href="javascript:void(0)"
                    >
                      <i className="mdi mdi-arrow-right-circle me-1" /> View More..
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end notification */}
            <div className="dropdown d-inline-block user-dropdown">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src="assets/images/users/avatar-7.jpg"
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">Malvika</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="#">
                  <i className="ri-user-line align-middle me-1" /> Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-wallet-2-line align-middle me-1" /> My Wallet
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge bg-success float-end mt-1">11</span>
                  <i className="ri-settings-2-line align-middle me-1" />
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="ri-lock-unlock-line align-middle me-1" /> Lock screen
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="#">
                  <i className="ri-shut-down-line align-middle me-1 text-danger" />
                  Logout
                </a>
              </div>
            </div>
            {/* end user */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <div className="top-icon">
                  <i className="mdi mdi-cog-outline mdi-spin" />
                </div>
              </button>
            </div>
            {/* end setting */}
          </div>
        </div>
      </header>

    </>
  );
};

export default NavBar;
