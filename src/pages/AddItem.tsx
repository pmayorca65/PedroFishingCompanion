import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";

import SoftPlasticForm from "../forms/SoftPlasticForm";
import JigHeadForm from "../forms/JigHeadForm";

import "../styles/MyTackle.css";

export default function AddItem() {

    const navigate = useNavigate();

    const { category } = useParams();

    function itemSaved() {

        switch (category) {

            case "softplastic":

                navigate("/softplastics");
                break;

            case "jighead":

                navigate("/jigheads");
                break;

            default:

                navigate("/tackle");

        }

    }

    function pageTitle() {

        switch (category) {

            case "softplastic":

                return "➕ Add Soft Plastic";

            case "jighead":

                return "➕ Add Jig Head";

            default:

                return "➕ Add Item";

        }

    }

    return (

        <div>

            <Header title={pageTitle()} />

            <div className="formPage">

                {category === "softplastic" && (

                    <SoftPlasticForm
                        onSaved={itemSaved}
                    />

                )}

                {category === "jighead" && (

                    <JigHeadForm
                        onSaved={itemSaved}
                    />

                )}

            </div>

            <BottomNav />

        </div>

    );

}