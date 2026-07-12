import { useState } from "react";
import { v4 as uuid } from "uuid";

import {
    Camera,
    CameraResultType,
    CameraSource
} from "@capacitor/camera";

import TypeSelector from "../components/TypeSelector";
import LengthSelector from "../components/LengthSelector";
import ColorSelector from "../components/ColorSelector";
import QuantityInput from "../components/QuantityInput";
import NotesInput from "../components/NotesInput";

import { addItemToDatabase } from "../services/SQLiteInventory";
import type { FishingItem } from "../types/FishingItem";

interface Props {

    onSaved: () => void;

}

export default function SoftPlasticForm({

    onSaved

}: Props) {

    const [type, setType] = useState("Paddle Tail");

    const [length, setLength] = useState('3.8"');

    const [color, setColor] = useState("Green Pumpkin");

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

        }

        catch {

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

        }

        catch {

            alert("No image selected.");

        }

    }

    async function saveItem() {

        const item: FishingItem = {

            id: uuid(),

            category: "Soft Plastic",

            type,

            style: "",

            brand: "",

            model: "",

            size: "",

            weight: "",

            length,

            depth: "",

            color,

            quantity,

            notes,

            image,

            favorite: false

        };

        await addItemToDatabase(item);

        alert("Item Saved!");

        onSaved();

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

            <TypeSelector
                value={type}
                onChange={setType}
            />

            <LengthSelector
                value={length}
                onChange={setLength}
            />

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
                SAVE ITEM
            </button>

        </>

    );

}