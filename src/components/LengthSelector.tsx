interface LengthSelectorProps {

    value: string;

    onChange: (value: string) => void;

}

export default function LengthSelector({

    value,

    onChange

}: LengthSelectorProps) {

    return (

        <div className="formSection">

            <label>Length</label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
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

    );

}