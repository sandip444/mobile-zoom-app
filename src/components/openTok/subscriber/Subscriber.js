import React, {useState} from 'react';
import {StyleSheet, FlatList, ScrollView} from 'react-native';
import {OTSubscriber, OTSubscriberView} from 'opentok-react-native';
import {View, Text, Dimensions} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
const {width, height} = Dimensions.get('window');
const numColumns = 2;

const formatData = (subscribersData, numColumns) => {
  console.log('-------------Subscribers');
  console.log(subscribersData);

  let i = 0;
  while (i != subscribersData.length) {
    if (subscribersData[i].empty) {
      subscribersData.splice(i, 1);
    } else {
      i++;
    }
  }
  const numberOfFullRows = Math.floor(subscribersData.length / numColumns);

  let numberOfElementsLastRow =
    subscribersData.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    subscribersData.push({
      key: `blank-${numberOfElementsLastRow}`,
      empty: true,
    });
    numberOfElementsLastRow++;
  }

  console.log('Subscribers-----------');
  return subscribersData;
};
renderItem = ({item, index}) => {
  if (item.empty === true) {
    return <View style={[styles.item, styles.itemInvisible]} />;
  }
  return (
    <OTSubscriberView
      streamId={item}
      style={[styles.item, styles.itemInvisible]}
    />
  );
};

const listEmptyComponent = () => {
  return (
    <View
      style={{alignItems: 'center', alignContent: 'center', marginTop: 100}}>
      <Text>Waiting for people to join! ...</Text>
    </View>
  );
};

const Subscriber = () => {
  const renderSubscribers = (subscribers) => {
    var length = subscribers.length;
    var per_page = 4;
    var formatted_array = [];
    for (var index = 0; index < length; index += per_page) {
      var myChunk = subscribers.slice(index, index + per_page);
      formatted_array.push(myChunk);
    }
    console.log(formatted_array);

    return (
      <>
        <View style={styles.container}>
          <SwiperFlatList
            // autoplay
            // autoplayDelay={2}
            // autoplayLoop
            index={0}
            showPagination>
            {formatted_array.map((obj, key) => {
              return (
                <View style={[styles.child, {backgroundColor: 'transparent'}]}>
                  <FlatList
                    key={numColumns}
                    data={formatData(obj, numColumns)}
                    renderItem={renderItem}
                    listEmptyComponent={listEmptyComponent}
                    numColumns={numColumns}
                    keyExtractor={(item) => item}
                  />
                </View>
              );
            })}
          </SwiperFlatList>
        </View>
      </>
    );
  };

  return <OTSubscriber>{renderSubscribers}</OTSubscriber>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: 'transparent',
  },
  child: {
    height: height * 0.7,
    width,
    justifyContent: 'center',
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    width: 200,
    height: 200,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  tab: {
    height: 500,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  itemText: {
    color: '#fff',
  },
});
export default Subscriber;
