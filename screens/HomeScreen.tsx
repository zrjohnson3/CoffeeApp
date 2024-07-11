import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function HomeScreen() {
    const location = 'New York, NY'; // Hardcoded location for now
    const username = 'John Doe'; // Hardcoded username for now

    const [category, setCategory] = React.useState('Coffee');
    const [active, setActive] = React.useState(false);

    // Set the opacity of the selected category
    const [style, setStyle] = React.useState({ opacity: 1 });


    const categories = [
        { id: 1, name: 'Coffee' },
        { id: 2, name: 'Latte' },
        { id: 3, name: 'Cappuccino' },
        { id: 4, name: 'Espresso' },
        { id: 5, name: 'Mocha' },
        { id: 6, name: 'Macchiato' },
    ];

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
                        <MapPinIcon color={'#DEB887'} size={25} style={{ padding: 2 }} />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 4 }}>{location}</Text>
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

                {/* Menu */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={(item) => item.id.toString()}
                        style={{ padding: 10, overflow: 'visible' }}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setCategory(item.name);
                                        setActive(true);
                                    }}
                                    style={{ backgroundColor: '#DEB887', padding: 10, borderRadius: 20, margin: 5, opacity: category === item.name ? 1 : 0.7 }}

                                >
                                    <Text>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                        }
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}
