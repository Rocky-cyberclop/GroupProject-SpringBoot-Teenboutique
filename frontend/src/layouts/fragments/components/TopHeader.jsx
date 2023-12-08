import React from 'react';

const TopHeader = () => (
    <div>
        <section className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-4">
                        <div className="contact-number">
                        <i className="tf-ion-ios-telephone"></i>
                        <span>0129- 12323-123123</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-4">
                        <div className="logo text-center">
                        <a href="index.html">
                            <svg width="135px" height="29px" viewBox="0 0 155 29" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                                fontSize="40" fontFamily="AustinBold, Austin" fontWeight="bold">
                                <g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
                                <text id="AVIATO">
                                    <tspan x="108.94" y="325">TEENBOUTIQUE</tspan>
                                </text>
                                </g>
                            </g>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 col-sm-4">                
                        <ul className="top-menu text-right list-inline">
                        <li className="dropdown cart-nav dropdown-slide">
                            <a href="/main/cart" className="dropdown-toggle">
                            <i className="tf-ion-android-cart"></i>Giỏ hàng
                            </a>
                        </li>
                        <li className="dropdown search dropdown-slide">
                            <a href="#!" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
                            <i className="tf-ion-ios-search-strong"></i> Search
                            </a>
                            <ul className="dropdown-menu search-dropdown">
                            <li>
                                <form action="post">
                                <input type="search" className="form-control" placeholder="Search..." />
                                </form>
                            </li>
                            </ul>
                        </li>
                        <li className="dropdown login dropdown-slide">
                            <a href="/login" className="dropdown-toggle">
                            <i className="tf-ion-android-person"></i>Đăng nhập
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  
);

export default TopHeader;