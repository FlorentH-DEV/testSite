import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dispatch_toogleModal } from "../../../redux/slices/modalSlice";

const images = [
    "/imagesChalet1/1.png",
    "/imagesChalet1/2.png",
    "/imagesChalet1/3.png",
    "/imagesChalet1/4.png",
    "/imagesChalet1/5.png",
    "/imagesChalet1/6.png",
    "/imagesChalet1/7.png",
    "/imagesChalet1/8.png",
    "/imagesChalet1/9.png",
    "/imagesChalet1/10.png",
    "/imagesChalet1/11.png",
    "/imagesChalet1/12.png",
    "/imagesChalet1/13.png",
];

const ImageCarouselModal = () => {
    const [current, setCurrent] = useState(0);

    
    const {stateModal} = useSelector(state => state?.modal)
    const dispatch = useDispatch()

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <>
        {/* MODAL */}
        {stateModal && (
            <div className="modal" onClick={() => {dispatch(dispatch_toogleModal())}}>
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* CLOSE */}
                <button
                className="modal__close"
                onClick={() => {dispatch(dispatch_toogleModal())}}
                >
                ✕
                </button>

                {/* IMAGE */}
                <img
                src={images[current]}
                alt=""
                className="modal__image"
                />

                {/* BUTTONS */}
                <button
                className="modal__nav modal__nav--left"
                onClick={prevSlide}
                >
                ‹
                </button>

                <button
                className="modal__nav modal__nav--right"
                onClick={nextSlide}
                >
                ›
                </button>

                {/* DOTS */}
                <div className="modal__dots">
                {images.map((_, index) => (
                    <button
                    key={index}
                    className={`modal__dot ${
                        current === index ? "active" : ""
                    }`}
                    onClick={() => setCurrent(index)}
                    />
                ))}
                </div>
            </div>
            </div>
        )}
        </>
    );
};

export default ImageCarouselModal;