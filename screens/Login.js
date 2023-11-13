import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    useWindowDimensions,
    Modal,
  } from "react-native";
  import { useState, useEffect } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { LinearGradient } from "expo-linear-gradient";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
  import { StatusBar } from "expo-status-bar";
  import { useNavigation } from "@react-navigation/native";
  // import { useFonts } from "expo-font";
  // import AppLoading from "expo-app-loading";
  export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const validateForm = () => {
      let errors = {};
  
      if (!username) errors.username = "Vui lòng nhập tên đăng nhập !";
      if (!password) errors.password = "Vui lòng nhập mật khẩu !";
  
      setErrors(errors);
  
      return Object.keys(errors).length === 0;
    };
  
    const handleSubmit = () => {
      if (validateForm()) {
        console.log("Submitted", username, password);
        setUsername("");
        setPassword("");
        setErrors({});
      }
    };
    const toggle = () => {
      setShowPassword(!showPassword);
    };
    return (
      <>
        <StatusBar style={"light"} />
        <SafeAreaView style={{flex: 1, backgroundColor: "black" }}>
          <ImageBackground
            source={require("../assets/images/backgroundLogin.png")}
            style={styles.backgroundLogin}
          >
            
            <View>
              <KeyboardAvoidingView style={styles.form}>
                <View style={{ padding: 20 }}>
                  <Text style={styles.textLogin}>Đăng nhập</Text>
                </View>
                <View style={{ bottom: 24 }}>
                  <Text style={styles.label}>Username</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email hoặc tên đăng nhập"
                    value={username}
                    onChangeText={setUsername}
                  />
                  {errors.username ? (
                    <Text style={styles.errorsText}>{errors.username}</Text>
                  ) : null}
                  <Text style={styles.label}>Password</Text>
                  <View>
                    <TextInput
                      style={styles.input}
                      placeholder="Mật khẩu"
                      secureTextEntry
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                    />
                    {errors.password ? (
                      <Text style={styles.errorsText}>{errors.password}</Text>
                    ) : null}
                    <TouchableOpacity onPress={toggle}>
                      <AntDesign
                        name="eyeo"
                        size={24}
                        color="black"
                        style={
                          errors.password
                            ? [styles.eye, { bottom: 73 }]
                            : [styles.eye, { bottom: 45 }]
                        }
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.forgotpass}>Quên mật khẩu?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSubmit}>
                    <LinearGradient
                      colors={["#ad3335", "#f10014"]}
                      style={styles.backgroundbtnLogin}
                    >
                      <Text style={styles.btn} onPress={handleSubmit}>
                        Đăng nhập
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
  
                <Text style={styles.or}>or</Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity style={styles.facebook}>
                    <MaterialCommunityIcons
                      name="facebook"
                      size={50}
                      color="#4354CE"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.google}>
                    <FontAwesome
                      name="google-plus-official"
                      size={50}
                      color="#CE4343"
                    />
                  </TouchableOpacity>
                </View>
              </KeyboardAvoidingView>
            </View>
          </ImageBackground>
          <View>
            <Image
              source={require("../assets/images/logoApp.png")}
              style={styles.logoApp}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                bottom: 40,
              }}
            >
              <Text style={{ color: "white" }}>Chưa có tài khoản Peekaboo?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Đăng ký")} >
                <Text
                  style={{
                    fontWeight: "bold",
                    textDecorationLine: "underline",
                    color: "#cd5c5c",
                  }}
                >
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
             
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    backgroundLogin: {
      height: Dimensions.get("window").height / 1.47,
    },
    form: {
      backgroundColor: "white",
      padding: 25,
      marginVertical: 130,
      marginHorizontal: 20,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elavation: 5,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold",
      color: "#192795",
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: "#ddd",
      marginBottom: 15,
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#F1F1F1",
    },
    imageBack: {
      overflow: "hidden",
      alignSelf: "flex-start",
      position: "relative",
      display: "flex",
      marginTop: 10,
      marginLeft: 20,
      width: 40,
      flexShrink: 0,
  
      aspectRatio: 1,
    },
    eye: {
      left: 300,
      justifyContent: "center",
  
      opacity: 0.25,
    },
    textLogin: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      bottom: 28,
      color: "#b22222",
    },
    errorsText: {
      color: "red",
      marginBottom: 10,
    },
    forgotpass: {
      textDecorationLine: "underline",
      fontStyle: "italic",
      fontSize: 13,
      marginLeft: 230,
      marginVertical: -7,
      marginTop: -27,
      color: "#192795",
    },
    backgroundbtnLogin: {
      borderRadius: 20,
      marginTop: 5,
      height: 50,
      width: "100%",
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.6,
    },
    btn: {
      color: "white",
      fontWeight: "bold",
    },
    or: {
      fontSize: 13,
      fontWeight: "bold",
      color: "#dcdcdc",
      marginHorizontal: 160,
      bottom: 17,
    },
    facebook: {
      top: -10,
      left: 70,
    },
    google: {
      top: -10,
      left: 160,
    },
    logoApp: {
      width: 220,
      height: 50,
      top: 140,
      left: 100,
    },
  });
  