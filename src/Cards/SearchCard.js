import * as React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const containerStyle = {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
};

const inputStyle = {
    backgroundColor: 'white',
}

const state = {
    search: '',
};

const updateSearch = (search) => {
    this.setState({ search });
};

export default function HomeScreen() {
    const { search } = state;

    return (
        <SearchBar
            containerStyle={containerStyle}
            inputStyle={inputStyle}
            platform={Platform.OS}
            placeholder="¿Como te podemos ayudar?"
            onChangeText={updateSearch}
            value={search}
        />
    );
}