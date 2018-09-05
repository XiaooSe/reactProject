import React from 'react';
import { BrowserRouter as Router,Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;


const leftSideBar = {
    width: '240px',
    overflowY: 'hidden',
    overflowX: 'hidden',
    zIndexndex: '1',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: 0,
    right: '56px'
}

const leftSideSlim = {
    position: 'fixed',
    top: '-120px',
    bottom: '-120px',
    left: 0,
    backgroundColor: '#f5f5f5',
    wordWrap: 'break-word',
    wordreak: 'break-all',
    width: '246px',
    overflowY: 'auto',
    overflowX: 'hidden',
    zIndexndex: '1'
}

const menuBgc = {
    backgroundColor: '#f5f5f5',
    paddingTop: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid #eee'
}

const menuHeader = {
    paddingLeft: '23px',
    fontSize: '14px',
    fontWeight: 500,
    letterSpacing: '1px',
    color: '#686868'
}

const marginZero = {
    margin: '0'
}

class leftNav extends React.Component {


    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            //滚动条变窄
            <Router>
                <div style={leftSideBar}>
                    <div style = {leftSideSlim}>
                        <div  style={{ width: '240px', marginTop: '56px', padding: '120px 0' }}>
                            {/*<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>*/}
                                {/*<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />*/}
                            {/*</Button>*/}
                            <Menu
                                style={menuBgc}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="#f5f5f5"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span><Link to="/main/index">首页</Link></span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span><Link to="/main/home">时下流行</Link></span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox" />
                                    <span><Link to="/main/user">订阅内容</Link></span>
                                </Menu.Item>
                            </Menu>
                            <Menu
                                    style={menuBgc}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="#f5f5f5"
                                    inlineCollapsed={this.state.collapsed}
                                >
                                    {/*<h4 style={menuHeader}>媒体库</h4>*/}
                                    <Menu.Item key="4">
                                        <Icon type="pie-chart" />
                                        <span>历史记录</span>
                                    </Menu.Item>
                                    <Menu.Item key="5">
                                        <Icon type="desktop" />
                                        <span>稍后观看</span>
                                    </Menu.Item>
                                    <Menu.Item key="6">
                                        <Icon type="inbox" />
                                        <span>顶过的视频</span>
                                    </Menu.Item>
                                    <SubMenu key="sub3" title="更多信息">
                                        <Menu.Item key="7">react</Menu.Item>
                                        <Menu.Item key="8">健身</Menu.Item>
                                    </SubMenu>
                            </Menu>
                            <Menu
                                style={menuBgc}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="#f5f5f5"
                                inlineCollapsed={this.state.collapsed}
                            >
                                {/*<h4 style={menuHeader}>订阅内容</h4>*/}
                                <Menu.Item key="7">
                                    <Icon type="pie-chart" />
                                    <span>订阅1</span>
                                </Menu.Item>
                                <Menu.Item key="8">
                                    <Icon type="desktop" />
                                    <span>订阅2</span>
                                </Menu.Item>
                                <Menu.Item key="9">
                                    <Icon type="inbox" />
                                    <span>订阅3</span>
                                </Menu.Item>
                                <SubMenu key="sub3" title="更多订阅">
                                    <Menu.Item key="7">react</Menu.Item>
                                    <Menu.Item key="8">健身</Menu.Item>
                                </SubMenu>
                            </Menu>
                            <Menu
                                style={menuBgc}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="#f5f5f5"
                                inlineCollapsed={this.state.collapsed}
                            >
                                {/*<h4 style={menuHeader}>更多YouTuBe产品与功能</h4>*/}
                                <Menu.Item key="10">
                                    <Icon type="pie-chart" />
                                    <span>产品1</span>
                                </Menu.Item>
                                <Menu.Item key="11">
                                    <Icon type="desktop" />
                                    <span>产品2</span>
                                </Menu.Item>
                                <Menu.Item key="12">
                                    <Icon type="inbox" />
                                    <span>产品3</span>
                                </Menu.Item>
                            </Menu>
                            <Menu
                                style={menuBgc}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="#f5f5f5"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <Menu.Item key="13">
                                    <Icon type="pie-chart" />
                                    <span>设置</span>
                                </Menu.Item>
                                <Menu.Item key="14">
                                    <Icon type="desktop" />
                                    <span>举报记录</span>
                                </Menu.Item>
                                <Menu.Item key="15">
                                    <Icon type="inbox" />
                                    <span>帮助</span>
                                </Menu.Item>
                                <Menu.Item key="16">
                                    <Icon type="inbox" />
                                    <span>发送反馈</span>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default leftNav;