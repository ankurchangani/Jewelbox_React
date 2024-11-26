  // ProductDetail.jsx
  import React, { useState } from 'react';
  import Rings1 from '../../assets/Rings/Rings1.jpg';
  import Rings2 from '../../assets/Rings/Rings2.jpg';
  import Rings3 from '../../assets/Rings/Rings3.jpg';
  import Rings4 from '../../assets/Rings/Rings4.jpg';
  import Rings5 from '../../assets/Rings/Rings5.jpg';
  import Rings6 from '../../assets/Rings/Rings6.jpg';

  const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(Rings1);

    return (
      <div className="p-8 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section: Sidebar Images */}
          <div className="flex-1">
            <div className="flex gap-4">
              {/* Sidebar Thumbnails */}
              <div className="flex flex-col gap-2">
                {[Rings1, Rings2, Rings3, Rings4, Rings5, Rings6].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-20 cursor-pointer object-cover border-2 ${selectedImage === img
                        ? ''
                        : 'border-transparent opacity-50 hover:opacity-100'
                      } transition-opacity duration-300`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>

              {/* Main Display Image */}
              <div className="flex-1 w-[510px] h-[510px]">
                <img
                  src={selectedImage}
                  alt="Selected Product"
                  className="w-full h-full object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default ProductDetail;
