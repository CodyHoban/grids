import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withTheme } from '@material-ui/core/styles'
import theme from './theme'

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
            
        });
        console.log(this);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="ui container" style ={{ marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList images={this.state.images} />
                </div>
            </ThemeProvider>
        );
    }
};

export default withTheme(App);