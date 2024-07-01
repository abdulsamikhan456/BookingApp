import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available Rooms",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 120,
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const [selected, setSelected] = useState([]);

  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable
            style={{ margin: 10, backgroundColor: "white", padding: 10 }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                alignItem: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{ color: "#007fff", fontSize: 17, fontWeight: "500" }}
              >
                {item.name}
              </Text>
              <AntDesign name="infocirlceo" size={24} color="#007fff" />
            </View>
            <Text style={{ marginTop: 3, fontSize: 16 }}>
              Pay at the Properties
            </Text>
            <Text style={{ marginTop: 3, color: "green", fontSize: 16 }}>
              Free Cancellation Available
            </Text>
            <View
              style={{
                marginTop: 3,
                flexDirection: "row",
                alignItem: "center",
                gap: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "red",
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}> Rs {route.params.newPrice}</Text>
            </View>
            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  borderColor: "#007fff",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#007fff",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
        onPress={() => navigation.navigate("User", {
          oldPrice: route.params.oldPrice,
          newPrice: route.params.newPrice,
          name: route.params.name,
          children: route.params.children,
          adults: route.params.adults,
          rating: route.params.rating,
          startDate: route.params.startDate,
          endDate: route.params.endDate
        })}
          style={{
            backgroundColor: "#007fff",
            padding: 8,
            marginBottom: 30,
            marginHorizontal: 15,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({});
