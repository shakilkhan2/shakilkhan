import { useEffect, useState } from "react";

const useDisplay = (initial = []) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % initial?.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentMessage = initial[index].message;
  return { message: currentMessage };
};

export default useDisplay;