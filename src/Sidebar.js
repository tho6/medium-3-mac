import React from 'react';
import full from './image/full.png';
import small from './image/small.png';
import Avatars from './image/Avatars.svg';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let showFull = this.props.expanded;

        return (
            <div className={this.props.expanded ? "sidebar sidebar--expanded" : "sidebar"} onClick={this.props.toggleSidebar} >

                {/* <button onClick={this.props.toggleSidebar}>Hide</button>
                <button onClick={this.props.toggleSidebarLock}>Lock</button> */}

                {showFull &&
                    <div className="sidebar-full">
                        <div>
                            <img src={full} width='200px' />
                        </div>
                        <div className="sidebar-full-items-container">
                            <div className="sidebar-full-items"><img src={Avatars} /> Dashboard</div>
                            <div className="sidebar-full-items"><img src={Avatars} /> Download Permission File</div>
                        </div>
                    </div>
                }


                {!showFull &&
                    <div className="sidebar-small">
                        {/* <button onClick={this.props.toggleSidebar}>Show</button> */}
                        <div>
                            <img src={small} width='40px' />
                        </div>
                        <div className="sidebar-small-items-container">
                            <img className="sidebar-small-items" src={Avatars} />
                            <img className="sidebar-small-items" src={Avatars} />
                            <img className="sidebar-small-items" src={Avatars} />
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default Sidebar;