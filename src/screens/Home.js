import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from '../redux/slices/counterSlice';
import {login} from '../redux/slices/authSlice';
const Home = () => {
  const {val} = useSelector(state => state.counter);
  const {userData} = useSelector(state => state.auth);
  console.log('age is', userData?.age);

  const dispatch = useDispatch();
  
  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf: 'center', marginTop: 20}}>{val}</Text>
      <Button title="add" onPress={() => dispatch(increment(val))} />
      <Button title="minus" onPress={() => dispatch(decrement(val))} />
      <Button
        title="login"
        onPress={() =>
          dispatch(
            login({
              ...userData,
              name: 'nishanth',
              fvt: 'marvel',
            }),
          )
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
