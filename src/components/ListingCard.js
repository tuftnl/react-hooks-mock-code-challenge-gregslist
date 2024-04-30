import React, {useState} from "react";

function ListingCard({ listing, removeListing }) {
  console.log(listing)
  const {id, description, image, location} = listing
  const [fav, setFav] = useState(false)

  function deleteListing() {
    fetch(`http://localhost:6001/listings/${listing.id}`,
  {method: 'DELETE'})
  .then((resp) => {
    if (resp.ok) {
      removeListing(id)
    } else {
      console.log('Could not remove listing.')
    }
  })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={()=>setFav(!fav)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={setFav}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  )
}

export default ListingCard;
