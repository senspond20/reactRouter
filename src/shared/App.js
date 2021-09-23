import React, { Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import { Home, About } from '../pages';
import MenuBar from "../components/MenuBar";

class App extends Component {
    render() {
        return (
            <div>
                <MenuBar/>
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