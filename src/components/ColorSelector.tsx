interface ColorSelectorProps {

    value: string;

    onChange: (value: string) => void;

}

export default function ColorSelector({

    value,

    onChange

}: ColorSelectorProps) {

    return (

        <div className="formSection">

            <label>Color</label>

            <select
                value={value}
                onChange={(e) =>
                    onChange(e.target.value)
                }
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

    );

}