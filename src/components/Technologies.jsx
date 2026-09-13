import { FaStar } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Container from "./Container";

function Technologies({
  technologies,
  loading,
  selectedStack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  if (loading) {
    return <h2 className="py-20 text-center">Loading...</h2>;
  }

  return (
    <section className=" px-4 py-16 font-main">
        <Container>
      <div className="">
        <h2 className="mb-2 text-[36px] font-extrabold">
          Explore  <span className="text-[#B753CC] font-int">Technologies</span>
        </h2>
        <p className="mb-8 text-gray-500 font-normal text-[16px]">
          Discover the technologies and build your perfect development stack.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:col-span-2">

            {technologies.map((technology) => {
              const isAdded = selectedStack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="rounded-2xl bg-white p-5 shadow"
                >
                  <div className="mb-4 flex justify-between">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-14 w-14 object-contain"
                    />
                    <span className="h-fit rounded-full bg-[#CFFAFE] px-3 py-1 text-xs text-[#0284C7]">
                      {technology.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">
                    {technology.name}
                  </h3>
                  <p className="my-3 h-17 text-[12px] text-[#64748B]">
                    {technology.description}
                  </p>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                      {technology.category}
                    </span>
                    <span className="text-[11px] font-medium text-[#64748B]">
                      {technology.difficulty}
                    </span>
                     <div className="flex  gap-2">
                    <FaStar className="text-yellow-400" />
                    <span className="text-[12px]">{technology.rating}</span>
                  </div>
                  </div>
                 
                  <button
                    onClick={() => onAdd(technology)}
                    disabled={isAdded}
                    className={`w-full rounded-xl py-3 font-medium text-[12px] cursor-pointer ${
                      isAdded
                        ? "bg-gray-200 text-gray-500"
                        : "bg-black text-white"
                    }`}
                  >
                    {isAdded
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>
          <div className="h-fit rounded-2xl bg-white p-5 shadow">

            <div className="mb-5 flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Your Stack
                </h2>

                <p className="text-sm text-gray-500">
                  {selectedStack.length} technologies selected
                </p>
              </div>

             
            </div>
            {selectedStack.length === 0 && (
              <p className="rounded-xl bg-gray-50 p-5 text-center text-sm text-gray-500">
                Your stack is empty.
              </p>
            )}
            <div className="space-y-3">

              {selectedStack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
                >

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10 object-contain"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold">
                      {technology.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    onClick={() => onRemove(technology.id)}
                    className="text-gray-400 hover:text-red-500 cursor-pointer"
                  >
                    <FiX size={18} />
                  </button>

                </div>
              ))}
 {selectedStack.length > 0 && (
                <button
                  onClick={onRemoveAll}
                  className="text-sm text-red-500 border-1 border-red-500 w-full py-3 rounded-[10px] cursor-pointer"
                >
                  Remove All
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
        </Container>
    </section>
  );
}

export default Technologies;