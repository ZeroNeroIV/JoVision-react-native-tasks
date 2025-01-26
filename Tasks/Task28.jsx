import { FlatList } from "react-native";
import { Task28_ItemComponent } from '../Components/Task28_ItemComponent';

export function Task28() {
    const task28_img_base_path = "../Images/Task28/";
    const arr = [
        require(`${task28_img_base_path}0.jpg`),
        require(`${task28_img_base_path}1.jpg`),
        require(`${task28_img_base_path}2.jpg`),
        require(`${task28_img_base_path}3.jpg`),
        require(`${task28_img_base_path}4.jpg`),
        require(`${task28_img_base_path}5.jpg`),
        require(`${task28_img_base_path}6.jpg`),
        require(`${task28_img_base_path}7.jpg`),
        require(`${task28_img_base_path}8.jpg`),
        require(`${task28_img_base_path}9.jpg`),
        require(`${task28_img_base_path}10.jpg`),
        require(`${task28_img_base_path}11.jpg`),
        require(`${task28_img_base_path}12.jpg`),
        require(`${task28_img_base_path}13.jpg`),
        require(`${task28_img_base_path}14.jpg`),
        require(`${task28_img_base_path}15.jpg`),
        require(`${task28_img_base_path}16.jpg`),
        require(`${task28_img_base_path}17.jpg`),
        require(`${task28_img_base_path}18.jpg`),
        require(`${task28_img_base_path}19.jpg`),
        require(`${task28_img_base_path}20.jpg`),
        require(`${task28_img_base_path}21.jpg`),
    ];

    function item_renderer({ item, index }) {
        return <Task28_ItemComponent
            path={item}
            idx={index}
        />
    }

    return (
        <FlatList
            style={{
                margin: 15,
                padding: 20,
            }}
            data={arr}
            renderItem={item_renderer}
            horizontal={true}
        />
    )
}