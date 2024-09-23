import './SeriesCards.css'


export const SeriesCards =({id, name, genero, temporadas}) => {
    return (
        <div className="card">
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{genero}</h1>
            <h1>{temporadas}</h1>
        </div>
    );
};

