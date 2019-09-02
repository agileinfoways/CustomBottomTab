import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { COLORS } from '../utils/color';
import { Assets } from '../assets';
import BottomItem from './BottomItem';
import { connect } from 'react-redux';
import { BOTTOM_TITLE } from '../utils/constant';
import { saveSelectedScreen } from '../redux/actions/GeneralActions';

class BottomTab extends Component {
    constructor(props) {
        super(props);

        this.routeDetails = [
            {
                title: BOTTOM_TITLE.HOME,
                image: Assets.home,
                key: "Home"
            },
            {
                title: BOTTOM_TITLE.SEARCH,
                image: Assets.search,
                key: "Search"
            },
            {
                title: BOTTOM_TITLE.CART,
                image: Assets.cart,
                key: "Cart"
            },
            {
                title: BOTTOM_TITLE.SETTING,
                image: Assets.settings,
                key: "Setting"
            }
        ]

        this.state = {
        };
    }

    render() {
        return (
            <View style={style.container}>

                {this.routeDetails.map((data, index) => {
                    return <BottomItem
                        key={index}
                        image={data.image}
                        title={data.title}
                        isSelected={this.props.selectedScreen == data.title ? true : false}
                        onClick={() => {
                            this.props.saveSelected(data.title)
                            this.props.navigation.navigate(data.key)
                        }}
                    />
                })}

            </View>
        );
    }
}

export default connect(
    state => {
        return {
            selectedScreen: state.generalReducer.selectedScreen
        }
    },
    dispatch => {
        return {
            saveSelected: data => {
                dispatch(saveSelectedScreen(data))
            }
        }

    }
)(BottomTab)

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.WHITE, padding: 0,
        alignItems: "center",
        paddingHorizontal: 20,
        shadowColor: COLORS.SHADOW_COLOR,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 1,
        borderRadius: 4
    }
})