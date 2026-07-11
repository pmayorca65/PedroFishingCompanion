import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import {
  Camera,
  CameraResultType,
  CameraSource
} from "@capacitor/camera";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import "../styles/MyTackle.css";

import { addItemToDatabase } from "../services/SQLiteInventory";
import type { FishingItem } from "../types/FishingItem";

export default function AddItem() {

  const navigate = useNavigate();

  const [category] = useState("Soft Plastic");
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

    const item: FishingItem = {

      id: uuid(),

      category,

      type,

      length,

      color,

      quantity,

      notes,

      image,

      favorite: false

    };

    await addItemToDatabase(item);

    alert("Item Saved!");

    navigate("/softplastics");

  }

  return (

    <div>

      <Header title="➕ Add Tackle" />

      <div className="formPage">

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

          <label>Category</label>

          <select disabled>
            <option>Soft Plastic</option>
          </select>

        </div>

        <div className="formSection">

          <label>Type</label>

          <select
            value={type}
            onChange={(e)=>setType(e.target.value)}
          >

            <option>Paddle Tail</option>
            <option>Grub</option>
            <option>Tube</option>
            <option>Stick Worm</option>
            <option>Creature Bait</option>
            <option>Craw</option>
            <option>Swimbait</option>
            <option>Ned Worm</option>
            <option>Frog</option>
            <option>Other</option>

          </select>

        </div>

        <div className="formSection">

          <label>Length</label>

          <select
            value={length}
            onChange={(e)=>setLength(e.target.value)}
          >

            <option>2"</option>
            <option>2.5"</option>
            <option>3"</option>
            <option>3.5"</option>
            <option>3.8"</option>
            <option>4"</option>
            <option>4.5"</option>
            <option>5"</option>
            <option>6"</option>
            <option>7"</option>

          </select>

        </div>

        <div className="formSection">

          <label>Color</label>

          <select
            value={color}
            onChange={(e)=>setColor(e.target.value)}
          >

            <option>Green Pumpkin</option>
            <option>Watermelon</option>
            <option>Watermelon Red</option>
            <option>White Pearl</option>
            <option>Black</option>
            <option>Chartreuse</option>
            <option>Motor Oil</option>
            <option>Smoke</option>
            <option>Blue</option>
            <option>Purple</option>
            <option>Brown</option>
            <option>Red</option>
            <option>Orange</option>

          </select>

        </div>

        <div className="formSection">

          <label>Quantity</label>

          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e)=>setQuantity(Number(e.target.value))}
          />

        </div>

        <div className="formSection">

          <label>Notes</label>

          <textarea
            rows={4}
            value={notes}
            onChange={(e)=>setNotes(e.target.value)}
          />

        </div>

        <button
          className="saveButton"
          onClick={saveItem}
        >
          SAVE ITEM
        </button>

      </div>

      <BottomNav />

    </div>

  );

}