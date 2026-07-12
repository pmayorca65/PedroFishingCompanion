import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import "../styles/MyTackle.css";

import type { FishingItem } from "../types/FishingItem";

import {
    getItemsFromDatabase,
    updateFavorite
} from "../services/SQLiteInventory";

export default function JigHeads() {

    const navigate = useNavigate();

    const [jigHeads, setJigHeads] = useState<FishingItem[]>([]);

    const [searchText, setSearchText] = useState("");

    const [favoritesOnly, setFavoritesOnly] = useState(false);

    useEffect(() => {

        loadItems();

    }, []);

    async function loadItems() {

        const items = await getItemsFromDatabase();

        const filtered = items.filter(

            (item: FishingItem) => item.category === "Jig Head"

        );

        setJigHeads(filtered);

    }

    async function toggleFavorite(

        e: React.MouseEvent,

        item: FishingItem

    ) {

        e.stopPropagation();

        await updateFavorite(

            item.id,

            !item.favorite

        );

        await loadItems();

    }

    function editItem(item: FishingItem) {

        navigate(`/edititem/${item.id}`);

    }

    const filteredItems = jigHeads.filter(item => {

        const search = searchText.toLowerCase();

        const matchesSearch =

            item.weight.toLowerCase().includes(search) ||
            item.size.toLowerCase().includes(search) ||
            item.style.toLowerCase().includes(search) ||
            item.color.toLowerCase().includes(search) ||
            item.notes.toLowerCase().includes(search);

        const matchesFavorite =

            !favoritesOnly || item.favorite;

        return matchesSearch && matchesFavorite;

    });

    return (

        <div>

            <Header title="⚖️ Jig Heads" />

            <div className="tacklePage">

                <div className="formSection">

                    <label>

                        <input

                            type="checkbox"

                            checked={favoritesOnly}

                            onChange={(e) =>

                                setFavoritesOnly(e.target.checked)

                            }

                            style={{ marginRight: "10px" }}

                        />

                        ⭐ Show Favorites Only

                    </label>

                </div>

                <div className="formSection">

                    <input

                        type="text"

                        placeholder="🔍 Search..."

                        value={searchText}

                        onChange={(e) =>

                            setSearchText(e.target.value)

                        }

                    />

                </div>

                {filteredItems.length === 0 && (

                    <div className="categoryCard">

                        <div>

                            <h2>No Jig Heads</h2>

                            <p>Add your first jig head.</p>

                        </div>

                    </div>

                )}

                {filteredItems.map(item => (

                    <div

                        key={item.id}

                        className="categoryCard"

                        onClick={() => editItem(item)}

                    >

                        <div>

                            {item.image && (

                                <img

                                    src={item.image}

                                    alt="Jig Head"

                                    className="previewImage"

                                />

                            )}

                            <h2>

                                {item.weight} • {item.size}

                            </h2>

                            <p>

                                {item.style}

                            </p>

                            <p>

                                {item.color}

                            </p>

                            <p>

                                Quantity: {item.quantity}

                            </p>

                        </div>

                        <button

                            type="button"

                            className={

                                item.favorite

                                    ? "favoriteButton favoriteOn"

                                    : "favoriteButton favoriteOff"

                            }

                            onClick={(e) =>

                                toggleFavorite(e, item)

                            }

                        >

                            {item.favorite ? "★" : "☆"}

                        </button>

                    </div>

                ))}

                <Link

                    to="/additem/jighead"

                    className="cardLink"

                >

                    <div className="categoryCard">

                        <div>

                            <h2>

                                ➕ Add Jig Head

                            </h2>

                        </div>

                    </div>

                </Link>

            </div>

            <BottomNav />

        </div>

    );

}