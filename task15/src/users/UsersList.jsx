import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
    handleChange = event => {
        this.props.setFilterText(event.target.value.toLowerCase());
    };
    
    render() {
        const { usersToDisplay, filterText } = this.props;
        
        return (
            <div>
                <Filter
                    count={usersToDisplay.length}
                    onChange={this.handleChange}
                    filterText={filterText}
                />
                <ul className="users">
                    {usersToDisplay.map(user => (
                        <User key={user.id} {...user} />
                    ))}
                </ul>
            </div>
        );
    }
}

UsersList.propTypes = {
    usersToDisplay: PropTypes.arrayOf(PropTypes.shape()),
    filterText: PropTypes.string.isRequired,
    setFilterText: PropTypes.func.isRequired,
};

export default UsersList;