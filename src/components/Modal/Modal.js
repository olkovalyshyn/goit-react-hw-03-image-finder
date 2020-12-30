import React, { Component } from "react";
import { createPortal } from "react-dom";

import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    // console.log("Клікнули в бекдроп");
    // console.log("event.currentTarget", event.currentTarget);
    // console.log("event.target", event.target);
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;