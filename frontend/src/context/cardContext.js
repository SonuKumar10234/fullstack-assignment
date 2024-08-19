import { createContext, useContext, useEffect, useState } from "react";


export const CardContext = createContext();


export const CardProvider = ({ children }) => {
    const [cards, setCards] = useState([]);
    const [filteredCard, setfilteredCard] = useState([]);

    const getFilteredCard = (title) => {
        const filteredCard = title ? cards.filter(card => card.title.toLowerCase().includes(title.trim().toLowerCase())) : cards;
        setfilteredCard(filteredCard);
    }

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const resp = await fetch('http://localhost:5000/cards');
                const data = await resp.json();
                setCards(data?.cards);
                setfilteredCard(data?.cards);
            } catch (error) {
                console.log("Error while fetching cards:", error)
            }
        }
        fetchCards();
    }, []);

    return (
        <CardContext.Provider value={{ cards, filteredCard, getFilteredCard }}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => useContext(CardContext);