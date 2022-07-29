import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const navigation = useNavigation();
const [phoneNumber, setPhoneNumber] = useState('');

   const [code, setCode] = useState('');

   const [verificationId, setVerificationId] = useState(null);

   const recaptchaVerifier = useRef(null);

   const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
        setPhoneNumber('');
   };
    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            setCode('')
        })
        .catch((error) => {
            // show an alert in case of error
            alert(error)
        })
        Alert.alert(
            'Login Successful. Welcome To Your Journal Diary',
        );
        navigation.navigate('Journal')
  }
    return(
        <View style={styles.container}>
            <FirebaseRecaptchaVerifierModal
            ref={recaptchaVerifier}
            firebaseConfig={firebaseConfig}
            />
            <Text style={styles.otpText}>
                Login using OTP
            </Text>
            <TextInput
                placeholder='Phone Number with your code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
                />
                <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                    <Text style={styles.buttonText}>
                        Send Verification
                    </Text>
                </TouchableOpacity>
                <TextInput
                placeholder='Confirm code'
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
                />
                       <TouchableOpacity style={styles.sendCode}
                       onPress = {confirmCode} >
                    <Text style={styles.buttonText}>
                        Confirm Verification
                    </Text>
                </TouchableOpacity>
        </View>
    )
 
  }


export default Login