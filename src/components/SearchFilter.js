import React from 'react';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const FormWrapper = styled.div`
    width: 20em;
    margin: 1em 1em 1em 0;
    border: 1px solid rgba(34,36,38);
    border-radius: .28571429rem;

`;

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleKeyPress = (event) => {
        //event.preventDefault();
        const { handleSearch } = this.props;
        if (event.key === 'Enter') {
            handleSearch({ type: "all", values : [this.state.text]});
            this.setState({text: ""});
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const val = event.target.value;
        this.setState({ text: val });
    }

    render() {
        return (
            <FormWrapper>
                <Form >
                    <Form.Field>
                        <input placeholder='Filter' onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.text} />
                    </Form.Field>
                </Form>
            </FormWrapper>);
    }
}

export default SearchFilter;