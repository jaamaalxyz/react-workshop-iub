import React from 'react'
import axios from 'axios'
import styles from '../utils/styles'

export default class Form extends React.Component {
  state = {
    userName: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data)
        this.setState({ userName: '' })
      })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <input 
          type="text"
          style={styles.inputText}
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })} 
          placeholder="Github username"
          required />
        <button style={styles.button} type="submit">Add Card</button>
      </form>
    )
  }
}