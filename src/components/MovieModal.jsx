function MovieModal({ movie, onClose }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://placehold.co/300x450?text=No+Image";

  function handleOverlayClick() {
    onClose();
  }

  function handleModalClick(e) {
    e.stopPropagation();
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <img
          className="modal-poster"
          src={poster}
          alt={movie.Title}
          onError={(e) => {
            e.target.src = "https://placehold.co/300x450?text=No+Image";
          }}
        />

        <div className="modal-info">
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Type:</strong> {movie.Type}</p>
          <p><strong>IMDb ID:</strong> {movie.imdbID}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;