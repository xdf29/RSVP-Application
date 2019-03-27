import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Guest extends Component {

  state = {
    name: this.props.guest.name
  }

  handleConfirmed = () => {
      return(
          this.props.handleConfirmed(this.props.guest.id)
      )
  }

  handleEdit = () => {
    this.props.handleEdit(this.props.guest.id, this.state.name)
  }

  changeName = (e) => {
    this.setState({
        name: e.target.value
    })
  }

  handleRemove = () => {
      this.props.handleRemove(this.props.guest.id)
  }

  render() {
    return (
        <li>
            {this.props.guest.isEditing? <input type="text" value={this.state.name} onChange={this.changeName}/> : <span>{this.props.guest.name}</span> }
            <label>
            <input type="checkbox" checked={this.props.guest.confirmed} onChange={this.handleConfirmed}/> Confirmed
            </label>
            <button onClick={this.handleEdit}>{this.props.guest.isEditing ? "Save" : "Edit"}</button>
            <button onClick={this.handleRemove}>remove</button>
        </li>
    )
  }
}

Guest.propTypes = {
    guest: PropTypes.object
};

export default Guest
