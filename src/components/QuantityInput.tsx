interface QuantityInputProps {

    value: number;

    onChange: (value: number) => void;

}

export default function QuantityInput({

    value,

    onChange

}: QuantityInputProps) {

    return (

        <div className="formSection">

            <label>Quantity</label>

            <input

                type="number"

                min={1}

                value={value}

                onChange={(e) =>
                    onChange(Number(e.target.value))
                }

            />

        </div>

    );

}