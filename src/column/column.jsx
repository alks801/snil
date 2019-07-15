import React from "react";
import PropTypes from "prop-types";

import cc from "../class-compose";

import "./column.scss";

const componentClassName = "column";

export default class Column extends React.PureComponent {
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
    width: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    offset: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    htmlTag: PropTypes.string
  };

  static defaultProps = {
    htmlTag: "div",
    justify: "center",
    align: "top"
  };

  render() {
    const {
      htmlTag: HtmlTag,
      children,
      align,
      justify,
      width,
      offset,
      ...props
    } = this.props;

    const className = cc(
      componentClassName,
      align,
      justify,
      { width },
      { offset }
    );
    return (
      <HtmlTag {...props} className={className}>
        {children}
      </HtmlTag>
    );
  }
}
