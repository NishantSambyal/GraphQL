import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  screenContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ceo: {
    fontSize: 18,
    marginBottom: 5,
  },
  coo: {
    fontSize: 18,
    marginBottom: 5,
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
  },
  jobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 1,
    margin: 4,
    padding: 8,
    marginBottom: 10,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.lightGrey,
  },
  jobInfo: {
    flex: 1,
    padding: 10,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 20,
    color: Colors.darkGrey,
    textAlign: 'center',
  },
  errorText: {
    color: Colors.error,
  },
});
