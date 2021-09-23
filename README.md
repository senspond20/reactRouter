# React SSR

Start

```
$ npm install -g yarn
$ npx create-react-app .
$ yarn add react-router-dom
$ yarn add cross-env --dev
```


## React Router

```
$ yarn add query-string
```

> Sample-Code

+ src/shared/App.js

```js
import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import { Home, About } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>

                {/*
                    먼저 비교 할 라우트를 위에 작성하셔야 한다
                    만약에 /about 을 /about/:name 보다 위에 넣어준다면, name 을 입력해주어도 나타나지 않는다..
                */}
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        );
    }
}

export default App;
```

+ src/pages/About.js

```js
import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: http://localhost:3000/about?detail=true'}
        </div>
    );
};

export default About;
```

