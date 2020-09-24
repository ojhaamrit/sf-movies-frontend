import React, {Component} from 'react';
import './App.css';
import SearchBarComponent from "./component/SearchBarComponent";
import MapComponent from "./component/MapComponent";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            selectedMovie: undefined,
            searchKeyword: "",
            btnText: "Import Dummy Data",
            btnDisabled: false
        };
    }

    componentDidMount() {
        this.getMovies(this.state.searchKeyword);
    }

    getMovies = async (value) => {

        try {
            await fetch(`https://sf-movies-backend.herokuapp.com/api/movies/search?keyword=${value}`)
                .then(response => response.json())
                .then(movies => {
                    this.setState({movies})});
        } catch (error) {
            // TODO: handle error
        } finally {

        }
    }

    onValueChanged = (event) => {
        this.setState({ searchKeyword: event.target.value });
        this.getMovies(event.target.value);
    }

    onMovieItemClicked = (value) => {
        this.setState({ selectedMovie: value });
        console.log(this.state.selectedMovie);
    }

    render() {
        // console.log(this.state.movies);
        return (

                <div className={'App'}>
                    <div className={'search-bar'}>
                        <SearchBarComponent
                            searchKeyword={this.state.searchKeyword}
                            movies={this.state.movies}
                            onValueChanged={this.onValueChanged}
                            onMovieItemClicked={this.onMovieItemClicked}/>
                    </div>
                    <div className={'import-btn'}>
                        <button disabled={this.state.btnDisabled} onClick={this.importData} title="Import the movie records shot in San Francisco">{this.state.btnText}</button>
                    </div>
                    <div className={'map'}>
                        <MapComponent zoom={10} movie={this.state.selectedMovie} />
                    </div>
                </div>
        );
    }

    importData = async () => {
        this.setState({
            btnText: "Importing...",
            btnDisabled: true
        });
        try {
            await fetch(
                `https://sf-movies-backend.herokuapp.com/api/movies/import`,
                {
                    method: 'POST'
                }).then(response => {
                    this.setState({
                        btnText: "Import Dummy Data",
                        btnDisabled: false
                    });
                    return response.json()
                });
        } catch (error) {
            // TODO: handle error
        } finally {

        }
    }

}

export default App;
