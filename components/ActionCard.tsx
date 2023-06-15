import {Image, Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What's new in js 21</Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hawa_Mahal_2011.jpg/696px-Hawa_Mahal_2011.jpg?20110116201159',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            hjdgd diosj jdkshdodiyr djsohfhgos lodjdos source
            'https://rubygems.org' # You may use http://rbenv.org/ or
            https://rvm.io/ to install and use this version ruby '= 2.6.10' gem
            'cocoapods', '= 1.11.3'
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=> openWebsite('https://docs.google.com/spreadsheets/d/1-wKcV99KtO91dXdPkwmXGTdtyxAfk1mbPXQg81R9sFE/edit#gid=0')}>
            <Text>Read More...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    
  },
  card: {},
  elevatedCard: {},
  headingContainer: {},
  headerText: {},
  cardImage: {
    height: 100,
  },
  bodyContainer: {},
  footerContainer:{}
});
