import React from "react";

const AddService = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.name.value;
    const img = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;

    form.reset();
    const fullReview = {
      title,
      img,
      price,
      description,
    };
    // console.log(fullReview);
    fetch(`http://localhost:5000/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullReview),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} className="card-body">
      <h1 className="text-5xl text-center font-bold">Add Service</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Service Title</span>
        </label>
        <input
          type="text"
          placeholder="Service Title"
          name="name"
          className="input input-bordered"
        />
      </div>
      <textarea
        className="textarea textarea-success"
        placeholder="Start typing..."
        id="review"
        name="description"
        rows="4"
        cols="50"
      ></textarea>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="number"
          placeholder="Put Price"
          name="price"
          className="input input-bordered"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          placeholder="Photo URL"
          name="photo"
          className="input input-bordered"
        />
      </div>

      <div className="form-control mt-6">
        <input
          className="btn btn-primary text-black"
          type="submit"
          value="Add Service"
        />
      </div>
    </form>
  );
};

export default AddService;
