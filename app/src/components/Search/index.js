import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
    performSearch
} from '../../actions'
import { IoIosSearch } from 'react-icons/io';

import styles from './styles.module.scss';

/**
 * @class Search
 * @extends {Component}
 */
class Search extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    keyPress = (e) => {
        if ( e.key === "Enter" ){
            this.props.performSearch( this.state.value )
        }
    }

    render() {
        const { 
            performSearch,
        } = this.props
        return (
            <div>
                <div onClick={() => {
                    performSearch( this.state.value )
                }} className={styles.icon}>
                    <IoIosSearch />
                </div>
                <input type="text" className={styles.text} placeholder={this.state.value || 'Search'} onKeyPress={this.keyPress} onChange={this.handleChange} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    performSearch,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search)
