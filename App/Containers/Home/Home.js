import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './HomeStyle';
import { ApplicationStyles } from 'App/Theme';
import { Colors, Images } from 'App/Theme'
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from 'react-native-paper';
import UserActions from 'App/Stores/User/Actions';
import Header from 'App/Components/Header/Header';

const Home = ({ navigation }) => {

	return (
		<View style={styles.container}>
      <Header />
		</View>
	);
};

export default Home;