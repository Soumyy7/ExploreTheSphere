import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const career = useLoaderData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://job-json.onrender.com/careers/" + career.id
        );

        if (!response.ok) {
          throw new Error("Could not find that career.");
        }

        const data = await response.json();
        // Assuming your data structure has an 'id' property

        // Update the career data and set isLoading to false
        // when the data has been fetched
        setIsLoading(false);
        // Update career data in your component
        // Example: setCareerData(data);
      } catch (error) {
        // Handle errors here
        console.error(error);
        setIsLoading(false);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, [career.id]); // Make sure to include any dependencies that affect the data loading

  return (
    <div className="career-details">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Package Details for {career.title}</h2>
          <p>
            <strong>Destination:</strong> {career.destination}
          </p>
          <p>
            <strong>Itinerary:</strong> {career.duration}
          </p>
          <p>
            <strong>Price:</strong> {career.price_inr} / {career.price_usd}
          </p>
          <p>
            <strong>Explorations:</strong> <br></br> {career.attractions}
          </p>
        </>
      )}
    </div>
  );
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("https://job-json.onrender.com/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career.");
  }

  return res.json();
};
