import { useRef } from "react";

export const BandAdd = () => {
    const inputRef = useRef();

    const onSubmit = evt => {
        evt.preventDefault();
        const { current: { value } } = inputRef;
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
