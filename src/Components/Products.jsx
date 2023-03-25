import React, { useState } from "react";

const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;
    if (edit) {
      const updatedProducts = [...items];
      const index = items.findIndex((product) => product === edit);
      updatedProducts[index] = { name, price };
      setItems(updatedProducts);
      setEdit(null);
    } else {
      setItems([...items, { name, price }]);
    }
    setName("");
    setPrice("");
    // e.target.reset();
  };

  const handleEdit = (product) => {
    setEdit(product);
    setName(product.name);
    setPrice(product.price);
  };

  const handleDelete = (product) => {
    const updatedProducts = items.filter((p) => p !== product);
    setItems(updatedProducts);
  };

  return (
    <>
      <div className="px-[10%] pb-20 mb-20">
        <div className="flex flex-row">
          <h1 className="font-bold text-2xl mr-4">Products</h1>
          <input
            className="border border-black rounded px-2 py-1.5"
            type="text"
            placeholder="Search for Keywords"
          />
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-4 text-center mt-10 mb-20">
          <div className="general-table">
            <table class="table-fixed border w-full border-black mb-20">
              <thead className="bg-[#ececec]">
                <tr>
                  <th className="py-2 ">Name</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className="border py-2 border-black">
                        {product.name}
                      </td>
                      <td className="border border-black">{product.price}</td>
                      <td className="flex flex-row py-2 justify-around border border-black">
                        <button
                          className="bg-[#000] px-2 py-1 rounded text-white"
                          onClick={() => handleEdit(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="border border-[#000] px-2 py-1 rounded"
                          onClick={() => handleDelete(product)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-[#ececec] py-10">
            <h1 className="text-[#000000] font-bold lg:text-3xl md:text-3xl text-3xl">
              Header Text
            </h1>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet <br />
              adipisicing elit, optio!
            </p>
            <form onSubmit={handleSubmit} className="px-10">
              <div>
                <input
                  required
                  className="mb-5 rounded px-3 py-3 w-full"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  className="mb-5 rounded px-3 py-3 w-full"
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-black rounded-md text-white px-8 py-3 mt-8 w-full"
                >
                  CalltoAction
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
