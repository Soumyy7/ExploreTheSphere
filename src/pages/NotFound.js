import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <h1>Error 404</h1>
      <p>The page you are looking for cannot be found.</p>
      <p>We apologize for the inconvenience.</p>
      <p>Please check the URL for any mistakes or try one of the following:</p>
      <p>
        Go to the <Link to="/">HomePage</Link>.
      </p>
    </div>
  );
}
