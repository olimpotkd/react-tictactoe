import PropTypes from "prop-types";

const Square = ({ squareData, handleOnClick, x, y }) => {
  const squareClick = () => {
    handleOnClick(x, y);
  };

  return (
    <td
      className={squareData.highlight ? "highlight" : ""}
      onClick={squareClick}
    >
      {squareData.value}
    </td>
  );
};

Square.propTypes = {
  squareData: PropTypes.object.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Square;
