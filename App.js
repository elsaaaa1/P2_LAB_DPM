import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const emojis = ['😀', '🎉', '❤️', '👍', '🌟'];

  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Ellsya Putri Ananda😉</Text>

      {/* Flexbox untuk dua kotak */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.leftBox]}>
          <Text style={styles.boxText}>Coquetee</Text>
        </View>
        <View style={[styles.box, styles.rightBox]}>
          <Text style={styles.boxText}>Borahe</Text>
        </View>
      </View>

      {/* Pilihan Emotikon */}
      <View style={styles.emojiContainer}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedEmoji(emoji)}
            style={styles.emojiButton}
          >
            <Text style={styles.emoji}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Teks Emotikon Terpilih */}
      {selectedEmoji !== '' && (
        <Text style={styles.selectedEmojiText}>
          Anda memilih: <Text style={styles.emojiSelected}>{selectedEmoji}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe', // Warna putih terang
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24, // Ukuran teks 24
    fontWeight: 'bold', // Gaya tebal (bold)
    color: 'blue', // Warna biru
    marginBottom: 30, // Jarak antara teks dan kotak
    textAlign: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftBox: {
    backgroundColor: '#ffc1e3', // Pink soft
  },
  rightBox: {
    backgroundColor: '#dcd6f7', // Lilac soft
  },
  boxText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  emojiContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    width: '80%',
  },
  emojiButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  emoji: {
    fontSize: 24,
  },
  selectedEmojiText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#555',
  },
  emojiSelected: {
    fontSize: 24,
    color: '#4a90e2',
  },
});
