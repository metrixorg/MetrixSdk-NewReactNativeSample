/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Metrix } from '@metrixorg/react-native-plugin';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('hi')

    Metrix.setSessionIdListener(sessionId => {
      console.log(sessionId, 'sessionId');
    });
    Metrix.setSessionNumberListener(sessionNum => {
      console.log(sessionNum, 'sessionNum');
    });

    var attributes = {};
    attributes["first_name"] = "Ali";
    attributes["last_name"] = "Bagheri";
    attributes["manufacturer"] = "Nike";
    attributes["product_name"] = "shirt";
    attributes["type"] = "sport";
    attributes["size"] = "large";
    Metrix.newEvent("eovld", attributes);

    var userAttributes = {};
    userAttributes["manufacturer"] = "Nike";
    Metrix.setUserAttributes(userAttributes);

    Metrix.setUserId("userId"); // call when user tries to login in your system and set userId value that user already knows in your system
    Metrix.deleteUserId(); // call when your user goes to logout in your system
    Metrix.setUserFirstName("userFirstName");
    Metrix.setUserLastName("userLastName");
    Metrix.setUserPhoneNumber("phoneNumber");
    Metrix.setUserHashedPhoneNumber("hashedPhoneNumber");
    Metrix.setUserEmail("email");
    Metrix.setUserHashedEmail("hashedEmail");
    Metrix.setUserCountry("country");
    Metrix.setUserCity("city");
    Metrix.setUserRegion("region");
    Metrix.setUserLocality("locality");
//     Metrix.setUserGender("MALE"); // gender value could be "MALE" , "FEMALE" or "OTHER"
//     Metrix.setUserBirthday(1); // birthday value type should be 'Long'
    Metrix.setUserFcmToken("fcmToken");
    Metrix.userChannelEnabled("SMS"); // channel value could be "SMS", "PUSH" or "EMAIL"
    Metrix.userChannelDisabled("PUSH"); // channel value could be "SMS", "PUSH" or "EMAIL"

    Metrix.newRevenue("eovld", 12000, 0);
    Metrix.setUserIdListener(metrixUserId => {
      console.log(metrixUserId, 'metrixUserId')
    });
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text style={styles.highlight}>App.tsx</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
