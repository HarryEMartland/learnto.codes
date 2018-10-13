import React from "react";
import ViewLink from "./ViewLink";

const MAX_DESCRIPTION = 150;

export default class Link extends React.Component {

    constructor(props) {
        super(props);
        this.showFullDescription = this.showFullDescription.bind(this);
        this.state = {
            fullDescription: false
        }
    }

    showFullDescription() {
        this.setState({fullDescription: true})
    }

    render() {

        let description = this.props.description;
        let descriptionOverFlow = false;
        if (!this.state.fullDescription) {
            description = this.props.description.substring(0, MAX_DESCRIPTION).trim();
            descriptionOverFlow = this.props.description.length > MAX_DESCRIPTION;
        }

        return <ViewLink{...this.props} {...this.state}
                        showFullDescription={this.showFullDescription}
                        description={description}
                        descriptionOverFlow={descriptionOverFlow}/>
    }
}