import React, { Component } from 'react';
import Contact from './Contact';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../../actions/contactActions';

class Contacts extends Component {

    state = {
        contacts: []
    }

    componentDidMount(){
        this.props.getContacts();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.contacts){
            this.setState({
                contacts: nextProps.contacts
            })
        }
    }

  render() {
    const { contacts } = this.state;
    // console.log(contacts);
    return ( 
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProp = (state) => ({
    contacts: state.contact.contacts
})

export default connect(mapStateToProp, {getContacts})(Contacts);
