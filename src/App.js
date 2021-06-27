// import { tSImportEqualsDeclaration } from "@babel/types";
// import { name } from "commander";
import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { name: "Rosie Simpson", number: "459-12-56" },
      { name: "Hermione Kline", number: "443-89-12" },
      { name: "Eden Clements", number: "645-17-79" },
    ],
    name: "",
    number: "",
  };

  idName = shortid.generate();
  idNumber = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.PreventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name{""}
            <input
              type="text"
              name="name"
              id={this.idName}
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number{""}
            <input
              type="tel"
              name="number"
              id={this.idNumber}
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name, number }) => {
            return (
              <li key={name}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
