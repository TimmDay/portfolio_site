import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1> Timmday </h1>
                </Link>
                <div className="header__title">menu item1</div>
                <div className="header__title">menu item2</div>
                <div className="header__title">menu item3</div>
                <button className="button button--link" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);


{/* first link not needed any more*/
}
{/*<li><NavLink to="/" activeClassName="is-active" exact={true}>log in</NavLink></li> */
}

{/*<li><NavLink to="/create" activeClassName="is-active" exact={false}>add expense</NavLink></li>*/
}
{/*<li><NavLink to="/help" activeClassName="is-active" exact={false}>help</NavLink></li>*/
}
{/*<NavLink to="/dogs" activeClassName="is-active" exact={false}>broken link</NavLink>*/
}
