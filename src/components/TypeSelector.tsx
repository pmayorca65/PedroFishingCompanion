interface TypeSelectorProps {

    value: string;

    onChange: (value: string) => void;

}

export default function TypeSelector({

    value,

    onChange

}: TypeSelectorProps) {

    return (

        <div className="formSection">

            <label>Type</label>

            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
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

    );

}