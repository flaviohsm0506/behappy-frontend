import React, { Component } from "react";

import Label from "../Label";
import Input from "../Input";
import GenderImage from "../GenderImage";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Minora"
      },
      validation: {
        invalidName: false
      }
    };
  }

  updateUserName = event => {
    let user = this.state.user;
    user.name = event.target.value;
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="center">
        <form className="pure-form pure-form-stacked">
          <Label
            htmlFor="name"
            text="Quem é você?"
            invalidValue={this.state.validation.invalidName}
          />
          <Input
            id="name"
            placeholder="Digite seu nome"
            maxLength="40"
            readOnly={false}
            invalidValue={this.state.validation.invalidName}
            defaultValue={this.state.user.name}
            onChange={this.updateUserName}
          />
          <GenderImage gender="m" />
          <GenderImage gender="f" />
        </form>
      </div>
    );
  }
}

export default NewUser;
