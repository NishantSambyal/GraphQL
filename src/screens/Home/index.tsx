import { useQuery } from '@apollo/client';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { COMPANY_QUERY } from '../../GraphQL/queries/queries';
import BaseScreen from '../../components/BaseScreen';
import { strings } from '../../constants/strings';
import { styles } from './styles';

const HomeScreen = () => {
  const { data, loading, error } = useQuery(COMPANY_QUERY);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>{strings.loading}</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={[styles.infoText, styles.errorText]}>
          {`${strings.error} ${error.message}`}
        </Text>
      </View>
    );
  }

  const renderHeader = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{data.company.name}</Text>
      <Text style={styles.ceo}>{`${strings.ceo} ${data.company.ceo}`}</Text>
      <Text style={styles.coo}>{`${strings.coo} ${data.company.coo}`}</Text>
      <Text style={styles.summary}>{data.company.summary}</Text>
    </View>
  );

  return (
    <BaseScreen scrollEnabled={false}>
      <View style={styles.screenContainer}>
        <FlatList
          data={data.ships}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderHeader()}
          renderItem={({ item }) => (
            <View style={styles.shipCard}>
              <Image
                style={styles.logo}
                source={{ uri: item.image }}
              />
              <View style={styles.shipInfo}>
                <Text style={styles.shipTitle}>{item.name}</Text>
                <Text style={styles.shipType}>{item.type}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </BaseScreen>
  );
};

export default HomeScreen;
