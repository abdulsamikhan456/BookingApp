import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { Image } from "react-native";
import { pixleNormalize } from "../components/Normalize";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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
  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo, index) => (
            <View key={index} style={{ margin: 6 }}>
              <Image
                style={{
                  width: 115,
                  height: 80,
                  borderRadius: 8,
                }}
                source={{ uri: photo.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItem: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>

        <View
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 15,
                  }}
                >
                  Genius Level
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#17B169",
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              Travel sustainable
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults} adults
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 12,
            marginTop: 4,
            gap: 8,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 20,
              textDecorationLine: "line-through",
            }}
          >
            {route.params.oldPrice * route.params.adults}
          </Text>
          <Text style={{ fontSize: 20 }}>
            Rs {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 7,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 78,
            borderRadius: 4,
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>
            {offerPrice.toFixed(0)} % OFF
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItem: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 3 }}>
              Check In
            </Text>
            <Text style={{ fontSize: 13, fontWeight: "600", color: "#007fff" }}>
              {route.params.selectedDate.startDate}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text style={{ fontSize: 13, fontWeight: "600", color: "#007fff" }}>
              {route.params.selectedDate.endDate}
            </Text>
          </View>
        </View>
        <View style={{ margin: 8 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 3 }}>
            Rooms and Guests
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "600", color: "#007fff" }}>
            {route.params.rooms} rooms {route.params.adults} adults{" "}
            {route.params.children} children
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 12,
          }}
        />

        <Pressable
        onPress={() => navigation.navigate("Rooms",{
          rooms: route.params.availableRooms,
          oldPrice: route.params.oldPrice,
          newPrice: route.params.newPrice,
          name: route.params.name,
          children: route.params.children,
          adults: route.params.adults,
          rating: route.params.rating,
          startDate: route.params.selectedDate.startDate,
          endDate: route.params.selectedDate.endDate

        })}
          style={{
            backgroundColor: "#6cb4ee",
            marginBottom: 60,
            paddingVertical: 10,
            padding: 20,
            width: "100%",
            borderRadius: 15,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "500",
              fontSize: 15,
            }}
          >
            Select Availabilty
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
