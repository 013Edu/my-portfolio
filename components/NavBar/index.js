import { Nav } from "./style.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from "@fortawesome/free-solid-svg-icons";

export function NavBar() {
  return (
    <Nav>
      <div className="container">
        <h2 className="container-title">Eduardo Gonçalves</h2>
        <div className="container-language">
        <FontAwesomeIcon className="icon" icon={faCode} color="--fa-inverse" width={50} height={50} />
        </div>
        <div class="content">
          <input type="checkbox" id="checkbox-menu" />

          <label for="checkbox-menu">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </Nav>
  );
}
