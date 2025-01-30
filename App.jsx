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
import { Task22 } from './Tasks/Task22';
import { Task23 } from './Tasks/Task23';
import { Task24 } from './Tasks/Task24';
import { Task25 } from './Tasks/Task25';
import { Task26 } from './Tasks/Task26';
import { Task27 } from './Tasks/Task27';
import { Task28 } from './Tasks/Task28';
import { Task29 } from './Tasks/Task29';
import { Task30 } from './Tasks/Task30';
import { Task31 } from './Tasks/Task31';
import { Task32 } from './Tasks/Task32';
import { Task33 } from './Tasks/Task33';
import { Task34 } from './Tasks/Task34';
import { Task35 } from './Tasks/Task35';
import { Task36 } from './Tasks/Task36';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <Task16 /> */}
        {/* <Task17 /> */}
        {/* <Task18 /> */}
        {/* <Task19 /> */}
        {/* <Task20 /> */}
        {/* <Task21 /> */}
        {/* <Task22 /> */}
        {/* <Task23 /> */}
        {/* <Task24 /> */}
        {/* <Task25 /> */}
        {/* <Task26 /> */}
        {/* <Task27 /> */}
        {/* <Task28 /> */}
        {/* <Task29 /> */}
        {/* <Task30 /> */}
        {/* <Task31 /> */}
        {/* <Task32 /> */}
        {/* <Task33 /> */}
        {/* <Task34 /> */}
        {/* <Task35 /> */}
        <Task36 />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    alignItems: "center",
  },
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