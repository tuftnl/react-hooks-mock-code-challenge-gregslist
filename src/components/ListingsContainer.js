import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((res) => res.json())
    .then((data) => {
      //console.log(data)
      setListings(data)
    })
  }, [])

  function removeListing(listingId) {
    const filteredListings = listings.filter((listing) => listing.id !== listingId)
    setListings(filteredListings)
  }

  return (
    <main>
      <ul className="cards">
        {
        listings.map((listing) => {
          return <ListingCard key={listing.id} listing={listing} removeListing={removeListing} />
          //console.log(listing)
        })
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
