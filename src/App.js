import logo from './logo.svg';
import StyledComponentDemo from "./views/StyledComponentDemo";
import React from "react";
import styled from "styled-components"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import InlineStyleDemo from "./views/InlineStyleDemo";
import CSSFileBEMDemo from "./views/CSSFileBEMDemo";
import CSSModuleDemo from "./views/CSSModuleDemo";

export default function App() {
    const Home = () => <h1>React CSS Demos</h1>
    const Nav = styled.nav`
        background-color: #282c34;
        height: 100px;
        margin: 16px 0;
        & ul {
           display: flex;
           justify-content: center;
           align-items: center;
           height: 100%;
           & li {
              color: #61dafb;
              list-style: none;
              & a {
                text-decoration: none;
                color: #fff;
                font-weight: bold;
                padding: 16px;
                border-radius: 4px;
                &:hover {
                  color: #61dafb;
                  background-color: gray;
                }
              }
           }
        }
`

    return (
        <Router>
            <div>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/InlineStyleDemo">InlineStyle</Link>
                        </li>
                        <li>
                            <Link to="/StyledComponentDemo">StyledComponent</Link>
                        </li>
                        <li>
                            <Link to="/CSSFileBEMDemo">CSSFileBEM</Link>
                        </li>
                        <li>
                            <Link to="/CSSModuleDemo">CSSModule</Link>
                        </li>
                    </ul>
                </Nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/InlineStyleDemo">
                        <InlineStyleDemo/>
                    </Route>
                    <Route path="/StyledComponentDemo">
                        <StyledComponentDemo/>
                    </Route>
                    <Route path="/CSSFileBEMDemo">
                        <CSSFileBEMDemo/>
                    </Route>
                    <Route path="/CSSModuleDemo">
                        <CSSModuleDemo/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );

}

