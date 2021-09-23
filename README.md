# React SSR
+ [1. React Router](#1-react-router)


Install
```
$ npm install
$ yarn install
```

Start
```
$ npm run start
$ yarn start
```

Build
```
$ npm run build
$ yarn build
```



## 1. React Router

```
$ yarn add react-router-dom
$ yarn add query-string
```

> Sample-Code

+ **src/client/Root.js**

```js
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;
```

+ **src/shared/App.js**

```js
import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import { Home, About } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <MenuBar/>
                {/* exact - 주어진 경로와 정확히 맞아 떨어져야만 설정한 컴포넌트를 보여준다*/}
                <Route exact path="/" component={Home}/>

                {/*
                    Switch 가 없으면 /about:name 요청시 /about 과 /about:name 이 중첩되어 요청된다
                    먼저 비교 할 라우트를 위에 작성하셔야 한다
                    만약에 /about 을 /about/:name 보다 위에 넣어준다면, name 을 입력해주어도 나타나지 않는다..
                */}
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
            </div>
        );
    }
}

export default App;
```

+ **src/pages/About.js**

```js
import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {/* ?detail=true 로 들어올때만 출력된다*/}
            {detail && 'detail: http://localhost:3000/about?detail=true'}
        </div>
    );
};

export default About;
```

+ **src/components/Menubar.js**

```js
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    const activeStyle = {
        color: 'blue',
        fontSize: '2rem'
    };

    // NavLink 는 Link 와 다르게 설정한 URL 이 활성화가 되면, 
    // 특정 스타일 혹은 클래스를 지정 할 수 있다.
    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
};

export default MenuBar;
```

+ **src/components/Posts.js**

```js
import React from 'react';
import { Link, Route } from 'react-router-dom';
import Post  from './Post';

const Posts = ({match}) => {
    const ulStyle = {fontSize : '22px'}

    return (
        <div>
            <h2>Post List</h2>
            <ul style={ulStyle}>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;
```

+ **src/components/Post.js**

```js
import React from 'react';

const Post = ({match, location}) => {
    const iStyle = {fontSize : '22px'}
    const labelStyle ={color : 'green'}

    return (
        <div style={iStyle}>
            <hr/>
            {/* 
                match.params.id   : 3
                location.pathname : /posts/4
                match.path        : /posts/:id
                match.url         : /posts/4
            */}
            <p><label style={labelStyle}>match.params.id : </label>{match.params.id}</p>
            <p><label style={labelStyle}>location.pathname : </label>{location.pathname}</p>
            <p><label style={labelStyle}>match.path : </label>{match.path}</p>
            <p><label style={labelStyle}>match.url : </label>{match.url}</p>
        </div>

    );
};

export default Post;
```
