import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import "../styles/MyTackle.css";

import type { FishingItem } from "../types/FishingItem";
import {
    getItemById,
    updateItem
} from "../services/SQLiteInventory";

export default function EditItem() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [item, setItem] = useState<FishingItem | null>(null);

    useEffect(() => {

        loadItem();

    }, []);

    async function loadItem() {

        if (!id) return;

        const lure = await getItemById(id);

        setItem(lure);

    }

    async function saveChanges() {

        if (!item) return;

        await updateItem(item);

        alert("Item Updated!");

        navigate("/softplastics");

    }

    if (!item) {

        return (

            <div>

                <Header title="✏️ Edit Item" />

                <div className="formPage">

                    <p style={{ color: "white" }}>
                        Loading...
                    </p>

                </div>

                <BottomNav />

            </div>

        );

    }

    return (

        <div>

            <Header title="✏️ Edit Item" />

            <div className="formPage">

                {item.image && (

                    <img
                        src={item.image}
                        className="previewImage"
                        alt={item.type}
                    />

                )}

                <div className="formSection">

                    <label>Type</label>

                    <input
                        value={item.type}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                type: e.target.value
                            })
                        }
                    />

                </div>

                <div className="formSection">

                    <label>Length</label>

                    <input
                        value={item.length}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                length: e.target.value
                            })
                        }
                    />

                </div>

                <div className="formSection">

                    <label>Color</label>

                    <input
                        value={item.color}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                color: e.target.value
                            })
                        }
                    />

                </div>

                <div className="formSection">

                    <label>Quantity</label>

                    <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                quantity: Number(e.target.value)
                            })
                        }
                    />

                </div>

                <div className="formSection">

                    <label>Notes</label>

                    <textarea
                        rows={4}
                        value={item.notes}
                        onChange={(e) =>
                            setItem({
                                ...item,
                                notes: e.target.value
                            })
                        }
                    />

                </div>

                <button
                    className="saveButton"
                    onClick={saveChanges}
                >
                    SAVE CHANGES
                </button>

            </div>

            <BottomNav />

        </div>

    );

}