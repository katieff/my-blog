import React from 'react';
import ReactDom from 'react-dom';

export default class Hello extends React.Component {
    render() {
        return (
        <div className="row">
            <div className="one-half column" >
            <h2>Hello</h2>
            <p>Welcome to my blog. The style is responsive design: <a href="http://www.getskeleton.com">Skeleton documentation</a>.</p>
            </div>
        </div>);
    }
}

// ReactDom.render(<Hello/>, document.getElementById('hello'));