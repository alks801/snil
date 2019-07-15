import React from "react";
import PropTypes from "prop-types";

import cc from "../class-compose";

import "./row.scss";

const componentClassName = "row";

export default class Row extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    align: PropTypes.oneOf(["top", "middle", "bottom"]),
    justify: PropTypes.oneOf([
      "left",
      "center",
      "right",
      "space-around",
      "space-between"
    ]),
    htmlTag: PropTypes.string
  };

  static defaultProps = {
    htmlTag: "div",
    justify: "space-between",
    align: "top"
  };

  render() {
    const { htmlTag: HtmlTag, children, align, justify, ...props } = this.props;
    const className = cc(componentClassName, align, justify);

    return (
      <HtmlTag {...props} className={className}>
        {children}
      </HtmlTag>
    );
  }
}
