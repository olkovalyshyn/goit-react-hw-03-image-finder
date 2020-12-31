import PropTypes from "prop-types";

import s from "./Button.module.css";

function Button({ onClickButton }) {
  return (
    <button className={s.Button} type="button" onClick={onClickButton}>
      Load more
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClickButton: PropTypes.func,
};
