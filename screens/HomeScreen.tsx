import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList, StyleSheet, Modal, Button } from 'react-native';
import CoffeeCard from '../components/CoffeeCard';
import { CoffeeTypes } from '../types/CoffeeTypes';

export default function HomeScreen() {
    const location = 'New York, NY'; // Hardcoded location for now
    const username = 'John Doe'; // Hardcoded username for now

    const [category, setCategory] = React.useState('All');
    const [active, setActive] = React.useState(false);

    const [searchQuery, setSearchQuery] = React.useState(''); // Search query state
    const [selectedItem, setSelectedItem] = React.useState<CoffeeTypes | null>(null); // Selected item state
    const [isModalVisible, setIsModalVisible] = React.useState(false); // Modal visibility state

    const categories: CoffeeTypes[] = [
        { id: 1, name: 'Coffee', price: '2.99', image: require('../assets/coffee.png'), stars: 4.2 },
        { id: 2, name: 'Latte', price: '3.99', image: require('../assets/coffee2.png'), stars: 4.5 },
        { id: 3, name: 'Cappuccino', price: '3.49', image: require('../assets/coffee3.png'), stars: 4.3 },
        { id: 4, name: 'Espresso', price: '2.49', image: require('../assets/coffee4.png'), stars: 4.1 },
        { id: 5, name: 'Mocha', price: '4.49', image: require('../assets/coffee5.png'), stars: 4.6 },
    ];

    // Define the category menu data including "All"
    const categoryMenu = ['All', ...categories.map(item => item.name)];

    // Filter items based on selected category and search query
    const filteredCategories = categories.filter(item =>
        (category === 'All' || item.name === category) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCardPress = (item: CoffeeTypes) => {
        setSelectedItem(item);
        setIsModalVisible(true);
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Image
                source={require('../assets/beansBackground1.png')}
                style={styles.backgroundImage}
            />

            <SafeAreaView>
                {/* Avatar and bell icon */}
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/avatar.png')}
                        style={styles.avatar}
                    />
                    <View style={styles.locationContainer}>
                        <MapPinIcon color={'#DEB887'} size={25} style={styles.icon} />
                        <Text style={styles.locationText}>{location}</Text>
                        <Text style={styles.usernameText}>{username}</Text>
                    </View>
                    <BellIcon style={styles.bellIcon} size={27} color={'black'} />
                </View>

                {/* Search bar */}
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchBar}>
                        <TextInput
                            placeholder="Search"
                            style={styles.searchInput}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <TouchableOpacity style={styles.searchButton}>
                            <MagnifyingGlassIcon size={30} strokeWidth={2} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Category Menu */}
                <View style={styles.categoryMenu}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categoryMenu}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setCategory(item);
                                    setActive(true);
                                }}
                                style={[
                                    styles.categoryButton,
                                    { opacity: category === item ? 1 : 0.7 }
                                ]}
                            >
                                <Text style={{
                                    color: category === item ? 'white' : 'black'
                                }}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Coffee cards carousel */}
                <View style={styles.coffeeCardsContainer}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={filteredCategories}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleCardPress(item)}>
                                <CoffeeCard item={item} />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={styles.coffeeCardsContent}
                    />
                </View>
            </SafeAreaView>

            {/* Modal */}
            {selectedItem && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                            <Image source={selectedItem.image ? selectedItem.image : require('../assets/coffee.png')} style={styles.modalImage} />
                            <Text style={styles.modalText}>Price: {selectedItem.price}</Text>
                            <Text style={styles.modalText}>Rating: {selectedItem.stars}</Text>
                            <Button title="Close" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: '100%',
        position: 'absolute',
        top: 10,
        opacity: 0.3,
        height: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    icon: {
        padding: 2,
    },
    locationText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 4,
    },
    usernameText: {
        fontSize: 16,
        color: 'gray',
        padding: 5,
    },
    bellIcon: {
        width: 60,
        height: 60,
        padding: 10,
    },
    searchBarContainer: {
        margin: 5,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 4,
        backgroundColor: '#E5E7EB',
        borderRadius: 80,
        height: 65,
    },
    searchInput: {
        fontSize: 16,
        color: '#374151',
        padding: 10,
        flex: 1,
        borderRadius: 80,
        height: '100%',
        backgroundColor: 'transparent',
    },
    searchButton: {
        backgroundColor: '#DEB887',
        borderRadius: 30,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    categoryMenu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    categoryButton: {
        backgroundColor: '#DEB887',
        padding: 15,
        borderRadius: 25,
        margin: 5,
    },
    coffeeCardsContainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    coffeeCardsContent: {
        justifyContent: 'space-around',
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 5,
    },
});
