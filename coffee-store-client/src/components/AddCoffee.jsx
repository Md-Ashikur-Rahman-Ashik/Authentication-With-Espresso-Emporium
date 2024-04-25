import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    console.log(newCoffee);

    // Send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] text-black p-24">
      <h2 className="text-3xl font-extrabold">Add A Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Coffee Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Coffee Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Available Quantity
            </label>
            <div className="flex">
              <input
                type="text"
                name="quantity"
                id=""
                placeholder="Available Quantity"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Form Supplier and Taste Row */}
        <div className="md:flex gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Supplier Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="supplier"
                id=""
                placeholder="Supplier Name"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Taste
            </label>
            <div className="flex">
              <input
                type="text"
                name="taste"
                id=""
                placeholder="Taste"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Form Category and Details Row */}
        <div className="md:flex gap-4 mt-2">
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Category
            </label>
            <div className="flex">
              <input
                type="text"
                name="category"
                id=""
                placeholder="Category"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Details
            </label>
            <div className="flex">
              <input
                type="text"
                name="details"
                id=""
                placeholder="Details"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        {/* Form Photo Row */}
        <div className="mt-2">
          <div className="md:w-full">
            <label
              htmlFor="url"
              className="block mb-1 text-sm font-medium text-black"
            >
              Photo
            </label>
            <div className="flex">
              <input
                type="text"
                name="photo"
                id=""
                placeholder="Photo"
                className="flex py-2 w-full flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Add Coffee"
          className="btn mt-4 bg-black text-white btn-block"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
