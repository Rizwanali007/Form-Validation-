import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { showToast, validateUserEmail, validateUserName } from './utils';

const FormValidation = () => {
    const[firstName, setfirstName]=useState('')
    const[lastName, setlastname]=useState('')
    const[emailAddres, setemailAddress]=useState('')
    const[phoneno, setphoneno]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    
     const postUser = () =>{
         axios({
            method: 'POST',
            url: "API",
            data:{
                firstName:firstName,
                emailAddres:emailAddres,
                password:password,
                password_confirmation:confirmPassword,
            },
            headers:{
                Accept: 'application/json',
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log('response',json)
        })
        .catch((error)=> {
            console.log('error',error)
        })
     }

     useEffect(()=>{
               postUser();
     },[])

    const btnAction = ()=>{
        if (firstName === ""){
            showToast("First Name is required.")
        }
        else if (!validateUserName(firstName)) {
            showToast('Enter only alphabets!')
        }
        // else if (lastName === ""){
        //     showToast("Last Name is required.")
        // }
        // else if (!validateUserName(lastName)) {
        //     showToast('Enter only alphabets!')
        // }
        else if (emailAddres === ""){
            showToast("email is required.")
        }
        else if (!validateUserEmail(emailAddres)) {
            showToast('Enter Valid Email!')
        }
        // else if (phoneno === ""){
        //     showToast("Phone no is required.")
        // } 
        // else if (phoneno.length < 11) {
        //     showToast('Mobile Number is not Valid!')
        // }
        else if (password === ""){
            showToast("Password is required.")
        }
        else if (password.length < 8) {
            showToast('Password should be at least 8 characters ')
        }
        else if (confirmPassword === ""){
            showToast("Confirm Password is required.")
        }
        else if (confirmPassword !== password) {
            showToast('Password does not Matched!')
        }
        else {
            showToast('Your data is entered.')
        }
    }
   
    return (

        <View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={{ marginBottom: 50 }}>
                        <View style={{ margin: 20, alignItems: 'center' }}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: 25, fontWeight: '700' }}>Form Validation</Text>
                        </View>

                        <View>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}> Name:</Text>
                            <TextInput
                                placeholder='First Name'
                                value={firstName}
                                onChangeText={(text) => setfirstName(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            />
                            
                            {/* <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>Last Name:</Text>
                            <TextInput
                                placeholder='Last Name'
                                value={lastName}
                                onChangeText={(text) => setlastname(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            /> */}
                            
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}> Email:</Text>
                            <TextInput
                                placeholder='Email Address'
                                value={emailAddres}
                                onChangeText={(text) => setemailAddress(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            />
                            
                            {/* <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>Phone No:</Text>
                            <TextInput
                                maxLength={11}
                                placeholder='Phone No'
                                keyboardType={'numeric'}
                                value={phoneno}
                                onChangeText={(text) => setphoneno(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            /> */}
                            
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}> Password:</Text>
                            <TextInput
                                placeholder='Password'
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            />
                            
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}> Confirm Password:</Text>
                            <TextInput
                                placeholder='Confirm Password'
                                value={confirmPassword}
                                onChangeText={(text) => setConfirmPassword(text)}
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                
                            />
                            

                        </View>
                        <View style={{flexDirection:'row'}}>
                            <BouncyCheckbox
                                style={{marginLeft:10}}
                            //  value={}
                            //  onValueChange={()=>}
                            />
                            <Text style={{}}>
                                I have read and agreed with the TC
                            </Text>
                        </View>

                        <View style={{ alignItems: 'center',marginTop:20}}>
                            <TouchableOpacity style={{ margin:30 ,borderRadius: 10, backgroundColor: 'skyblue', width: '70%', height: '25%' }}
                                 onPress={() => {
                                    btnAction(); 
                                }}
                            >
                                <Text style={{ textAlign: 'center', padding: 15, fontSize: 20, fontWeight: '600' }}>Register</Text>
                            </TouchableOpacity>
                            <Text>Or</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}

export default FormValidation;