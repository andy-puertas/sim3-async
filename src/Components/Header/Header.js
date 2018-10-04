import React, { Component } from 'react'

export default class Header extends Component {
  render() {
      if (this.props.location.pathname !== '/') {
      return (
        <div>
          <section className='navbar'>

          </section>
          
        </div>
      )
    } else {
      return null;
    }
  }
}
