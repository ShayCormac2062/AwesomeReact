import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../src/modules/theme/hooks/useTheme";
import { ThemeTypes } from "../src/modules/theme/types/ThemeTypes";

export const HomeScreen = () => {

  const { Colors, selectTheme, changeTheme } = useTheme();
  const styles = style(Colors);

  const handleChangeTheme = async () => {
    changeTheme(selectTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.content]}>
        <Text style={styles.titleText}>HomeScreen</Text>
        <TouchableOpacity style={[styles.buttonSecond]}
                          onPress={() => handleChangeTheme()}>
          <Text style={styles.appButtonText}>Сменить тему</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backgroundLight,
  }
  ,
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFirst: {
    width: 160,
    height:
      50,
    marginTop: 100,
    justifyContent:
      "center",
    alignItems:
      "center",
    backgroundColor:
    colors.buttonLight,
  },
  buttonSecond: {
    width: 160,
    height:
      50,
    marginTop: 30,
    justifyContent:
      "center",
    alignItems:
      "center",
    backgroundColor:
    colors.buttonDark,
  }
  ,
  titleText: {
    color: colors.textLight,
    fontSize:
      20,
  }
  ,
  appButtonText: {
    color: colors.textDark,
    fontSize:
      16,
    textAlign: "center",
  },
  loader: {
    flex: 1,
    alignContent: "center",
  },
});
