import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form>
        Form
        <label htmlFor="name-input">
          <input type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          <input type="textarea" data-testid="description-input" />
        </label>
        <input type="number" data-testid="attr1-input" />
        <input type="number" data-testid="attr2-input" />
        <input type="number" data-testid="attr3-input" />
        <input type="text" data-testid="image-input" />
        <label htmlFor="Super-Trunfo">
          <select data-testid="rare-input" name="Super-Trunfo">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <input type="checkbox" data-testid="trunfo-input" />
        <button type="button" data-testid="save-button"> Salvar </button>
      </form>
    );
  }
}
