import React from "react";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <>
        {/* <div className="preloader">
          <img src="../assets/images/logo.svg" alt="logo" />
          <div className="preloader-icon" />
        </div> */}
        <div className="sidebar" id="settings">
          <div className="sidebar-header">
            <div>
              <i className="bi bi-gear me-2" />
              Settings
            </div>
            <button data-sidebar-close="">
              <i className="bi bi-arrow-right" />
            </button>
          </div>
          <div className="sidebar-content">
            <ul className="list-group list-group-flush">
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault1"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault1"
                  >
                    Remember next visits
                  </label>
                </div>
              </li>
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault2"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    Enable report generation.
                  </label>
                </div>
              </li>
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault3"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault3"
                  >
                    Allow notifications.
                  </label>
                </div>
              </li>
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault4"
                  >
                    Hide user requests
                  </label>
                </div>
              </li>
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault5"
                    defaultChecked=""
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault5"
                  >
                    Speed up demands
                  </label>
                </div>
              </li>
              <li className="list-group-item px-0 border-0">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Hide menus
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="sidebar-action">
            <a href="#" className="btn btn-primary">
              All Settings
            </a>
          </div>
        </div>

        <div className="sidebar" id="search">
          <div className="sidebar-header">
            Search
            <button data-sidebar-close="">
              <i className="bi bi-arrow-right" />
            </button>
          </div>
          <div className="sidebar-content">
            <form className="mb-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-describedby="button-search-addon"
                />
                <button
                  className="btn btn-outline-light"
                  type="button"
                  id="button-search-addon"
                >
                  <i className="bi bi-search" />
                </button>
              </div>
            </form>
            <h6 className="mb-3">Last searched</h6>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-search" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Reports for 2021
                </a>
                <a
                  href="#"
                  className="btn text-danger btn-sm"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-search" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Current users
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-search" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Meeting notes
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
            </div>
            <h6 className="mb-3">Recently viewed</h6>
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-secondary avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-check-circle" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Todo list
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-warning avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-wallet2" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Pricing table
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-info avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-gear" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Settings
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
              <div className="d-flex align-items-center mb-3">
                <a href="#" className="avatar avatar-success avatar-sm me-3">
                  <span className="avatar-text rounded-circle">
                    <i className="bi bi-person-circle" />
                  </span>
                </a>
                <a href="#" className="flex-fill">
                  Users
                </a>
                <a
                  href="#"
                  className="btn"
                  data-bs-toggle="tooltip"
                  title="Remove"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-action">
            <a href="#" className="btn btn-danger">
              All Clear
            </a>
          </div>
        </div>

        <DashboardSidebar></DashboardSidebar>

        <div className="layout-wrapper">
          {/* header */}
          <div className="header">
            <div className="menu-toggle-btn">
              {" "}
              {/* Menu close button for mobile devices */}
              <a href="#">
                <i className="bi bi-list" />
              </a>
            </div>
            {/* Logo */}
            <a href="index.html" className="logo">
              <img width={100} src="../assets/images/logo.svg" alt="logo" />
            </a>
            {/* ./ Logo */}
            <div className="page-title">Dashboard</div>
            <form className="search-form">
              <div className="input-group">
                <button
                  className="btn btn-outline-light"
                  type="button"
                  id="button-addon1"
                >
                  <i className="bi bi-search" />
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <a
                  href="#"
                  className="btn btn-outline-light close-header-search-bar"
                >
                  <i className="bi bi-x" />
                </a>
              </div>
            </form>
            <div className="header-bar ms-auto">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link nav-link-notify"
                    data-count={2}
                    data-sidebar-target="#notifications"
                  >
                    <i className="bi bi-bell icon-lg" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link nav-link-notify"
                    data-count={3}
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-cart2 icon-lg" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                    <h6 className="m-0 px-4 py-3 border-bottom">
                      Shopping Cart
                    </h6>
                    <div className="dropdown-menu-body">
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <a
                            href="#"
                            className="text-danger me-3"
                            title="Remove"
                          >
                            <i className="bi bi-trash" />
                          </a>
                          <a href="#" className="me-3 flex-shrink-0 ">
                            <img
                              src="../assets/images/products/3.jpg"
                              className="rounded"
                              width={60}
                              alt="..."
                            />
                          </a>
                          <div>
                            <h6>Digital clock</h6>
                            <div>1 x $1.190,90</div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <a
                            href="#"
                            className="text-danger me-3"
                            title="Remove"
                          >
                            <i className="bi bi-trash" />
                          </a>
                          <a href="#" className="me-3 flex-shrink-0 ">
                            <img
                              src="../assets/images/products/4.jpg"
                              className="rounded"
                              width={60}
                              alt="..."
                            />
                          </a>
                          <div>
                            <h6>Toy Car</h6>
                            <div>1 x $139.58</div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <a
                            href="#"
                            className="text-danger me-3"
                            title="Remove"
                          >
                            <i className="bi bi-trash" />
                          </a>
                          <a href="#" className="me-3 flex-shrink-0 ">
                            <img
                              src="../assets/images/products/5.jpg"
                              className="rounded"
                              width={60}
                              alt="..."
                            />
                          </a>
                          <div>
                            <h6>Sunglasses</h6>
                            <div>2 x $50,90</div>
                          </div>
                        </div>
                      </div>
                      <div className="list-group list-group-flush">
                        <div className="list-group-item d-flex align-items-center">
                          <a
                            href="#"
                            className="text-danger me-3"
                            title="Remove"
                          >
                            <i className="bi bi-trash" />
                          </a>
                          <a href="#" className="me-3 flex-shrink-0 ">
                            <img
                              src="../assets/images/products/6.jpg"
                              className="rounded"
                              width={60}
                              alt="..."
                            />
                          </a>
                          <div>
                            <h6>Cake</h6>
                            <div>1 x $10,50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="m-0 px-4 py-3 border-top small">
                      Sub Total :{" "}
                      <strong className="text-primary">$1.442,78</strong>
                    </h6>
                  </div>
                </li>
                <li className="nav-item ms-3">
                  <button className="btn btn-primary btn-icon">
                    <i className="bi bi-plus-circle" /> Add Product
                  </button>
                </li>
              </ul>
            </div>
            {/* Header mobile buttons */}
            <div className="header-mobile-buttons">
              <a href="#" className="search-bar-btn">
                <i className="bi bi-search" />
              </a>
              <a href="#" className="actions-btn">
                <i className="bi bi-three-dots" />
              </a>
            </div>
            {/* ./ Header mobile buttons */}
          </div>
          {/* ./ header */}
          {/* content */}
          <div className="content ">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col-lg-4 col-md-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <div className="display-7">
                        <i className="bi bi-basket" />
                      </div>
                      <div className="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          className="btn btn-sm"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            View Detail
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <h4 className="mb-3">Orders</h4>
                    <div className="d-flex mb-3">
                      <div className="display-7">310</div>
                      <div className="ms-auto" id="total-orders" />
                    </div>
                    <div className="text-success">
                      Over last month 1.4%{" "}
                      <i className="small bi bi-arrow-up" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <div className="display-7">
                        <i className="bi bi-credit-card-2-front" />
                      </div>
                      <div className="dropdown ms-auto">
                        <a
                          href="#"
                          data-bs-toggle="dropdown"
                          className="btn btn-sm"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="bi bi-three-dots" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a href="#" className="dropdown-item">
                            View Detail
                          </a>
                          <a href="#" className="dropdown-item">
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                    <h4 className="mb-3">Sales</h4>
                    <div className="d-flex mb-3">
                      <div className="display-7">$3.759,00</div>
                      <div className="ms-auto" id="total-sales" />
                    </div>
                    <div className="text-danger">
                      Over last month 2.4%{" "}
                      <i className="small bi bi-arrow-down" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <h6 className="card-title">Recent Reviews</h6>
                      <div className="dropdown ms-auto">
                        <a href="#">View All</a>
                      </div>
                    </div>
                    <div className="summary-cards">
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="avatar me-3">
                            <img
                              src="../assets/images/user/women_avatar5.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div>
                            <h5 className="mb-1">Amara Keel</h5>
                            <ul className="list-inline ms-auto mb-0">
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-muted" />
                              </li>
                              <li className="list-inline-item mb-0">(4)</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          I love your products. It is very easy and fun to use
                          this panel.
                        </div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="avatar me-3">
                            <span className="avatar-text bg-indigo rounded-circle">
                              J
                            </span>
                          </div>
                          <div>
                            <h5 className="mb-1">Johnath Siddeley</h5>
                            <ul className="list-inline ms-auto mb-0">
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">(5)</li>
                            </ul>
                          </div>
                        </div>
                        <div>Very nice glasses. I ordered for my friend.</div>
                      </div>
                      <div>
                        <div className="d-flex align-items-center mb-3">
                          <div className="avatar me-3">
                            <span className="avatar-text bg-yellow rounded-circle">
                              D
                            </span>
                          </div>
                          <div>
                            <h5 className="mb-1">David Berks</h5>
                            <ul className="list-inline ms-auto mb-0">
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">
                                <i className="bi bi-star-fill text-warning" />
                              </li>
                              <li className="list-inline-item mb-0">(5)</li>
                            </ul>
                          </div>
                        </div>
                        <div>I am very satisfied with this product.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* data table */}
              <div className="col-lg-12 col-md-12">
                <div className="content">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-md-flex gap-4 align-items-center">
                        <div className="d-none d-md-flex">All Orders</div>
                        <div className="d-md-flex gap-4 align-items-center">
                          <form className="mb-3 mb-md-0">
                            <div className="row g-3">
                              <div className="col-md-3">
                                <select className="form-select">
                                  <option>Sort by</option>
                                  <option value="desc">Desc</option>
                                  <option value="asc">Asc</option>
                                </select>
                              </div>
                              <div className="col-md-3">
                                <select className="form-select">
                                  <option value={10}>10</option>
                                  <option value={20}>20</option>
                                  <option value={30}>30</option>
                                  <option value={40}>40</option>
                                  <option value={50}>50</option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <div className="input-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search"
                                  />
                                  <button
                                    className="btn btn-outline-light"
                                    type="button"
                                  >
                                    <i className="bi bi-search" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="dropdown ms-auto">
                          <a
                            href="#"
                            data-bs-toggle="dropdown"
                            className="btn btn-primary dropdown-toggle"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Actions
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="#" className="dropdown-item">
                              Action
                            </a>
                            <a href="#" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="table-responsive"
                    style={{ overflow: "hidden", outline: "none" }}
                    tabIndex={1}
                  >
                    <table
                      className="table table-custom table-lg mb-0"
                      id="orders"
                    >
                      <thead>
                        <tr>
                          <th>
                            <input
                              className="form-check-input select-all"
                              type="checkbox"
                              data-select-all-target="#orders"
                              id="defaultCheck1"
                            />
                          </th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Date</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Cortie Gemson</td>
                          <td>May 23, 2021</td>
                          <td>$239,00</td>
                          <td>
                            <span className="badge bg-primary">Processing</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Mathilde Tumilson</td>
                          <td>May 15, 2021</td>
                          <td>$650,50</td>
                          <td>
                            <span className="badge bg-dark">Shipped</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Audrye Heaford</td>
                          <td>Apr 24, 2021</td>
                          <td>$100,00</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Brantley Mell</td>
                          <td>Apr 10, 2021</td>
                          <td>$19</td>
                          <td>
                            <span className="badge bg-warning">Refunded</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Dominique Enriques</td>
                          <td>March 5, 2021</td>
                          <td>$150,00</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Cortie Gemson</td>
                          <td>May 23, 2021</td>
                          <td>$239,00</td>
                          <td>
                            <span className="badge bg-primary">Processing</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Mathilde Tumilson</td>
                          <td>May 15, 2021</td>
                          <td>$650,50</td>
                          <td>
                            <span className="badge bg-dark">Shipped</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Audrye Heaford</td>
                          <td>Apr 24, 2021</td>
                          <td>$100,00</td>
                          <td>
                            <span className="badge bg-success">Completed</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Brantley Mell</td>
                          <td>Apr 10, 2021</td>
                          <td>$19</td>
                          <td>
                            <span className="badge bg-warning">Refunded</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                          </td>
                          <td>
                            <a href="#">#3210</a>
                          </td>
                          <td>Dominique Enriques</td>
                          <td>March 5, 2021</td>
                          <td>$150,00</td>
                          <td>
                            <span className="badge bg-danger">Cancelled</span>
                          </td>
                          <td className="text-end">
                            <div className="d-flex">
                              <div className="dropdown ms-auto">
                                <a
                                  href="#"
                                  data-bs-toggle="dropdown"
                                  className="btn btn-floating"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="bi bi-three-dots" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <a href="#" className="dropdown-item">
                                    Show
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Edit
                                  </a>
                                  <a href="#" className="dropdown-item">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <nav className="mt-4" aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Dashboard;
