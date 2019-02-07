import React, { Component } from 'react'
import logo from './utils/logo.jpg'
import styles from './utils/styles'
import Form from './components/Form'
import CardList from './components/CardList'

class App extends Component {
  state = {
    cards: []
  }

  addNewCard = cardInfo => {
    this.setState(
      prevState => ({
        cards: prevState.cards.concat(cardInfo)
      })
    )
  }

  render() {
    return (
      <div style={styles.app}>
        <img src={logo} alt="logo" style={styles.appLogo} />
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
