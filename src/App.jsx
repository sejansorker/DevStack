
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleAddToStack = (technology) => {
    const alreadyExists = selectedStack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const handleRemove = (id) => {
    const removedTechnology = selectedStack.find(
      (item) => item.id === id
    );

    setSelectedStack(
      selectedStack.filter((item) => item.id !== id)
    );

    toast.info(`${removedTechnology.name} removed from your stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.success("All technologies removed from your stack!");
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
    </>
  );
}

export default App;