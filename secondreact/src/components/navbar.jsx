import React from 'react';

//stateless Functional Component

const NavBar = (props) => {
    return (
            <nav className="navbar navbar-light bg-light">
                <a href="www.baidu.com" className="navbar-brand">navbar <span className="btn btn-danger btn-sm m-2">{props.totalCounters}</span></a>

            </nav>
        )

}
/*class NavBar extends Component {


    render() {
        return (
        )
    }
}*/

export default NavBar;