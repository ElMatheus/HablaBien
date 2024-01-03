import { View, Image, Button } from "react-native";
import { useState, useEffect } from "react";
import allObjects from "../../data/exercises/objects.js";

const ListenAndRepeat = () => {
    const [unseenObjects, setUnseenObjects] = useState([...allObjects]);
    const [numberPage, setNumberPage] = useState(Math.floor(Math.random() * unseenObjects.length));

    const nextPage = () => {
        unseenObjects.splice(numberPage, 1);
        setUnseenObjects([...unseenObjects]);
        if (unseenObjects.length === 0) {
            setUnseenObjects([...allObjects]);
        }
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }

    useEffect(() => {
        setNumberPage(Math.floor(Math.random() * unseenObjects.length));
    }, [unseenObjects]);

    return (
        <View>
            <Image source={{ uri: unseenObjects[numberPage]?.image }} style={{ width: 100, height: 100 }} />
            <Button title="Next" onPress={nextPage} />
        </View>
    )
}

export default ListenAndRepeat