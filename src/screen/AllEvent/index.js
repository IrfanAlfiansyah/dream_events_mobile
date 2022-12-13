import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from '../../utils/axios';
import defaultImage from '../../assets/event/event.png';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import SearchName from '../../components/SearchName';
import Sort from '../../components/Sort';

export default function AllEvent(props) {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [searchName, setSearchName] = useState('');
  // const [sort, setSort] = useState('ASC');
  // const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getDataProduct();
  }, []);

  useEffect(() => {
    getDataProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchName]);

  const getDataProduct = async () => {
    try {
      if (page <= totalPage) {
        const result = await axios.get(
          `event?name=${searchName}&sort=&limit=4&page=${page}&searchDate=`,
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
    } catch (error) {}
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataProduct();
    }
  };

  const handleLoadMore = () => {
    console.log('GET DATA AGAIN');
    if (!loadMore) {
      // false
      const newPage = page + 1; // 1 + 1 = 2
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  const handleSort = sortItems => {
    // setSortBy('name');
    setSort(sortItems);
  };

  const handleSearch = text => {
    console.log('ARE YOU CALLING ME ?', text);
    setSearchName(text);
  };

  const handleDetail = eventId => {
    props.navigation.navigate('Detail', {eventId: eventId});
  };

  const ListHeader = () => {
    return (
      <>
        <View style={styles.content}>
          <View style={styles.filter}>
            <SearchName search={handleSearch} searchName={searchName} />
            <Sort sort={handleSort} />
          </View>
          <View style={styles.event}>
            <View style={styles.eventView}>
              <Text style={styles.eventText}>Events For You</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={{margin: 10}}>
      <FlatList
        data={data}
        numColumns="1"
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              source={
                item.image
                  ? {
                      uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${item.image}`,
                    }
                  : defaultImage
              }
              style={styles.image}
            />
            <View style={styles.rowCard}>
              <Text style={styles.cardTextBold}>{item.name}</Text>
              <Text style={styles.cardText}>
                {moment(item.dateTimeShow).format('ddd MMM Do , h:mm a')}
              </Text>
              <TouchableOpacity onPress={handleDetail}>
                <Icon
                  name="arrow-circle-right"
                  size={35}
                  color={'rgba(252, 16, 85, 1)'}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center'}}>
            {last ? (
              <Text>-- No more data --</Text>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null}
          </View>
        )}
      />
    </View>
  );
}
