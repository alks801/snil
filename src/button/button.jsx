import React from "react";
import PropTypes from "prop-types";

import cc from "../class-compose";

import "./button.scss";

const componentClassName = "button";

class Button extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(["s", "m", "l"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    size: "m",
    disabled: false
  };

  handleClick = e => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    console.log(this.props);
    const { handleClick } = this;
    const { children, text, size, disabled } = this.props;

    const buttonContent = (children || text) && (
      <span key="content" className={cc("content")}>
        {children || text}
      </span>
    );
    const buttonClassName = cc(componentClassName, { disabled }, { size });
    return (
      <button className={buttonClassName} onClick={handleClick}>
        {buttonContent}
      </button>
    );
  }
}

export default Button;
