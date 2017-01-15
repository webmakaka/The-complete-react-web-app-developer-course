
var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
    return  (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">
                        React Timer App
                    </li>
                    <li>
                        <indexLink to="/" activeClassName="active-link">Timer</indexLink>
                    </li>
                    <li>
                        <Link to="/" activeClassName="active-link">Timer</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/marley-react/The-Complete-React-Web-App-Developer-Course" target="_blank">Marley</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navigation;
