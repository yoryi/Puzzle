import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const Dissmisskeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);
export default Dissmisskeyboard;