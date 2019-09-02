import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { COLORS } from '../utils/color';
import { FONTS } from '../utils/fonts';
import { saveSelectedScreen } from '../redux/actions/GeneralActions';

export default class BottomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={style.itemContainer} onPress={this.props.onClick}>
                <Image source={this.props.image} style={{
                    tintColor: this.props.isSelected ? COLORS.LIGHT : COLORS.PRIMARY,
                    width: 25, height: 25
                }}
                    resizeMode="contain"
                />
                <Text style={{
                    marginTop: 4,
                    fontSize: 12,
                    color: this.props.isSelected ? COLORS.LIGHT : COLORS.PRIMARY,
                    fontFamily: FONTS.LIGHT
                }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

export const style = StyleSheet.create({
    itemContainer: {
        alignItems: "center",
        paddingTop: moderateScale(8),
        paddingBottom: moderateScale(8),
    }
})