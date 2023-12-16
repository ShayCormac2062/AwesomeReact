import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {useTheme} from "../src/modules/theme/hooks/useTheme";

export const NewsScreen = () => {

  const {Colors, selectTheme, changeTheme} = useTheme();
  const styles = style(Colors);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.content]}>
        <Text style={styles.titleText}>News</Text>
      </View>
    </SafeAreaView>
  )
}

const style = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.backgroundLight
  }
  ,
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
  ,
  titleText: {
    color: colors.textLight,
    fontSize:
      20,
    fontFamily: 'pro'
  }
});
