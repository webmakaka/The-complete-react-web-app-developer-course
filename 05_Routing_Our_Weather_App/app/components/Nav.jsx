var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function(){
//         return (
//             <div>
//                 <h2>Nav Component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>&nbsp; | &nbsp;
//                 <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>&nbsp; | &nbsp;
//                 <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>&nbsp; ||| &nbsp;
//
//                 <a href="#/about">Go To About</a>
//             </div>
//
//         );
//     }
// });

var Nav = () => {
    return (
        <div>
            <h2>Nav Component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>&nbsp; | &nbsp;
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>&nbsp; | &nbsp;
            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>&nbsp; ||| &nbsp;

            <a href="#/about">Go To About</a>
        </div>
    );
}

module.exports = Nav;
