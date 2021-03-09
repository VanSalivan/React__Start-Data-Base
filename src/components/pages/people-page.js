import React, { Component } from 'react';
import { PersonList, PersonDetails } from '../sw-components';
import Row from '../row';

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem: selectedItem })
    };
    render() {
        return (
            <Row
                leftElement={
                    <PersonList onItemSelected={this.onItemSelected} >
                        {(element) => `${element.name}`}
                    </PersonList>
                }
                rightElement={<PersonDetails itemId={this.state.selectedItem} />}
            />
        )
    }
};