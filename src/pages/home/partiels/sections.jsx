import React from "react";
import { useParams, useNavigate } from "react-router-dom";




const MovieDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) return <div>Film non trouvé</div>;

    return (
        <div className="movie-detail">
            <button onClick={() => navigate("/")}>⬅ Retour</button>
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={movie.title} style={{ width: "300px", borderRadius: "10px" }} />
            <p>{movie.description}</p>
        </div>
    );
};

export default MovieDetail;