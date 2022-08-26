import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const FormValidation = () => {
    const initialValues = { FirstName: "", LastName: "", EmailAddress: "", PhoneNo: "", CNIC: "", ResidentialAddress: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFromErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFromErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.FirstName) {
            errors.FirstName = 'First Name is required...';
        }
        if (!values.LastName) {
            errors.LastName = 'LAst Name is required...';
        }
        if (!values.EmailAddress) {
            errors.EmailAddress = 'Email is required';
        }
        if (!values.PhoneNo) {
            errors.PhoneNo = 'Phone no is required';
        }
        if (!values.CNIC) {
            errors.CNIC = 'Cnic is required';
        }
        if (!values.ResidentialAddress) {
            errors.ResidentialAddress = 'Address is required';
        }
        return errors;

    }
    return (

        <View>
            <ScrollView>
                <KeyboardAvoidingView>
                    <View style={{ marginBottom: 50 }}>
                        <View style={{ margin: 20, alignItems: 'center' }}>
                            <Text style={{ textDecorationLine: 'underline', fontSize: 25, fontWeight: '700' }}>Form_Validation</Text>
                        </View>

                        <View>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>FirstName:</Text>
                            <TextInput
                                placeholder='First Name'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.FirstName}
                                onChange={handleChange}
                            />
                            <Text style={{ color: 'black' }}>{formErrors.FirstName}</Text>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>LastName:</Text>
                            <TextInput
                                placeholder='Last Name'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.LastName}
                                onChange={handleChange}
                            />
                            <Text>{formErrors.LastName}</Text>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>EmailAddress:</Text>
                            <TextInput
                                placeholder='Email Address'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.EmailAddress}
                                onChange={handleChange}
                            />
                            <Text>{formErrors.EmailAddress}</Text>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>PhoneNo:</Text>
                            <TextInput
                                maxLength={11}
                                placeholder='Phone No'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.PhoneNo}
                                onChange={handleChange}
                            />
                            <Text>{formErrors.PhoneNo}</Text>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>CNIC:</Text>
                            <TextInput
                                maxLength={13}
                                placeholder='Cnic'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.CNIC}
                                onChange={handleChange}
                            />
                            <Text>{formErrors.CNIC}</Text>
                            <Text style={{ marginHorizontal: 15, fontSize: 20, fontWeight: '500' }}>ResidentialAddress:</Text>
                            <TextInput
                                placeholder='Residential Address'
                                style={{ marginHorizontal: 15, marginVertical: 10, borderColor: 'black', borderWidth: 1, width: '90%', borderRadius: 10 }}
                                value={formValues.ResidentialAddress}
                                onChange={handleChange}
                            />
                            <Text>{formErrors.ResidentialAddress}</Text>

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

                        <View style={{ alignItems: 'center',marginTop:10}}>
                            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'skyblue', width: '70%', height: '25%' }}
                                isSubmit={handleSubmit}
                            >
                                <Text style={{ textAlign: 'center', padding: 15, fontSize: 20, fontWeight: '600' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </View>

    )
}

export default FormValidation;