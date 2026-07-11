import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import "../styles/MyTackle.css";

import type { FishingItem } from "../types/FishingItem";
import { getItemsFromDatabase } from "../services/SQLiteInventory";

export default function SoftPlastics() {

    const [softPlastics, setSoftPlastics] = useState<FishingItem[]>([]);

    useEffect(() => {

        loadItems();

    }, []);

    async function loadItems() {

        const items = await getItemsFromDatabase();

        const filtered = items.filter(
            (item: FishingItem) => item.category === "Soft Plastic"
        );

        setSoftPlastics(filtered);

    }

    return (

        <div>

            <Header title="🪱 Soft Plastics" />

            <div className="tacklePage">

                {softPlastics.length === 0 && (

                    <div className="categoryCard">

                        <div>

                            <h2>No Soft Plastics</h2>

                            <p>Add your first lure.</p>

                        </div>

                    </div>

                )}

                {softPlastics.map(item => (

                    <div
                        key={item.id}
                        className="categoryCard"
                    >

                        <div>

                            {item.image && (

                                <img
                                    src={item.image}
                                    alt={item.type}
                                    className="previewImage"
                                />

                            )}

                            <h2>

                                {item.type}

                            </h2>

                            <p>

                                {item.length} • {item.color}

                            </p>

                            <p>

                                Quantity: {item.quantity}

                            </p>

                        </div>

                    </div>

                ))}

                <Link
                    to="/additem"
                    className="cardLink"
                >

                    <div className="categoryCard">

                        <div>

                            <h2>

                                ➕ Add Soft Plastic

                            </h2>

                        </div>

                    </div>

                </Link>

            </div>

            <BottomNav />

        </div>

    );

}