import React, {Component} from 'react';

class Tabs extends Component {

  displayName: 'Tabs'

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.selected !== this.props.selected) {
      this.setState( {
        selected: nextProps.selected
      });
      this.props.onClick(nextProps.selected);
    }
  }

  defaultProps = {
      selected: 0
  }

  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
    this.props.onClick(index);
  }

  _renderContent() {

    let children = React.Children.toArray(this.props.children);

    return (
      <div className="tab-pane">
        {children[this.state.selected]}
      </div>
    );
  }

  _renderTitles() {

    function labels(child, index) {

      let activeClass = (this.state.selected === index ? 'active' : '');

      return (
        <li key={index} className={activeClass}>
          <a data-toggle="tab"
             onClick={this.handleClick.bind(this, index)}><i className={child.props.fontType}></i>
              {child.props.label}
          </a>
        </li>
      );
    }

    let children = React.Children.toArray(this.props.children);
    return (
      <ul className="nav nav-tabs">
        {children.map(labels.bind(this))}
      </ul>
    );
  }

  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        {this._renderContent()}
      </div>
    );
  }
}

export default Tabs;
