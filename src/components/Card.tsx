function Card(props: any) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={props.imageUrl}
        alt=""
      ></img>
      <div className="description">
        <div className="location">
          <img className="location-icon" src="location.svg"></img>
          <p className="country">{props.location}</p>
          <a className="google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
