import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
    const location = 'New York, NY'; // Hardcoded location for now
    const username = 'John Doe'; // Hardcoded username for now

    return (
        <View>
            <StatusBar style="auto" />
            <Image
                source={require('../assets/beansBackground1.png')}
                style={{
                    width: '100%',
                    position: 'absolute',
                    top: -5,
                    opacity: 0.4
                }}
            />
            <SafeAreaView>
                {/* Avatar and bell icon */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', padding: 20 }}>
                    <Image
                        source={require('../assets/avatar.png')}
                        style={{ width: 40, height: 40, borderRadius: 20, padding: 10 }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', padding: 4 }}>
                        <MapPinIcon />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 5 }}>{location}</Text>
                        <Text style={{ fontSize: 16, color: 'gray', padding: 5 }}>{username}</Text>
                    </View>
                    <BellIcon
                        style={{ width: 60, height: 60, padding: 10 }}
                        size={27}
                        color={'black'}
                    />
                </View>

                {/* Search bar */}
                <View style={{ margin: 5 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 4,
                        backgroundColor: '#E5E7EB',
                        borderRadius: 80,
                        height: 65
                    }}>
                        <TextInput
                            placeholder="Search"
                            style={{
                                fontSize: 16,
                                color: '#374151',
                                padding: 10,
                                flex: 1,
                                borderRadius: 80,
                                height: '100%',
                                backgroundColor: 'transparent'
                            }}
                        />
                        <TouchableOpacity style={{
                            backgroundColor: '#DEB887',
                            borderRadius: 30,
                            width: 45,
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10
                        }}>
                            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
