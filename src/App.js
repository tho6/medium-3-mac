import './App.scss';
import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false }
  }

  toggleSidebar() {
    this.setState({expanded: !this.state.expanded})
  }

  render() {
    return (
      <main>
        <Sidebar toggleSidebar={this.toggleSidebar.bind(this)} expanded={this.state.expanded} />
        <Content expanded={this.state.expanded} />
      </main>
    );
  }
}

export default App;
