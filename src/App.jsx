import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // JSON data fetch
  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // Add to stack
  const handleAddToStack = (technology) => {
    const alreadyExists = selectedStack.some(
      (item) => item.id === technology.id
    );
    if (alreadyExists) {
      return;
    }
    setSelectedStack((previous) => [
      ...previous,
      technology,
    ]);
  };

  // Remove one
  const handleRemove = (id) => {
    setSelectedStack((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Remove all
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <>
      <Navbar />

      <Banner />

      <Technologies
        technologies={technologies}
        loading={loading}
        selectedStack={selectedStack}
        onAdd={handleAddToStack}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
      <Footer/>
    </>
  );
}

export default App;