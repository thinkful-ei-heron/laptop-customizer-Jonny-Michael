import React, {Component} from 'react'

import Shoppingcart from './shopping-cart.js'
export default class Summary extends Component {
    render() {
        return (<section className="main__summary">
            <h2>Your cart</h2>
            <Shoppingcart USCurrencyFormat={this.props.USCurrencyFormat} selected={this.props.selected}/>
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.total}
                </div>
            </div>
        </section>);
    }
}