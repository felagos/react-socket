import { useRef } from "react";

export const BandAdd = ({ handleAdd }) => {
    const inputRef = useRef();

    const onSubmit = evt => {
        evt.preventDefault();
        const { current: { value } } = inputRef;
        if(value) handleAdd(value);
        else alert("Debes ingresar un nombre !")
    }

    return (
        <>
            <h3>Agregar Banda</h3>

            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                    <input ref={inputRef} className="form-control" placeholder="Nombre banda" />
                    <button className="btn btn-primary" type="submit">Agregar</button>
                </div>
            </form>
        </>
    )
}
