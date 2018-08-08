import React, { Component } from 'react';

import './App.css';
import { SideBar } from "./containers/Sidebar";
import {MessageList} from './container/MesageList';
import {AddMessage} from './containers/AddMessage';

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <MessageList/>
          <AddMessage/>
        </section>
      </div>
    );
  }
}

export default App;
