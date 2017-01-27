import React from 'react';

const Sidebar = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <li className="active treeview">
          <a href="#">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right" />
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="index.html"><i className="fa fa-circle-o" /> Dashboard v1</a></li>
            <li className="active"><a href="index2.html"><i className="fa fa-circle-o" /> Dashboard v2</a></li>
          </ul>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-files-o" />
            <span>Layout Options</span>
            <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o" /> Top Navigation</a></li>
            <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o" /> Boxed</a></li>
            <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o" /> Fixed</a></li>
            <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o" /> Collapsed Sidebar</a></li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
);


export default Sidebar;
