import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    const activeStyle = {
        color: 'blue',
        fontSize: '2rem'
    };

    // NavLink 는 Link 와 다르게 설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있다.

    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuBar;