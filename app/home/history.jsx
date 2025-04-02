import { Dimensions, Image, Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import BottomNavBar from '../../components/BottomNavBar'
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Mastercard from '../../assets/images/home/mastercard.png'
import { useState } from 'react'
import Profile from '../../assets/images/home/profile.png'

const History = () => {

  const [detailsModel, setDetailsModel] = useState(false);
  const [sortModel, setSortModel] = useState(false)

  return (

    <View style={{ flex: 1, backgroundColor: "#fff" }}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop: 50, paddingHorizontal: 20 }}>

        <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
          <View></View>
          <Text style={{ fontSize: 16 }}>History</Text>
          <Pressable onPress={() => { setSortModel(true) }}><Ionicons name="barcode-outline" size={20} color="black" /></Pressable>
        </View>


        <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "600" }}>Active Request</Text>


        {
          [1, 2, 3]?.map((i) => (
            <Pressable onPress={() => setDetailsModel(true)} key={i} style={{ backgroundColor: "#FBFCFF", padding: 10, borderRadius: 10, marginTop: 20 }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <FontAwesome5 name="truck-loading" size={20} color="black" />
                  <Text>Towing services</Text>
                </View>

                <View style={{ backgroundColor: "#FFECAE", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#F8BD00" }}>In Transit</Text></View>

              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <MaterialIcons name="radar" size={20} color="#2669FF" />
                  <View>
                    <Text>Aristotle, New York</Text>
                    <Text style={{ color: "#727272" }}>Pick-up location</Text>
                  </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#AEFEBF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#34C759" }}>$800</Text></View>

              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <Entypo name="location-pin" size={20} color="#FF9500" />
                  <View>
                    <Text>Swan, New York</Text>
                    <Text style={{ color: "#727272" }}>Drop-off location</Text>
                  </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#DDDDDD", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#000" }}>20m</Text></View>

              </View>

            </Pressable>
          ))
        }






      </ScrollView>

      <Modal onRequestClose={() => setDetailsModel(false)} visible={detailsModel} animationType="slide" transparent={true}>

        <Pressable onPress={() => setDetailsModel(false)} style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50, }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

              <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                <FontAwesome5 name="truck-loading" size={20} color="black" />
                <Text>Towing services</Text>
              </View>

              <Pressable onPress={() => { router.push("/home/rerequest") }} style={{ backgroundColor: "#2669FF", paddingHorizontal: 10, paddingVertical: 7, borderRadius: 100 }}><Text style={{ color: "#fff" }}>View Map</Text></Pressable>

            </View>


            <View style={{ borderWidth: 1, borderColor: "#DAE5FF", padding: 10, marginTop: 20, borderRadius: 10 }}>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <MaterialIcons name="radar" size={20} color="#2669FF" />
                  <View>
                    <Text>Aristotle, New York</Text>
                    <Text style={{ color: "#727272" }}>Pick-up location</Text>
                  </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#AEFEBF", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#34C759" }}>$800</Text></View>

              </View>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>

                <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                  <Entypo name="location-pin" size={20} color="#FF9500" />
                  <View>
                    <Text>Swan, New York</Text>
                    <Text style={{ color: "#727272" }}>Drop-off location</Text>
                  </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: "#DDDDDD", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 100 }}><Text style={{ color: "#000" }}>20m</Text></View>

              </View>

            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20 }}>
              <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
                <Image source={Profile} style={{ width: 30, height: 30 }} />
                <View>
                  <Text>Luke James</Text>
                  <Text style={{ color: "#727272" }}>Birdsall, New York</Text>
                </View>
              </View>
              <View>
                <Text>Chevrolet</Text>
                <Text style={{ color: "#727272" }}>Wheel lift</Text>
              </View>
            </View>

            <View style={{ marginTop: 20, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Rating</Text>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
                <AntDesign name="star" size={15} color="#F8BD00" />
                <AntDesign name="star" size={15} color="#F8BD00" />
                <AntDesign name="star" size={15} color="#F8BD00" />
                <AntDesign name="star" size={15} color="#F8BD00" />
                <AntDesign name="star" size={15} color="#989999" />

              </View>
            </View>

            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Discount</Text>
              <Text>---</Text>
            </View>
            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Payment Method</Text>
              <Image source={Mastercard} />
            </View>
            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Date</Text>
              <Text>12-03-2025</Text>
            </View>
            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Request No</Text>
              <Text>TX - 331401010111114</Text>
            </View>
            <View style={{ marginTop: 10, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <Text style={{ color: "#727272" }}>Feedback</Text>
            </View>

            <TextInput placeholder='He was a friendly and a very nice young man.' style={{ marginTop: 10, paddingHorizontal: 10, paddingVertical: 12, borderWidth: 1, borderColor: "#DAE5FF", borderRadius: 10 }} />

            <Pressable onPress={() => { router.push("/home/request") }} style={{ width: "100%", backgroundColor: "#2669FF", height: 45, justifyContent: "center", alignItems: "center", borderRadius: 10, marginTop: 20 }}><Text style={{ color: "white" }}>Re-order Service</Text></Pressable>



          </View>

        </Pressable>

      </Modal>


      <Modal onRequestClose={() => setSortModel(false)} visible={sortModel} animationType="slide" transparent={true}>

        <Pressable onPress={() => setSortModel(false)} style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>

          <View style={{ backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 25, paddingBottom: 50, }}>
            <Text>Sort by</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
              <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#FFE5C0", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                <Text style={{ color: "#FF9500" }}>In Transit</Text>
              </View>
              <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#C5FFD3", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                <Text style={{ color: "#34C759" }}>Successful</Text>
              </View>
              <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#FFCFCC", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                <Text style={{ color: "#FF3B30" }}>Failed</Text>
              </View>
            </View>

            <Text style={{ marginTop: 20 }}>Filter by</Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, gap: 10 }}>

              <View style={{ flex: 1 }}>
                <Text style={{ color: "#727272" }}>From</Text>
                <TextInput placeholderTextColor={"#727272"} placeholder='Mon 02 Mar.' style={{ borderRadius: 5, paddingRight: 10, borderBottomWidth: 1, borderColor: "#DDDDDD" }} />
              </View>

              <View style={{ flex: 1 }}>
                <Text style={{ color: "#727272" }}>To</Text>
                <TextInput placeholderTextColor={"#727272"} placeholder='Mon 02 Mar.' style={{ borderRadius: 5, paddingRight: 10, borderBottomWidth: 1, borderColor: "#DDDDDD" }} />
              </View>


            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 }}>

              <Pressable onPress={() => { setSortModel(false) }} style={{ flex: 1, borderWidth: 1, borderColor: "#DDDDDD", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                <Text>Cancel</Text>
              </Pressable>

              <Pressable onPress={() => { setSortModel(false) }} style={{ flex: 1, backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                <Text style={{ color: "#fff" }}>Apply</Text>
              </Pressable>


            </View>
          </View>

        </Pressable>

      </Modal>



      {
        sortModel && (
          <Pressable style={{ position: "absolute", width: Dimensions.get("screen").width, height: Dimensions.get("screen").height, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: "flex-end", alignItems: "flex-end" }}>


            <View style={{ backgroundColor: "#FFFFFF", padding: 20, width: Dimensions.get("screen").width, borderTopStartRadius: 30, height: 320, borderTopEndRadius: 30 }}>


              <Text>Sort by</Text>

              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 6 }}>
                <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#FFE5C0", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                  <Text style={{ color: "#FF9500" }}>In Transit</Text>
                </View>
                <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#C5FFD3", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                  <Text style={{ color: "#34C759" }}>Successful</Text>
                </View>
                <View style={{ flex: 1, paddingVertical: 6, borderWidth: 1, borderColor: "#FFCFCC", marginTop: 7, justifyContent: "center", alignItems: "center", borderRadius: 100, }}>
                  <Text style={{ color: "#FF3B30" }}>Failed</Text>
                </View>
              </View>

              <Text style={{ marginTop: 20 }}>Filter by</Text>

              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, gap: 10 }}>

                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#727272" }}>From</Text>
                  <TextInput placeholderTextColor={"#727272"} placeholder='Mon 02 Mar.' style={{ borderRadius: 5, paddingRight: 10, borderBottomWidth: 1, borderColor: "#DDDDDD" }} />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={{ color: "#727272" }}>To</Text>
                  <TextInput placeholderTextColor={"#727272"} placeholder='Mon 02 Mar.' style={{ borderRadius: 5, paddingRight: 10, borderBottomWidth: 1, borderColor: "#DDDDDD" }} />
                </View>


              </View>


              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, gap: 10 }}>

                <Pressable onPress={() => { setSortModel(false) }} style={{ flex: 1, borderWidth: 1, borderColor: "#DDDDDD", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                  <Text>Cancel</Text>
                </Pressable>

                <Pressable onPress={() => { setSortModel(false) }} style={{ flex: 1, backgroundColor: "#2669FF", justifyContent: "center", alignItems: "center", height: 45, borderRadius: 100 }}>
                  <Text style={{ color: "#fff" }}>Apply</Text>
                </Pressable>


              </View>





            </View>


          </Pressable>
        )
      }

      {(!detailsModel && !sortModel) && (<BottomNavBar />)}

    </View>
  )
}

export default History 