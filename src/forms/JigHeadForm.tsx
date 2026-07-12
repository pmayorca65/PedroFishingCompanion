import { useState } from "react";
import { v4 as uuid } from "uuid";

import {
    Camera,
    CameraResultType,
    CameraSource
} from "@capacitor/camera";

import ColorSelector from "../components/ColorSelector";
import QuantityInput from "../components/QuantityInput";
import NotesInput from "../components/NotesInput";

import { addItemToDatabase } from "../services/SQLiteInventory";
import type { FishingItem } from "../types/FishingItem";

interface Props {

    onSaved: () => void;

}

export default function JigHeadForm({

    onSaved

}: Props) {

    const [weight, setWeight] = useState("1/8 oz");

    const [size, setSize] = useState("1/0");

    const [style, setStyle] = useState("Round Ball");

    const [color, setColor] = useState("Unpainted");

    const [quantity, setQuantity] = useState(1);

    const [notes, setNotes] = useState("");

    const [image, setImage] = useState<string | null>(null);

    async function takePhoto() {

        try {

            const photo = await Camera.getPhoto({

                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera

            });

            setImage(photo.dataUrl ?? null);

        } catch {

            alert("Camera cancelled.");

        }

    }

    async function choosePhoto() {

        try {

            const photo = await Camera.getPhoto({

                quality: 90,
                allowEditing: false,
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Photos

            });

            setImage(photo.dataUrl ?? null);

        } catch {

            alert("No image selected.");

        }

    }

    async function saveItem() {

    try {

        const item: FishingItem = {

            id: uuid(),

            category: "Jig Head",

            type: "",

            style,

            brand: "",

            model: "",

            size,

            weight,

            length: "",

            depth: "",

            color,

            quantity,

            notes,

            image,

            favorite: false

        };

        await addItemToDatabase(item);

        alert("Jig Head Saved!");

        onSaved();

    }

    catch (error) {

        console.error(error);

        alert(String(error));

    }

}

    return (

        <>

            <div className="formSection">

                <label>Photo</label>

                {image && (

                    <img
                        src={image}
                        className="previewImage"
                        alt="Preview"
                    />

                )}

                <button
                    className="photoButton"
                    onClick={takePhoto}
                >
                    📷 Take Photo
                </button>

                <button
                    className="photoButton"
                    onClick={choosePhoto}
                >
                    🖼️ Choose From Gallery
                </button>

            </div>

            <div className="formSection">

                <label>Weight</label>

                <select
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                >
                    <option>1/32 oz</option>
                    <option>1/16 oz</option>
                    <option>3/32 oz</option>
                    <option>1/8 oz</option>
                    <option>3/16 oz</option>
                    <option>1/4 oz</option>
                    <option>3/8 oz</option>
                    <option>1/2 oz</option>
                </select>

            </div>

            <div className="formSection">

                <label>Hook Size</label>

                <select
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                >
                    <option>#4</option>
                    <option>#2</option>
                    <option>#1</option>
                    <option>1/0</option>
                    <option>2/0</option>
                    <option>3/0</option>
                    <option>4/0</option>
                    <option>5/0</option>
                </select>

            </div>

            <div className="formSection">

                <label>Style</label>

                <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                >
                    <option>Round Ball</option>
                    <option>Football</option>
                    <option>Ned</option>
                    <option>Swimbait</option>
                    <option>Stand-Up</option>
                    <option>Weedless</option>
                </select>

            </div>

            <ColorSelector
                value={color}
                onChange={setColor}
            />

            <QuantityInput
                value={quantity}
                onChange={setQuantity}
            />

            <NotesInput
                value={notes}
                onChange={setNotes}
            />

            <button
                className="saveButton"
                onClick={saveItem}
            >
                SAVE JIG HEAD
            </button>

        </>

    );

}