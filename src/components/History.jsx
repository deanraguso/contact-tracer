import React, { Component } from 'react'

export default class History extends Component {

    render() {
        return (
            <div id="Log" >
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Street Address</th>
                            <th>Suburb</th>
                            <th>Postcode</th>
                            <th>Country</th>
                            <th>Date</th>
                        </tr>

                        {this.props.data.map(d => {
                            return (
                                <tr key={`${d.first_name}${d.date}`}>
                                    <td>{d.first_name}</td>
                                    <td>{d.last_name}</td>
                                    <td>{d.street}</td>
                                    <td>{d.suburb}</td>
                                    <td>{d.postcode}</td>
                                    <td>{d.country}</td>
                                    <td>{d.date}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
