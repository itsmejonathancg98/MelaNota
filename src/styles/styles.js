/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {normalize} from 'react-native-elements';
import {theme} from '../core/theme';

const {width, height} = Dimensions.get('window');

/** @group flexible header and body */
/******************** Auth.js stylesheet *********************/
export default {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: 'center',
        margin: 30,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
    },
    footerLink: {
        color: '#788eec',
        fontWeight: 'bold',
        fontSize: 16,
    },

  root: {
    flex: 1,
    backgroundColor: '#2b8fff',
    // width: width,
    // height: height
  },
  Background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 28, 0.85)',
  },

  Background1: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  rect: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  rect_imageStyle: {
    opacity: 1,
    maxHeight: height,
    maxWidth: width,
  },
  Logo: {
    width: 150,
    height: 120,
    marginTop: 130,
    alignSelf: 'center',
    marginBottom: 4,
  },
  Form: {
    top: '30%',
    left: 41,
    height: 325,
    position: 'absolute',
    right: 41,
    marginBottom: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 10,
  },
  Username: {
    height: 40,
    backgroundColor: 'rgb(212, 220, 232)',
    opacity: 5,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 50,
    width: '70%',
    alignSelf: 'center',
  },
  UsernameInput: {
    //height: 30,
    color: 'rgba(255,255,255,1)',
    flex: 1,
    // flexDirection: 'column',
    fontSize: 14,
    //marginRight: 11,
    //marginLeft: 11,
    //marginTop: 14
  },
  Password: {
    height: 40,
    backgroundColor: 'rgb(212, 220, 232)',
    opacity: 1,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 20,
    width: '70%',
    alignSelf: 'center',
  },
  PasswordInput: {
    //height: 30,
    color: 'rgba(255,255,255,1)',
    flex: 1,
    // flexDirection: 'column',
    fontSize: 14,
    // marginRight: 17,
    // marginLeft: 8,
    // marginTop: 14
  },
  Input: {
    color: 'rgba(255,255,255,1)',
    flex: 1,
    flexDirection: 'column',
    fontSize: 14,
  },
  UsernameColumnFiller: {
    flex: 2,
  },
//   button: {
//     backgroundColor: 'rgb(45,187,200)',
//     borderRadius: 5,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 20,
//     paddingRight: 20,
//   },

  text2: {
    color: 'rgba(255,255,255,1)',
    alignSelf: 'center',
    fontWeight: 'bold',
  },

  signIn: {
    // fontFamily: 'Futura',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
    color: 'rgb(45,187,200)',
  },

  intro: {
    fontWeight: 'bold',
    height: '20%',
    backgroundColor: 'rgb(89, 103, 123)',
    borderRadius: 10,
    textAlign: 'center',
    padding: 20,
    overflow: 'hidden',
    alignItems: 'center',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: 40,
  },

  welcomeLogo: {
    marginTop: 130,
    alignSelf: 'center',
    marginBottom: 4,
    color: 'rgba(255,255,0,1)',
    fontSize: 35,
    fontWeight: 'bold',
  },

  rectStack: {
    flex: 1,
  },

  /******************** Dashboard.js stylsheet *********************/
  imageView: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 1,
  },
  ImageTextStyle: {
    // borderWidth: 1,
    // borderColor: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  welcomeText: {
    width: 150,
    height: 120,
    marginTop: 130,
    alignSelf: 'center',
    marginBottom: 4,
    color: 'rgba(255,255,255,1)',
  },
  welcomeTxt: {
    fontWeight: 'bold',
    // fontFamily: 'Futura',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
    color: 'rgba(255,255,255,1)',
  },
  welcomeTxt1: {
    fontWeight: 'bold',
    // fontFamily: 'Futura',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color: 'rgba(255,255,255,1)',
  },

  welcomeTxt2: {
    fontWeight: 'bold',
    // fontFamily: 'Futura',
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(255,255,255,1)',
  },

  timeEntry: {
    width: 150,
    height: 140,
    marginTop: 140,
    alignSelf: 'center',
    marginBottom: 4,
  },

  timeEntry1: {
    width: 150,
    height: 140,
    alignSelf: 'center',
    marginTop: 70,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },

  footer: {
    alignSelf: 'center',
    flex: 3,
  },

  signout: {
    backgroundColor: 'red',
    borderRadius: 10,
    textAlign: 'center',
    width: 60,
    height: 30,
    alignSelf: 'center',
    marginBottom: 40,
    overflow: 'hidden',
    // marginBottom: 4,
    // marginLeft: 4,
    color: 'white',
    paddingTop: 8,
    fontWeight: 'bold',
  },

  //react native gesture handler styles
  leftAction: {
    backgroundColor: 'rgba(92, 178, 0, 0.73)',
    justifyContent: 'center',
    flex: 1,
    height: 59,
    opacity: 5,
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
  },

  actionText: {
    color: 'rgba(255,255,255,1)',
    fontWeight: '600',
    padding: 20,
  },

  buttonProp: {
    backgroundColor: 'rgba(253, 11, 15, 0.73)',
    opacity: 5,
    borderRadius: 10,
    textAlign: 'center',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    overflow: 'hidden',
    alignItems: 'baseline',
    fontSize: normalize(12),
    color: 'rgba(255, 255, 255, 1)',
  },

  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },

  //Picker styles
  inputIOS: {
    // backgroundColor: 'rgb(32, 150, 245)',
    // opacity: 5,
    // // borderRadius: 10,
    // textAlign: 'left',
    // flexDirection: 'row',
    // width: width,
    // // overflow: 'hidden',
    // alignItems: 'center',
    // fontSize: normalize(12),
    // color: 'rgba(255, 255, 255, 1)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
  },

  inputAndroid: {
    backgroundColor: 'rgb(32, 150, 245)',
    opacity: 5,
    // borderRadius: 10,
    textAlign: 'center',
    flexDirection: 'row',
    margin: 0,
    padding: 10,
    // overflow: 'hidden',
    alignItems: 'baseline',
    fontSize: normalize(12),
    color: 'rgba(255, 255, 255, 1)',
  },

  iconContainer: {
    top: 5,
    right: 15,
  },
};
