import React from 'react'
import { ShowCard } from "./ShowCard";
// Importing Images
import bar1 from '../images/bar1.jpg'
import bar2 from '../images/bar2.jpg'
import bar3 from '../images/bar3.jpg'

export const Show = () => {
    const Data = [
        {
            venue: "Venue 1",
            venueImg: bar1,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "1",
        },
        {
            venue: "Venue 2",
            venueImg: bar2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "2",
        },
        {
            venue: "Venue 3",
            venueImg: bar3,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "3",
        },
        {
            venue: "Venue 4",
            venueImg: bar2,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia distinctio quisquam, perspiciatis consequuntur odio sapiente rem! Ratione harum magni, neque laboriosam natus omnis officia aspernatur corrupti quidem, aut sapiente cum iure dolore ullam. Laborum perspiciatis delectus iure consectetur vel porro modi numquam vero dignissimos eveniet!",
            id: "4",
        },
    ]

    return (
        //Set container we want the showcard to be nested in
        <section id="shows" class="section bg-light">
            <div class="container">
                    <div>
                        <h1 className="text-large bg-dark rounded">Upcoming Shows</h1>
                    </div>
                <div className="shows">
                {/* Grabbing the show info and mapping through */}
                {Data.map((show) => (
                    // placing each set of show info into its own ShowCard
                    <ShowCard 
                    venue={show.venue}
                    venueImg={show.venueImg}
                    desc={show.desc}
                    key={show.id}
                    />
                ))}
                </div>
            </div>
        </section>
    )
}


