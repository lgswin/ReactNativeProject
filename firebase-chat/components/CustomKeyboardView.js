import { View, Text, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const ios = Platform.Os == 'ios';

export default function CustomKeyboardView({children, inChat}) {
  let keyConfig = {};
  let scrollViewConfig = {};

  if (inChat) {
    keyConfig = {keyboardVerticalOffset: 90};
    scrollViewConfig = {contentContainerStyle: {flex: 1}};
  }

  return (
    <KeyboardAvoidingView
        behavior={ios? 'padding': 'height'}
        style={{flex: 1}}
        {...keyConfig}>
            <ScrollView
                style={{flex: 1}}
                bounces={false}
                showsVerticalScrollIndicator={false}
                {...scrollViewConfig}
                >
                    {children}
            </ScrollView>
    </KeyboardAvoidingView>
  )
}