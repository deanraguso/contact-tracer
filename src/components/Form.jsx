import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props);

    }

    render() {
        return (
            <div id="user_form">
                <form>
                    <label>First Name:{" "} 
                        <input type="text" name="first_name"/>
                    </label>
                    <label>Last Name:{" "} 
                        <input type="text" name="last_name"/>
                    </label>
                    <label>Street Address:{" "} 
                        <input type="text" name="street"/>
                    </label>
                    <label>Suburb:{" "} 
                        <input type="text" name="suburb"/>
                    </label>
                    <label>Postcode:{" "} 
                        <input type="text" name="postcode"/>
                    </label>
                    <label>Country:{" "} 
                        <input type="text" name="country"/>
                    </label>
                </form>
            </div>
        )
    }
}
