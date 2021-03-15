
export const BandList = () => {

    const createRows = () => {
        return (
            <tr>
                <td>
                    <button className="btn btn-primary">+1</button>
                </td>
                <td> <input className="form-control" type="text'" /> </td>
                <td>0</td>
                <td>
                    <button className="btn btn-danger">Borrar</button>
                </td>
            </tr>
        );
    }

    return (
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        createRows()
                    }
                </tbody>
            </table>
        </div>
    )
}
