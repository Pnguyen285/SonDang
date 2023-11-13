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
  Button,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
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
export default function Signup() {
  const [username, setUsername] = useState("");
  const [namelog, setNamelog] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [forgotpassword, setForgotpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  

  const toggle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <StatusBar style={"light"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <ImageBackground
          source={require("../assets/images/backgroundSignup.png")}
          style={styles.backgroundSignup}
        >
          <KeyboardAvoidingView behavior="height" style={styles.form}>
            <View style={{ padding: 20 }}>
              <Text style={styles.textSignup}>Đăng ký</Text>
            </View>
            <View style={{ bottom: 24 }}>
              <TextInput
                style={styles.input}
                placeholder="Họ và tên"
                value={username}
                onChangeText={setUsername}
              />

              <TextInput
                style={styles.input}
                placeholder="Tên đăng nhập"
                value={namelog}
                onChangeText={setNamelog}
              />

              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />

              <TextInput
                style={styles.input}
                placeholder="Số điện thoại"
                value={phone}
                onChangeText={setPhone}
              />

              <TextInput style={styles.input} placeholder="Ngày sinh" />
              <View style={styles.sex}>
                <TouchableOpacity style={styles.btnSex}>
                  <Text style={styles.btnNam}>Nam</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSex}>
                  <Text style={styles.btnNu}>Nữ</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Mật khẩu"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
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
              <View style={{ bottom: 23 }}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry
                  value={forgotpassword}
                  onChangeText={setForgotpassword}
                  secureTextEntry={!showPassword}
                />

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

              <TouchableOpacity >
                <LinearGradient
                  colors={["#ad3335", "#f10014"]}
                  style={styles.backgroundbtnSignup}
                >
                  <Text style={styles.btn}>Đăng ký</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
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
              top: 10,
            }}
          >
            <Text style={{ color: "white" }}>Đã có tài khoản Peekaboo?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Đăng nhập")}>
              <Text
                style={{
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                  color: "#cd5c5c",
                }}
              >
                Đăng nhập ngay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundSignup: {
    height: Dimensions.get("window").height / 1.47,
  },
  form: {
    backgroundColor: "white",
    padding: 25,
    marginVertical: 30,
    marginHorizontal: 20,
    paddingBottom: 0,
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
  textSignup: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    bottom: 28,
    color: "#b22222",
  },
  sex: {
    flexDirection: "row",
  },
  btnSex: {
    width: 165,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 3,
    backgroundColor: "#F1F1F1",
  },
  btnNam: {
    color: "#A2A2A2",
    marginHorizontal: 55,
  },
  btnNu: {
    color: "#A2A2A2",
    marginHorizontal: 60,
  },
  backgroundbtnSignup: {
    borderRadius: 20,
    marginTop: 5,
    height: 50,
    width: "100%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    bottom: 30,
  },
  btn: {
    color: "white",
    fontWeight: "bold",
  },

  logoApp: {
    width: 220,
    height: 50,
    top: 140,
    left: 100,
  },
});
