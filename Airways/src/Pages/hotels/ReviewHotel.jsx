


function ReviewHotel() {

    


    const reviewData = [
        {
            id: 1,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Alice",
            hotlename: "Taj Mahal Palace",
            rating: "5",
            message: "Amazing stay, beautiful view, and excellent service!"
        },
        {
            id: 2,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Bob",
            hotlename: "Oberoi",
            rating: "4",
            message: "Very comfortable rooms and friendly staff."
        },
        {
            id: 3,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Charlie",
            hotlename: "Leela Palace",
            rating: "5",
            message: "Superb hospitality and great food!"
        },
        {
            id: 4,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Diana",
            hotlename: "ITC Grand",
            rating: "4",
            message: "Nice ambiance and clean rooms."
        },
        {
            id: 5,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Edward",
            hotlename: "JW Marriott",
            rating: "5",
            message: "Loved the pool and the breakfast spread."
        },
        {
            id: 6,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Fiona",
            hotlename: "Hyatt Regency",
            rating: "4",
            message: "Good location and excellent service."
        },
        {
            id: 7,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "George",
            hotlename: "Radisson Blu",
            rating: "5",
            message: "Spacious rooms and courteous staff."
        },
        {
            id: 8,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Hannah",
            hotlename: "The Park",
            rating: "3",
            message: "Decent stay but could improve on cleanliness."
        },
        {
            id: 9,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Ivan",
            hotlename: "Trident",
            rating: "4",
            message: "Nice location and comfortable beds."
        },
        {
            id: 10,
            image: "https://unsplash.com/photos/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo",
            clientName: "Julia",
            hotlename: "Lalit",
            rating: "5",
            message: "Fantastic experience and great amenities!"
        }
    ];

      // setting visablelity of the cards

    
    return (
        <>
            <div className="main-client-review">

                {

                    reviewData.map((review) => (
                        <div className="hotel-review" key={review.id}>
                            <div className="name">

                                <h1>{review.clientName}</h1>

                            </div>

                            <div className="hotel-name">
                                <p>{review.hotlename}</p>

                            </div>

                            <div className="rating">
                                <p>{review.rating}</p>
                            </div>

                            <div className="message">
                                <p>{review.message}</p>
                            </div>
                        </div>
                    ))
                }

            </div>


        </>
    )
}

export default ReviewHotel;