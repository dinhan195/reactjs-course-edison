/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const [showDiv, setShowDiv] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDiv(!showDiv)}>Show</button>
      {showDiv && (
        <div>
          <Link className="m-4" to="/practice-1">
            Practice-1
          </Link>
          <Link className="m-4" to="/practice-2">
            Practice-2
          </Link>
          <Link className="m-4" to="/practice-3">
            Practice-3 and 4
          </Link>
          <Link className="m-4" to="/exercise-1">
            Exercise-1
          </Link>
          <Link className="m-4" to="/exercise-2">
            Exercise-2
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
