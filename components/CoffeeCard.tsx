import { View, Text, Image, StyleSheet } from 'react-native';
import { CoffeeTypes } from '../types/CoffeeTypes';
import { StarIcon } from 'react-native-heroicons/solid';

export default function CoffeeCard({ item }: { item: CoffeeTypes }) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                {item.image && (
                    <Image
                        source={item.image ? item.image : require('../assets/coffee.png')} // Show each coffee's image if available, otherwise show a default image
                        style={styles.image}
                    />
                )}
            </View>

            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.detailsContainer}>
                <View style={[styles.bubble, styles.ratingContainer]}>
                    <Text style={styles.priceText}>Price: </Text>
                    <Text style={styles.bubbleText}>{item.price}</Text>
                </View>
                <View style={[styles.bubble, styles.ratingContainer]}>
                    <Text style={styles.bubbleText}>Rating: </Text>
                    <StarIcon size={16} color={'#FFD700'} style={{ paddingLeft: 25 }} />
                    <Text style={[styles.bubbleText, styles.ratingText]}>{item.stars}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 40,
        backgroundColor: '#DEB887',
        height: 250,
        width: 175,
        alignItems: 'center',
        margin: 20,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        elevation: 5,
        padding: 2,
    },
    imageContainer: {
        shadowColor: 'black',
        shadowRadius: 30,
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
    detailsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    bubble: {
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 3,
    },
    bubbleText: {
        fontSize: 16,
        color: 'black',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
    },
    priceText: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
    }
});
