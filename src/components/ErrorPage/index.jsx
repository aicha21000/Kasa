import { useLocation } from 'react-router-dom';

function ErrorPage() {
  const location = useLocation();

  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, the URL {location.pathname} was not found.</p>
    </div>
  );
}
export default ErrorPage;