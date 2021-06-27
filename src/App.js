// import { tSImportEqualsDeclaration } from "@babel/types";
// import { name } from "commander";
import React, { Component } from "react";
import shortid from "shortid";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { name: "Rosie Simpson" },
      { name: "Hermione Kline" },
      { name: "Eden Clements" },
    ],
    name: "",
  };

  idName = shortid.generate();

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
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(({ name }) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default App;
