import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <section className={this.props.expanded ? "main-content main-content--expanded" : "main-content"}>
                <div className="container">
                    <div>
                        12345
                    </div>
                    {/* <div className="module--full">
                    </div>
                    <div className="module-wrapper">
                        <div className="module--half">
                        </div>
                        <div className="module--half">
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default Content;