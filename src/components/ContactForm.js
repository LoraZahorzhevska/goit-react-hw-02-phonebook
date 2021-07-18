import React, { Component } from "react";
import shortid from "shortid";
import s from "./styles.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class Form extends Component {
  state = { ...INITIAL_STATE };

  idName = shortid.generate();
  idNumber = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              id={this.idName}
              placeholder="Your name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              className={s.input}
              type="tel"
              name="number"
              placeholder="+38-000-000-00-00"
              id={this.idNumber}
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
