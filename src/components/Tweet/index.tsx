import React, { memo, FC } from 'react';
import { View, Text, Image } from 'react-native';

// assets
import { twitter, like, comment, share, content } from 'assets/images';

// styles
import styles from './styles';

export interface ITweetProps {
  name: string;
  date: string;
  message: string;
}

export const Tweet: FC<ITweetProps> = memo((props) => {
  const { name, date, message } = props;
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={twitter} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.username}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.message}>{message}</Text>
          <Image
            style={styles.imagePreview}
            source={content}
            resizeMode="cover"
          />
        </View>
        <View style={styles.actions}>
          <Image style={styles.action} source={comment} />
          <Image style={styles.action} source={share} />
          <Image style={styles.action} source={like} />
        </View>
      </View>
    </View>
  );
});
