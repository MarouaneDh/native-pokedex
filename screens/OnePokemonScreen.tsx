import React from 'react'
import { Animated, StyleSheet, Text, View, Easing, Modal, Pressable, Alert, ImageBackground } from 'react-native'
import { getAttackDef, getOnePokemon, getOnePokemonStats, getPokeDescription } from '../controllers/pokemonControllers';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import BottomDrawer from 'react-native-bottom-drawer-view';

const image = { uri: "../assets/Pokeball.png" };


const TAB_BAR_HEIGHT = 50;

export default class OnePokemonScreen extends React.Component {

    props: any
    state: any
    animatedSmallImage: any
    animatedShadow: any

    constructor(props: any) {
        super(props)
        this.animatedSmallImage = new Animated.Value(0)
        this.animatedShadow = new Animated.Value(0)
        this.state = {
            loading: true,
            pokemon: null,
            type: null,
            data: null,
            desc: '',
            stats: null,
            hp: 0,
            attack: 0,
            speed: 0,
            defence: 0,
            spAttack: 0,
            spDefence: 0,
            allStats: null,
            bigStat: 0,
            characterId: 1,
            pokeAbilities: null,
            modalOneVisible: false,
            modalTwoVisible: false,
            attackOne: null,
            attackTwo: null,
            style: null
        }
    }

    handleAnimation = () => {
        Animated.timing(this.animatedSmallImage, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }

    handleShadowAnimation = () => {
        Animated.timing(this.animatedShadow, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: false
        }).start()
    }

    getOnePokemon = async () => {
        await getOnePokemon(this.props.route.params.pokemon.name).then(async (res) => {
            await this.setState({ data: res })
            await this.setState({ type: res?.types[0]?.type?.name })
            this.setState({ style: this.myStyle() })
            this.setState({ loading: false })
            await getAttackDef(this.state.data.abilities[0].ability.url).then(async (res) => {
                res.effect_entries.map((att) => {
                    if (att.language.name === 'en') {
                        this.setState({ attackOne: att.short_effect })
                    }
                })
            })
            await getAttackDef(this.state.data.abilities[1].ability.url).then(async (res) => {
                res.effect_entries.map((att) => {
                    if (att.language.name === 'en') {
                        this.setState({ attackTwo: att.short_effect })
                    }
                })
            })
        })
    }

    getPokemonDesc = async (id) => {
        await getPokeDescription(id).then(async (res) => {
            this.setState({ desc: res })
        })
    }

    getPokemonStat = async () => {
        await getOnePokemonStats(this.props.route.params.pokemon.name).then(async (res) => {
            this.setState({ stats: res })
            this.setState({
                hp: res[0].base_stat,
                attack: res[1].base_stat,
                defence: res[2].base_stat,
                spAttack: res[3].base_stat,
                spDefence: res[4].base_stat,
                speed: res[5].base_stat,
                allStats: [res[0].base_stat, res[1].base_stat, res[2].base_stat, res[3].base_stat, res[4].base_stat, res[5].base_stat]
            })
            this.setCharacterId(this.state.allStats)
        })
    }

    setCharacterId = async (stats) => {
        stats.map((stat) => {
            if (stat > this.state.bigStat) {
                this.setState({ bigStat: stat })
            }
        })
        this.setState({ characterId: (this.state.bigStat % 5) + 1 })
        await this.getPokemonDesc(this.state.characterId)
    }

    setModalOneVisible = (visible) => {
        this.setState({ modalOneVisible: visible });
    }

    setModalTwoVisible = (visible) => {
        this.setState({ modalTwoVisible: visible });
    }

    componentDidMount = () => {
        this.getOnePokemon()
        this.handleAnimation()
        this.handleShadowAnimation()
        this.getPokemonStat()
    }

