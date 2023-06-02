import "./css/notfound.css";
import { Link } from "react-router-dom";
export function NotFound() {
  return (
    <div className="not-found">
      <p>Sorry</p>
      <p>This URL is not avaible.</p>
      <p>Plese click <Link  className="here-backhome" to={'/home'}> here</Link> to back to home</p>
    </div>
  );
}
