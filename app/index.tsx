import { GlassView } from 'expo-glass-effect';
import { Image } from 'expo-image';
import React, { useEffect, useRef } from 'react';
import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function HomeScreen() {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 8,
        tension: 40,
        delay: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/background.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: Platform.OS === 'ios' ? 0.5 : 0.2,
        }}
      />

      <View style={{ marginTop: 120, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/heart.svg')}
          style={{ marginBottom: 10, width: 70, height: 70 }}
        />
        
        <Text style={{ fontSize: 55 }}>Привет</Text>

        <Text style={{ textAlign: "center", width: 190, fontSize: 21, color: "#666" }}>Это ваш личный чат с собеседником</Text>
      </View>

      <View style={{ marginTop: 60, width: "100%", height: 300, flexDirection: "column", gap: 10, paddingHorizontal: 20 }}>

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, borderRadius: 20, backgroundColor: "#fff", }}>
          <View style={{ marginRight: 15 }}>
            <Image
              source={require('../assets/home_safety.png')}
              style={{ width: 60, height: 60, borderRadius: 15 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>Только для вас двоих</Text>
            <Text style={{ color: "#666", fontSize: 14 }}>Никто больше не увидит ваши сообщения</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, borderRadius: 20, backgroundColor: "#fff", }}>
          <View style={{ marginRight: 15 }}>
            <Image
              source={require('../assets/home_heart.png')}
              style={{ width: 60, height: 60, borderRadius: 15 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>Ваши важные моменты</Text>
            <Text style={{ color: "#666", fontSize: 14 }}>Сохраняйте то, что важно именно для вас</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: 20, borderRadius: 20, backgroundColor: "#fff", }}>
          <View style={{ marginRight: 15 }}>
            <Image
              source={require('../assets/home_lock.png')}
              style={{ width: 60, height: 60, borderRadius: 15 }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "bold", fontSize: 15, marginBottom: 4 }}>Безопасно и надежно</Text>
            <Text style={{ color: "#666", fontSize: 14 }}>Ваши данные под защитой</Text>
          </View>
        </View>

      </View>
      
      <View style={{ position: "absolute", width: "100%", bottom: 30, alignItems: "center" }}>
        <Animated.View 
          style={{ 
            position: "absolute", 
            width: "100%", 
            bottom: 0, 
            alignItems: "center",
            transform: [{ translateY: slideAnim }]
          }}
        >
          {Platform.OS === 'ios' ? (
            <Pressable
              onPress={() => {console.log('Button pressed')}}
            >
              <GlassView
                style={{
                  marginTop: 100,
                  alignItems: 'center',
                  justifyContent: 'center', 
                  width: 230,
                  height: 60,
                  borderRadius: 25,
                }}
                glassEffectStyle="regular"
                tintColor="#1063D0"
                isInteractive
              >
                <Animated.Text style={{ 
                  color: '#FFFFFF', 
                  fontSize: 17,
                  textAlign: 'center',
                }}>
                  Начать
                </Animated.Text>
              </GlassView>
            </Pressable>
          ) : (
            <Animated.View style={{ opacity: fadeAnim }}>
              <Button
                mode="contained"
                style={{ width: 230, justifyContent: "center", borderRadius: 25 }}
                contentStyle={{ height: 60 }}
                labelStyle={{ fontSize: 17, }}
                buttonColor='#1063D0'
                onPress={() => {}}
              >
                Начать
              </Button>
            </Animated.View>
          )}
        </Animated.View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
})