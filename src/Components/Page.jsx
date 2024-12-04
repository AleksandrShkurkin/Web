import React, { useState } from "react";
import Authorization from "./Authorization";
import Goods from "./Goods";

const Page = () => {
    const [registered, setRegistered] = useState(false);

    return (
        <div>
            {registered ? (
                <Goods />
            ) : (
                <Authorization register={setRegistered} />
            )}
        </div>
    )
}

export default Page;