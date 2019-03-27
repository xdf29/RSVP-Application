import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
            <input type="text" value={this.props.pendingGuest} placeholder="Invite Someone" onChange={this.props.handlePendingGuest}/>
            <button type="submit" name="submit" value="submit" onClick={this.props.addGuest}>Submit</button>
        </form>
      </header>
    )
  }
}

export default Header
