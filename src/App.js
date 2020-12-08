import './App.scss';
import React from 'react';
import Sidebar from './Sidebar';
import Content from './Content';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: true } // default small screen
  }

  toggleSidebar() {
    this.setState({ expanded: !this.state.expanded })
  }

  toggleSidebarLock() {
    this.setState({ expanded: true })
  }

    // test
    // touchAnywhere = () => {
    //   this.setState(() => ({ expanded: false}))
    // }

    
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
