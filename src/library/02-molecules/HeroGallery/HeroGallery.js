/**
 * ----------
 * HEROGALLERY
 * ----------
 * 
 * Hero Gallery components are designed for the hero
 * section of the homepage, they display a rotation of
 * images.
 * The images prop should be an array of objects, in which
 * each image should be an object of shape:
 * 
 * {
 * ..imageAlt: string,
 * ..imageId: string,
 * ..imagePlaceholderSrc: string, (optional)
 * ..imagePos: {
 * ....x: number,
 * ....y: number
 * ..}, (optional)
 * ..imageSize: {
 * ....width: string, (number including css length)
 * ....height: string (number including css length)
 * ..},
 * ..imageSrc: string (filepath)
 * }
 * 
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import { CoverImage } from '../../01-atoms'
import { DOWN_CHEVRON } from '../../demo/assets'

const HeroGallery = ({
  additionalClasses,
  gallerySize,
  images
}) => {
  let randomIndex = Math.floor(Math.random() * Math.floor(images.length))
  const [imageInView, setImageInView] = useState(randomIndex)

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * Math.floor(images.length))
    if (randomIndex === imageInView) {
      if (imageInView === images.length - 1) randomIndex = 0
      randomIndex += 1
    }
    // the duration at the end here should match the 
    // animation duration set in the scss file (.image-cross-fade)
    setTimeout(() => setImageInView(randomIndex), 7400)
  }, [imageInView, images])

  const galleryStyles = {
    width: gallerySize.width,
    height: gallerySize.height
  }

  const handleScroll = () => {
    const galleryHeight = document.querySelector('.hero-gallery').clientHeight
    window.scrollTo(0, (galleryHeight - 32))
  }

  const classes = ["hero-gallery", ...additionalClasses]
  return (
    <section style={ galleryStyles } className={`${classes.join(" ")}`}>
      {
        images.map((image, i) => {
          let viewClass = imageInView === i ? "image-cross-fade" : ""
          let galleryPosition = i === 0 ? `-${100 * imageInView}%` : "0"
          return (
            <CoverImage
              additionalClasses={ [viewClass] }
              key={ image.imageId }
              { ...image }
              imageSize={ {...gallerySize} }
              scopedStyles={ {marginLeft: galleryPosition} }
            />
          )
        })
      }
      <img onClick={handleScroll} className="down-chevron" src={ DOWN_CHEVRON } alt="chevron indicating downward scoll" />
    </section>
  )
}

HeroGallery.propTypes = {
  additionalClasses: PropTypes.array,
  gallerySize: PropTypes.object,
  images: PropTypes.array.isRequired
}

HeroGallery.defaultProps = {
  additionalClasses: [],
  gallerySize: {
    width: "100%",
    height: "100vh"
  }
}

export default HeroGallery
