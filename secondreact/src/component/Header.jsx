import React from 'react';
import { Input } from 'antd';

const Header = () => {
    const Search = Input.Search;
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top navPage">
            <div className="container-fluid">
                <div className="navbar-header" id="topBox">

                    <div id="start">
                        <span className="iconTubiaoBox">
                            <span className="iconfont icon-align-top iconTubiao"></span>
                        </span>
                        <span className="iconBtn"></span>
                    </div>
                    <div id="search">
                        <Search
                        className = "searchInput"
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                        />
                    </div>
                    <div id="end">
                        <div className="rightIcon"><span className="iconfont icon-shexiangji"></span></div>
                        <div className="rightIcon"><span className="iconfont icon-shexiangji"></span></div>
                        <div className="rightIcon"><span className="iconfont icon-shexiangji"></span></div>
                        <div className="rightIcon"><span className="iconfont icon-shexiangji"></span></div>
                        <div className="rightIcon"><span className="iconfont icon-shexiangji"></span></div>
                    </div>
                </div>
            </div>
        </nav>
        
    );
}

export default Header;