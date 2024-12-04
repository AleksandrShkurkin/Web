import React, {useState} from "react";
import GoodsList from "./GoodsList";
import GoodsForm from "./GoodsForm";

const Goods = () => {
    const [goods, setGoods] = useState([])

    const handleAddingGoods = (newGoods) => {
        setGoods((prevGoods) => [...prevGoods, newGoods]);
    }

    const handleDeletingGoods = (index) => {
        setGoods((prevGoods) => prevGoods.filter((item) => item.id !== index));
    }

    return (
        <div>
            <GoodsForm addGoods={handleAddingGoods} />
            <GoodsList goods={goods} deleteGood={handleDeletingGoods}/>
        </div>
    )
}

export default Goods;