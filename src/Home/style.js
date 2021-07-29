import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    paddingTop: '10px',
  },

  ocorrButton: {
    flex: 1,
    width: '90%',
    borderRadius: '20px',
    alignSelf: 'center',
    marginBottom : '10px',
    marginTop: "10px"
  },

  addButtonGrad: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: '50px',
    height: '50px',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: '50%',
    marginBottom : '10px',
    marginTop: "10px"
  },

  addButton: {
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: '50%',
  }
});
