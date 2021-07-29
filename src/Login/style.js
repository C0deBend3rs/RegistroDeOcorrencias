import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  inputContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    gap: '10px'
  },

  logButton: {
    borderRadius: "10px"
  },

  FPButton: {
    width: "40%",
    borderRadius: "100px",
    alignSelf: "center",
    borderColor: "grey"
  },

  FPtitle: {
    color: "black",
    fontSize: "10px",
    fontWeight: "bold"
  },

  titleStyle: {
    marginTop: "15%",
    color: "#1A73E9",
    fontWeight: "bold",
    fontSize: "24px" 
  }
})