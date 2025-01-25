import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Task16 } from './Tasks/Task16';
import { Task17 } from './Tasks/Task17';
import { Task18 } from './Tasks/Task18';
import { Task19 } from './Tasks/Task19';
import { Task20 } from './Tasks/Task20';
import { Task21 } from './Tasks/Task21';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Task16></Task16> */}
        {/* <Task17></Task17> */}
        {/* <Task18></Task18> */}
        {/* <Task19></Task19> */}
        {/* <Task20></Task20> */}
        <Task21></Task21>
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