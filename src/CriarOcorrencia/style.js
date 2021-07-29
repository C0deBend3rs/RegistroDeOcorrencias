import { StyleSheet } from "react-native";
import { alignSelf, borderBottom, fontWeight, marginBottom, marginLeft } from "styled-system";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: '70px',
    justifyContent: 'space-between'
  },

  inputDiv: {
    width: '100%',
    gap: '20px',
    alignItems: 'center'
  },

  inputBox: {
    width: '95%',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'black'
  },

  inputContainer: {
    borderBottomWidth: 0
  },

  label: {
    color: 'black'
  },

  buttonGrad: {
    width: '70px',
    height: '70px',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: '50%',
  },

  button: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: '50%'
  },

  photosButtons: {
    flexDirection: 'row',
    gap: '40px'
  },

  buttonsDiv: {
    width: '100%',
    height: '150px',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    justifySelf: 'flex-end'
  },

  pickerTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '4%',
    marginBottom: '5px'
  },

  pickerTitleDisabled: {
    fontSize: '16px',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: '4%',
    marginBottom: '5px',
    color: 'grey'
  },

  pickerDiv: {
    height: 'auto',
    width: '100%',
    alignItems: 'center'
  },

  picker: {
    width: '95%',
    height: '35px',
    borderRadius: '5px',
    fontSize: '18px',
    backgroundColor: 'white'
  }
})