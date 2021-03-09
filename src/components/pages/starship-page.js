import React, { Component } from 'react';
import { StarshipList, StarshipDetails } from '../sw-components';
import Row from '../row';

export default class StarshipPage extends Component {

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
                    <StarshipList onItemSelected={this.onItemSelected} >
                        {(element) => `${element.name}`}
                    </StarshipList>
                }
                rightElement={<StarshipDetails itemId={this.state.selectedItem} />}
            />
        )
    }
};