    myStyle = () => {
        if (this.state.type === 'grass') {
            return {
                height: "100%",
                backgroundColor: 'green',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'ice') {
            return {
                height: "100%",
                backgroundColor: '#48d1cc',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'fighting') {
            return {
                height: "100%",
                backgroundColor: '#8b0000',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'ground') {
            return {
                height: "100%",
                backgroundColor: '#bdb76b',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'psychic') {
            return {
                height: "100%",
                backgroundColor: '#ff1493',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'rock') {
            return {
                height: "100%",
                backgroundColor: '#daa520',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'ghost') {
            return {
                height: "100%",
                backgroundColor: '#4b0082',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'dark') {
            return {
                height: "100%",
                backgroundColor: '#010500',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'dragon') {
            return {
                height: "100%",
                backgroundColor: '#000080',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'steel') {
            return {
                height: "100%",
                backgroundColor: '#a9a9a9',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'water') {
            return {
                height: "100%",
                backgroundColor: '#ADD8E6',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'bug') {
            return {
                height: "100%",
                backgroundColor: '#7CFC00',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'flying') {
            return {
                height: "100%",
                backgroundColor: '#C0C0C0',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'normal') {
            return {
                height: "100%",
                backgroundColor: '#FFFFE0',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'poison') {
            return {
                height: "100%",
                backgroundColor: '#FF00FF',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'fire') {
            return {
                backgroundColor: '#FF8C20',
                paddingHorizontal: 10,
                paddingVertical: 10,
                height: "100%"
            }
        }
        if (this.state.type === 'electric') {
            return {
                height: "100%",
                backgroundColor: 'gold',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }
        if (this.state.type === 'fairy') {
            return {
                height: "100%",
                backgroundColor: '#ffb6c1',
                paddingHorizontal: 10,
                paddingVertical: 10,
            }
        }

    }

    renderContent = () => {
        return (
            <View style={styles.indrawer}>
                {
                    this.state.stats ?
                        <View style={styles.stats}>
                            <View style={styles.drag}></View>
                            <Text style={styles.statName}>{this.state.stats[0].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.hp / 200}
                                    color="#2194F3"
                                />
                                <Text style={styles.hwText}>{this.state.hp}</Text>
                            </View>
                            <Text style={styles.statName}>{this.state.stats[1].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.attack / 200}
                                    color="red"
                                />
                                <Text style={styles.hwText}>{this.state.attack}</Text>
                            </View>
                            <Text style={styles.statName}>{this.state.stats[2].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.defence / 200}
                                    color="green"
                                />
                                <Text style={styles.hwText}>{this.state.defence}</Text>
                            </View>
                            <Text style={styles.statName}>{this.state.stats[3].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.spAttack / 200}
                                    color="#FF00FF"
                                />
                                <Text style={styles.hwText}>{this.state.spAttack}</Text>
                            </View>
                            <Text style={styles.statName}>{this.state.stats[4].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.spDefence / 200}
                                    color="orange"
                                />
                                <Text style={styles.hwText}>{this.state.spDefence}</Text>
                            </View>
                            <Text style={styles.statName}>{this.state.stats[5].stat.name}</Text>
                            <View style={styles.stat}>
                                <ProgressBar
                                    style={styles.bar}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.speed / 200}
                                    color="#ADD8E6"
                                />
                                <Text style={styles.hwText}>{this.state.speed}</Text>
                            </View>
                        </View>
                        : null
                }
            </View>
        )
    }

    onExpandDrawer = () => {
        this.setState({ style: [this.myStyle(), { opacity: 0.9 }] })
        console.log(this.state.style)
    }

    onCollapseDrawer = () => {
        this.setState({ style: this.myStyle() })
        console.log(this.state.style)
    }

    render() {
        return (
            <View style={this.state.style}>
                <ImageBackground source={require('../assets/Pokeball.jpg')} resizeMode="cover" style={styles.image}></ImageBackground>
                {
                    this.state.data ?
                        <View>
                            <Text style={styles.text}>{this.state.data.name.toUpperCase()}</Text>
                            <Animated.Image
                                style={{
                                    position: 'absolute',
                                    left: 160,
                                    top: 300,
                                    height: 20,
                                    width: 20,
                                    opacity: 0.7,
                                    tintColor: '#282828',
                                    transform: [
                                        {
                                            translateX: this.animatedShadow.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, 20]
                                            })
                                        },
                                        {
                                            translateY: this.animatedShadow.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -20]
                                            })
                                        },
                                        {
                                            scaleX: this.animatedShadow.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 20]
                                            })
                                        },
                                        {
                                            scaleY: this.animatedShadow.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 20]
                                            })
                                        }
                                    ]
                                }}
                                source={{
                                    uri: this.state.data?.sprites?.other?.home?.front_default,
                                }}
                            />
                            <Animated.Image
                                style={{
                                    position: 'absolute',
                                    left: 180,
                                    top: 400,
                                    height: 20,
                                    width: 21,
                                    transform: [
                                        {
                                            translateX: this.animatedSmallImage.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, 20]
                                            })
                                        },
                                        {
                                            translateY: this.animatedSmallImage.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, -20]
                                            })
                                        },
                                        {
                                            scaleX: this.animatedSmallImage.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 13]
                                            })
                                        },
                                        {
                                            scaleY: this.animatedSmallImage.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [1, 12.5]
                                            })
                                        }
                                    ]
                                }}
                                source={{
                                    uri: this.state.data?.sprites?.other?.home?.front_default,
                                }}
                            />
                            <View style={styles.hw}>
                                <Text style={styles.hwText}>Height : {this.state.data.height} ft</Text>
                                <Text style={styles.hwText}>Weight : {this.state.data.weight} lbs</Text>
                            </View>
                            {/* <View>
                {this.state.desc?<Text>Description : {this.props.route.params.pokemon.name} {this.state.desc}</Text>:null}
            </View> */}
                            <View style={styles.abilitiesContainer}>
                                <Text style={styles.abilitiesTitle}>{this.props.route.params.pokemon.name}'s abilities</Text>
                                <View style={styles.abilities}>
                                    <Pressable onPress={() => this.setModalOneVisible(true)}>
                                        <Text style={styles.ability}>{this.state.data.abilities[0].ability.name}</Text>
                                    </Pressable>
                                    <Pressable onPress={() => this.setModalTwoVisible(true)}>
                                        <Text style={styles.ability}>{this.state.data.abilities[1].ability.name}</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View>
                            </View>
                            <View style={styles.drawer}>
                                <BottomDrawer
                                    containerHeight={500}
                                    backgroundColor="#000"
                                    downDisplay={350}
                                    onCollapsed={this.onCollapseDrawer}
                                    shadow={true}
                                    startUp={false}
                                    offset={TAB_BAR_HEIGHT}
                                    onExpanded={this.onExpandDrawer}
                                >
                                    {this.renderContent()}
                                </BottomDrawer>
                            </View>
                        </View> : null
                }
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalOneVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{this.state.attackOne}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalOneVisible(!this.state.modalOneVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalTwoVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>{this.state.attackTwo}</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalTwoVisible(!this.state.modalTwoVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: '105%',
        height: '80%',
        position: 'absolute',
        top: 80,
        right: 10,
        opacity: 0.4,
        zIndex: 0
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    text: {
        textAlign: 'center',
        color: '#F7FF00',
        fontSize: 50,
        zIndex: 9,
        textShadowColor: "blue",
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 25,
        elevation: 15,
        marginTop: 20,
        marginBottom: 10
    },
    bar: {
        width: 300
    },
    hw: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    hwText: {
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: "black",
        color: 'white',
        padding: 5,
        borderRadius: 10,
        marginLeft: 10
    },
    abilitiesContainer: {
        position: 'absolute',
        top: 530,
        left: '8%'
    },
    abilitiesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 10
    },
    abilities: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ability: {
        backgroundColor: 'silver',
        width: 170,
        padding: 15,
        textAlign: 'center',
        borderRadius: 15,
        elevation: 20,
        fontWeight: 'bold',
        marginRight: 50
    },
    drawer: {
        left: -10.5,
    },
    indrawer: {
        padding: 20,
    },
    drag: {
        width: 50,
        height: 6,
        backgroundColor: 'gray',
        position: 'absolute',
        borderRadius: 10,
        left: '52%',
    },
    stat: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    stats: {
        padding: 50,
        position: 'absolute',
        top: 20,
    },
    statName: {
        fontSize: 14,
        backgroundColor: 'black',
        color: 'white',
        width: 170,
        borderRadius: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});