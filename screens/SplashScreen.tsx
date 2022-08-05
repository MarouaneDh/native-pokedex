import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Sound from 'react-native-sound';
const bg = "../assets/pikachu-5477886_960_720.png"

 

export default class HomeScreen extends React.Component {

    props: any
	state: any

    constructor(props: any) {
        super(props)
        this.state={
        allPokemons: null,
        }
        Sound.setCategory('Playback')
        var pikachu = new Sound('pikachu.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }else{
                pikachu.setVolume(1);
                pikachu.play(success => {
                    if (success) {
                    console.log('successfully finished playing');
                    } else {
                    console.log('playback failed due to audio decoding errors');
                    }
                });
            }
            // when loaded successfully
            // console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
          });
          
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Kanto Region')
            
        }, 3000);
    }

    render(){
    return (
            <Image
                style={styles.bg_container}
                source={require(bg)}
            ></Image>
    )
    }}

const styles = StyleSheet.create({
    bg_container: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});

