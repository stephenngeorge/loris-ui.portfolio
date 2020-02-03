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
    setTimeout(() => setImageInView(randomIndex), 7400)
  }, [imageInView])

  const galleryStyles = {
    width: gallerySize.width,
    height: gallerySize.height
  }

  const classes = ["hero-gallery", ...additionalClasses]
  console.log(images)
  return (
    <section style={ galleryStyles } className={`${classes.join(" ")}`}>
      {
        images.map((image, i) => {
          let viewClass = imageInView === i ? "image-in-view" : ""
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
    height: "60vh"
  }
}

export default HeroGallery
