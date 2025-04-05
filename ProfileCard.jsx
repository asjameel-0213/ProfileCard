import { useState } from "react";

function ProfileCard() {
    const [name, setName] = useState("Abubakar");

    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={() => setName("Sadiq")}>Change Name</button>
        </div>
    );
}

export default ProfileCard;