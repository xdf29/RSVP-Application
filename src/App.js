import React, { Component } from 'react';
import './App.css';
import GuestsList from './GuestComponent/GuestsList.js'
import Header from './Header/Header.js'
import Main from './Main/Main.js'

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        id: 0,
        name: "John",
        confirmed: false,
        isEditing: false
      },
      {
        id: 1,
        name: "Alex",
        confirmed: true,
        isEditing: false
      },
      {
        id: 2,
        name: "Doe",
        confirmed: false,
        isEditing: false
      },
    ]
  }

  getTotalInvited = () => {
    return (
      this.state.guests.length
    )
  }

  getAttendingGuests = () => {
    let counter = 0
    this.state.guests.map((guest)=>{
      if(guest.confirmed === true){
        counter += 1
      }
      return counter
    })
    return (counter)
  }
  
  getUnconfirmed = () => {
    return (this.getTotalInvited() - this.getAttendingGuests())
  }

  handleConfirmed = (id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if(guest.id === id){
          guest.confirmed = !guest.confirmed
        }
        return guest
      })
    })
  }

  handleEdit = (id, name) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if(guest.id === id){
          guest.isEditing = !guest.isEditing
          guest.name = name
        }
        return guest
      })
    })
  }

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  handlePendingGuest = (e) => {
    this.setState({
      pendingGuest: e.target.value
    })
  }

  addGuest = (e) => {
    e.preventDefault()
    const newGuest = {
      id: this.state.guests.length + 1,
      name: this.state.pendingGuest,
      confirmed: false,
      isEditing: false
    }
    this.setState({
      pendingGuest: "",
      guests: [newGuest,...this.state.guests]
    })
  }

  handleRemove = (id) => {
    this.setState({
      guests: this.state.guests.filter((guest) => 
        guest.id !== id
      )
    })
  }

  render() {
    return (
      <div className="App">
        {/* <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value={this.state.pendingGuest} placeholder="Invite Someone" onChange={this.handlePendingGuest}/>
              <button type="submit" name="submit" value="submit" onClick={this.addGuest}>Submit</button>
          </form>
        </header> */}
        <Header pendingGuest={this.state.pendingGuest} addGuest={this.addGuest} handlePendingGuest={this.handlePendingGuest}/>
        {/* <div className="main">
          <div>
            <h2>Invitees</h2>
            <ConfirmCounter isFiltered={this.state.isFiltered} toggleFilter={this.toggleFilter}/>
          </div>
          <Counter total={this.getTotalInvited()} attending={this.getAttendingGuests()} unconfirmed={this.getUnconfirmed()}/>
        </div> */}
        <Main isFiltered={this.state.isFiltered} toggleFilter={this.toggleFilter} total={this.getTotalInvited()} attending={this.getAttendingGuests()} unconfirmed={this.getUnconfirmed()} />
        <GuestsList guests={this.state.guests} pendingGuest={this.state.pendingGuest} isFiltered={this.state.isFiltered} handleConfirmed={this.handleConfirmed} handleEdit={this.handleEdit} changeName={this.changeName} handleRemove={this.handleRemove}/>
    </div>
    );
  }
}

export default App;
