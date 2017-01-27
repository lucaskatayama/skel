import React from 'react';

const NavbarTop = () => (
  <nav className="navbar navbar-static-top">
    <a className="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        <li className="dropdown messages-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-envelope-o" />
            <span className="label label-success">4</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 4 messages</li>
            <li>
              <ul className="menu">
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      Support Team
                      <small><i className="fa fa-clock-o" /> 5 mins</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      AdminLTE Design Team
                      <small><i className="fa fa-clock-o" /> 2 hours</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      Developers
                      <small><i className="fa fa-clock-o" /> Today</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      Sales Department
                      <small><i className="fa fa-clock-o" /> Yesterday</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="pull-left">
                      <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />
                    </div>
                    <h4>
                      Reviewers
                      <small><i className="fa fa-clock-o" /> 2 days</small>
                    </h4>
                    <p>Why not buy a new awesome theme?</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer"><a href="#">See All Messages</a></li>
          </ul>
        </li>

        <li className="dropdown notifications-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o" />
            <span className="label label-warning">10</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 10 notifications</li>
            <li>

              <ul className="menu">
                <li>
                  <a href="#">
                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-warning text-yellow" /> Very long description here that may not fit into the
                    page and may cause design problems
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-users text-red" /> 5 new members joined
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-user text-red" /> You changed your username
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer"><a href="#">View all</a></li>
          </ul>
        </li>

        <li className="dropdown tasks-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-flag-o" />
            <span className="label label-danger">9</span>
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 9 tasks</li>
            <li>
              <ul className="menu">
                <li>
                  <a href="#">
                    <h3>
                      Design some buttons
                      <small className="pull-right">20%</small>
                    </h3>
                    <div className="progress xs">
                      <div className="progress-bar progress-bar-aqua" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer">
              <a href="#">View all tasks</a>
            </li>
          </ul>
        </li>
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="user-image" alt="User Image" />
            <span className="hidden-xs">Alexander Pierce</span>
          </a>
          <ul className="dropdown-menu">
            <li className="user-header">
              <img src="http://gravatar.com/avatar/54d4074475d7e585e2d7bba4eb92525.jpg" className="img-circle" alt="User Image" />

              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            <li className="user-body">
              <div className="row">
                <div className="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
            </li>
            <li className="user-footer">
              <div className="pull-left">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href="#" className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
        </li>
      </ul>
    </div>

  </nav>
);

export default NavbarTop;
