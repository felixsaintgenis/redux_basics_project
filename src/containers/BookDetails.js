import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetails extends Component {

    render() {
        return(
            <p>{this.props.activeBook}</p>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    } 
}
export default connect(mapStateToProps)(BookDetails);

