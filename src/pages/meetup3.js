import React, { useEffect } from "react";
import { navigate } from "gatsby";

const Meetup3 = () => {
  useEffect(() => {
    navigate("https://bit.ly/web3meetup3");
  }, []);

  return null;
};

export default Meetup3;
