import PropTypes from "prop-types";
import s from "./styles.module.css";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={s.form}>
      <label htmlFor="filter">
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="filter"
          placeholder="Search"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;
