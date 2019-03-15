import React from 'react';

class SearchBar extends React.Component {
    state = { term: 'disney' };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
                <h5 className="ui header">Showing results for: "{this.state.term}"</h5>
            </div>
        )
    };
};

export default SearchBar;