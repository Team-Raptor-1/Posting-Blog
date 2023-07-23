
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css2/postblog.css';

const BlogForm = () => {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [secondaryImage, setSecondaryImage] = useState(null);
  const [titleText, setTitleText] = useState('');
  const [blogText, setBlogText] = useState('');

  const handlePrimaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrimaryImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSecondaryImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSecondaryImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTitleTextChange = (event) => {
    setTitleText(event.target.value);
  };

  const handleBlogTextChange = (event) => {
    setBlogText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted data:', {
      primaryImage,
      secondaryImage,
      titleText,
      blogText,
    });
  };

  return (
    <div className="container mt-4 text-left">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="primaryImage">Primary Image:</label>
          <input
            type="file"
            className="form-control"
            id="primaryImage"
            accept="image/*"
            onChange={handlePrimaryImageChange}
            required
          />
          {primaryImage && (
            <img
              className="uploaded-image"
              src={primaryImage}
              alt="Primary Image"
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="secondaryImage">Secondary Image:</label>
          <input
            type="file"
            className="form-control"
            id="secondaryImage"
            accept="image/*"
            onChange={handleSecondaryImageChange}
            required
          />
          {secondaryImage && (
            <img
              className="uploaded-image"
              src={secondaryImage}
              alt="Secondary Image"
            />
          )}
        </div>

        <div className="form-group">
          <label htmlFor="Title">Title:</label>
          <textarea
            id="TitleText"
            value={titleText}
            onChange={handleTitleTextChange}
            className="form-control"
            placeholder="Enter your Title here"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="blogText">Blog Text:</label>
          <textarea
            id="blogText"
            value={blogText}
            onChange={handleBlogTextChange}
            className="form-control"
            placeholder="Enter your blog text here"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BlogForm;