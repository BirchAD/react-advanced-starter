import React, { useState } from "react";

const TernaryOperatorChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Oliver" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>Ternary Operator Challenge</h2>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
          <button className="btn" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login.</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default TernaryOperatorChallenge;
