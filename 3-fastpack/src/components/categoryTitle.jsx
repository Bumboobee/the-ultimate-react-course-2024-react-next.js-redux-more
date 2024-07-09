import PropTypes from "prop-types";

const CategoryTitle = ({ code, icon, title }) => {
  return (
    <label
      className={`text-sm uppercase font-bold flex px-0.5 py-0.5 rounded mb-2 ${
        code === "OB"
          ? "text-yellow-300 bg-yellow-600"
          : "text-blue-900 bg-blue-200 "
      }`}
    >
      {icon}
      {title}
    </label>
  );
};

CategoryTitle.propTypes = {
  code: PropTypes.string,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default CategoryTitle;
