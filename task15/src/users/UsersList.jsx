import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import User from './User';
import Filter from './Filter';
import * as usersActions from './users.actions';


const UsersList = ({ usersList, filterText, setFilterText }) => {
    const onChange = event => {
        setFilterText(event.target.value.toLowerCase());
    };

    const usersToDisplay = usersList.filter((user) =>
        user.name.toLowerCase().includes(filterText),
    );

    
    return (
        <div>
            <Filter
                count={usersToDisplay.length}
                onChange={onChange}
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


UsersList.propTypes = {
    usersToDisplay: PropTypes.arrayOf(PropTypes.shape()),
    filterText: PropTypes.string.isRequired,
    setFilterText: PropTypes.func.isRequired,
};


const mapState = (state) => {
    return {
        usersList: state.users.usersList,
        filterText: state.users.filterText,
    };
};

const mapDispatch = {
    setFilterText: usersActions.setFilterText,
};


export default connect(mapState, mapDispatch)(UsersList);