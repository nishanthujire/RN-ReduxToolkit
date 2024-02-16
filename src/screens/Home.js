import {Button, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, login,getPosts } from '../redux/actions/actions';
const Home = () => {
    const { val } = useSelector(state => state.counterReducer);
    const { userData } = useSelector(state => state.auth);
    console.log("age is",userData?.age);


    const dispatch = useDispatch();
    const fetchPosts = async () => {
        let res = await getPosts();
        console.log("get post api res  ",res);
    }

    useEffect(() => {
        fetchPosts();
    },[])
  return (
    <View style={{flex: 1}}>
      <Text style={{alignSelf:'center',marginTop:20}}>{val}</Text>
      <Button title='add' onPress={() => dispatch(increment(val))}/>
      <Button title='minus' onPress={() => dispatch(decrement(val))}/>
      <Button title='login' onPress={() => dispatch(login({
         ...userData,
         name:'nishanth',
         fvt:'marvel'
      }))}/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
