import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Task16 } from './Tasks/Task16';
import { Task17 } from './Tasks/Task17';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Task16></Task16> */}
        <Task17></Task17>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'grey',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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