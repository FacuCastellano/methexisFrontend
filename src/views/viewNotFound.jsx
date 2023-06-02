import { NavBar } from "../components/navbar";

import { NotFound} from "../components/notfound";
import "./css-views/viewNotFound.css";

export function ViewNotFound() {
  return (
    <div className="view-not-found">
      <NavBar />
      <NotFound className='component-NotFound'/>
      
    </div>
  );
}
