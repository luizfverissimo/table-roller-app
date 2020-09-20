import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import colors from '../constants/colors'

const Header = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.title} >Procurar Tabelas</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    color: colors.orange,
    fontSize: 24
  }
})
