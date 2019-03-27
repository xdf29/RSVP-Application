import React, { Component } from 'react'
import Guest from './Guest.js'
import PendingGuest from './PendingGuest.js'
import PropTypes from 'prop-types';

export class GuestsList extends Component {
  render() {
    return (
      <div>
        <ul>
            <PendingGuest name={this.props.pendingGuest}/>
            {this.props.guests
              .filter((guest) => !this.props.isFiltered || guest.confirmed)
              .map((guest)=>{
                return(
                    <Guest key={guest.id} guest={guest} handleConfirmed={this.props.handleConfirmed} handleEdit={this.props.handleEdit} handleRemove={this.props.handleRemove}/>
                )
            })}
        </ul>
      </div>
    )
  }
}

GuestsList.propTypes = {
    guests: PropTypes.array
};

export default GuestsList
