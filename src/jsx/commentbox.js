var currentTitle = "Timeline";
var TopBarLeft = React.createClass({
    render: function(){
        return (
          <div className="nav-left">
            <div className="bar-icon" data-icon="ei-navicon"></div>
            <div className="bar-title"><span>{this.props.title}</span></div>
          </div>
        );
    }
});

var TopBarRight = React.createClass({
  render: function(){
    return (
      <div className="nav-right">
        <div className="bar-icon" data-icon="ei-tag"></div>
        <div className="bar-icon" data-icon="ei-camera"></div>
      </div>
    )
  }
});

var TopBar = React.createClass({
    render: function(){
        return (
          <div className="top-bar">
            <div className="nav">
                <TopBarLeft title={currentTitle}/>
                <TopBarRight />
            </div>
          </div>
        );
    }
});

var MainFrame = React.createClass({
  render: function(){
    return (
        <TopBar />
    );
  }
});

React.render(
  <MainFrame />,
  document.getElementById('content')
);