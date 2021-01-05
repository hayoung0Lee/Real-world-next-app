import React from "react";

const useSessionStorage = (key, initialValue) => {
    console.log("useSessionStorage");
    const [storedValue, setStoredValue] = React.useState(() => {
        if(typeof window !== "undefined"){
            const item = window.sessionStorage.getItem(key);
            console.log("useSesstionstorage if")
            return !!item ? JSON.parse(item) : initialValue;
        } else {
            console.log("useSesstionstorage else")
            return initialValue;
        }
    })

    return [storedValue, setStoredValue];
}

export default useSessionStorage;