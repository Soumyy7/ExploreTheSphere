import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();

  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p> {career.description}</p>
        </Link>
      ))}
    </div>
  );
}

// data loader
export const careersLoader = async () => {
  const res = await fetch("https://job-json.onrender.com/careers");

  return res.json();
};
