import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: 'https://www.meme-arsenal.com/memes/acfa58982a124d90d133ba7a3b7b5c66.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateFormButton());
  }

  onSaveButtonClick = () => {
    const { isSaveButtonDisabled, savedCards, ...newSavedCards } = this.state;
    if (newSavedCards.cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
    this.setState((prevState) => (
      {
        savedCards: [...prevState.savedCards, newSavedCards],
        cardName: '',
        cardDescription: '',
        cardRare: 'normal',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardTrunfo: false,

      }
    ));
  }

  validateFormButton = () => {
    const {
      cardName,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const maxValuePerAttr = 90;
    const sumAllAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const maxResult = 210;

    if (cardName.length !== 0
      && cardDescription.length !== 0
      && cardAttr1 >= 0
      && cardAttr1 <= maxValuePerAttr
      && cardAttr2 >= 0
      && cardAttr2 <= maxValuePerAttr
      && cardAttr3 >= 0
      && cardAttr3 <= maxValuePerAttr
      && cardRare.length !== 0
      && cardImage.length !== 0
      && sumAllAttr <= maxResult) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
    } = this.state;
    return (
      <div className="body">
        <h1>Tryunfo</h1>
        <Form
          // passarValorParaOPai={ this.recebeValorDoFilho }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {
          savedCards
            .map((card, i) => (
              <Card
                key={ i }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
            ))
        }

      </div>
    );
  }
}

export default App;
