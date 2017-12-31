import React from 'react';
import { Image,View } from 'react-native';

export default class AsyncImage extends React.Component {
    constructor(props) {
      super(props)
      this.state = { loaded: false }
    }
    _onLoad = () => {
        this.setState(() => ({ loaded: true }))
    }
    render() {
        const isLoaded = this.state.loaded
        return (
            <View style={{backgroundColor:'purple'}}>
                { isLoaded ? 
                (<View style={[this.props.style, {backgroundColor: "#413F41"}]} onLayout={this._onLoad}/>)
                :
                <Image source={this.props.source} style={[this.props.style]}/>
               }
            </View>
        )
    }
    
}
