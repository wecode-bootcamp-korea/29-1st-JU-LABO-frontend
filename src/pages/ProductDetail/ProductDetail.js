import React, { useState, useEffect } from 'react';
import OptionModal from './OptionModal';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [imgs, setImgs] = useState([]);
  const [selected, setSelected] = useState('');
  const [size, setSize] = useState('500 ml / 16.9 fl oz');
  const [quantity, setQuantity] = useState(1);
  const [isSizeShow, setIsSizeShow] = useState(false);
  const [isQuantityShow, setIsQuantityShow] = useState(false);

  useEffect(() => {
    fetch('http://10.58.0.180:8000/products')
      .then(res => res.json())
      .then(result => {
        setImgs(result.products[0].image_urls);
        setSelected(result.products[0].image_urls[0]);
      })
      .catch(err => console.log(err));
  }, []);

  const selectImage = (e, img) => {
    if (e.target.classList[0] === 'labelCurrent') {
      setSelected(imgs[1]);
    }
    setSelected(img);
  };
  const isShowModal = e => {
    if (e.currentTarget.className.includes('sizeInfo'))
      setIsSizeShow(!isSizeShow);
    if (e.currentTarget.className.includes('quantityInfo'))
      setIsQuantityShow(!isQuantityShow);
  };

  return (
    <section className="productDetail">
      <div className="slideCurrentImgWrap">
        <p className="breadcrumbs">Home / The Redwine</p>
        <img src={selected} className="slideCurrent" alt="SlideCurrentImg" />

        <div className="productsContent">
          <ul>
            {imgs.map((img, idx) =>
              selected === img ? (
                <li key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className="productImage selected"
                    onClick={e => selectImage(e, img)}
                  />
                </li>
              ) : (
                <li key={idx}>
                  <img
                    src={img}
                    alt={img}
                    className="productImage"
                    onClick={e => selectImage(e, img)}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="slideCurrentImageFoot">
          <p>
            <span>
              View personalization:{' '}
              <span className="labelCurrent underLine" onClick={selectImage}>
                label
              </span>{' '}
              and{' '}
              <span className="productBox underLine" onClick={selectImage}>
                box
              </span>
            </span>
          </p>
        </div>
      </div>
      <div className="productSingleSide">
        <div className="productHead">
          <div>
            <h2>THE Chamara 26</h2>
            <p className="productPrice">USD $198.00</p>
          </div>
          <p className="productType">Delicious Wine</p>
          <p className="afterpayParagraph">
            <span>or 4 interest-free payments of $49.50 with</span>
          </p>
        </div>

        <div className="productForm">
          <form action="#" method="post">
            {isSizeShow && (
              <OptionModal
                setSize={setSize}
                setIsShow={setIsSizeShow}
                isSizeShow={isSizeShow}
                size
              />
            )}

            <div className="formRow">
              <p className="productLabel">Size: </p>
              <div className="productInfo sizeInfo" onClick={isShowModal}>
                <p>
                  <input
                    type="text"
                    value={size}
                    readOnly
                    className="sizeInput"
                  />
                </p>
                <i className="fas fa-chevron-down" />
              </div>
            </div>

            {isQuantityShow && (
              <OptionModal
                setQuantity={setQuantity}
                setIsShow={setIsQuantityShow}
                isQuantityShow={isQuantityShow}
                quan
              />
            )}
            <div className="formRow">
              <p className="productLabel">Quantity: </p>
              <div className="productInfo quantityInfo" onClick={isShowModal}>
                <p>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="sizeInput"
                  />
                </p>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            <div className="formRow">
              <p className="productLabel">Label: </p>
              <div className="productInfo">
                <p>
                  <input
                    type="text"
                    placeholder="personalize here..."
                    className="sizeInput"
                  />
                </p>
                <i className="fas fa-chevron-down" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
