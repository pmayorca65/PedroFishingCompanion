interface NotesInputProps {

    value: string;

    onChange: (value: string) => void;

}

export default function NotesInput({

    value,

    onChange

}: NotesInputProps) {

    return (

        <div className="formSection">

            <label>Notes</label>

            <textarea

                rows={4}

                value={value}

                onChange={(e) =>
                    onChange(e.target.value)
                }

            />

        </div>

    );

}