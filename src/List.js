import React, {Component} from 'react'
import Option from "./Option";

export default class List extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map((item, index) => <Option key={index}
                USCurrencyFormat={this.props.USCurrencyFormat} item={item} feature={feature}
                selected={this.props.selected} updateFeature={this.props.updateFeature}/>);

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
        return (<>{features}</>);
    }

}