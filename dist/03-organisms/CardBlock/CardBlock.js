import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

/**
 * ----------
 * CARDBLOCK
 * ----------
 * 
 * Card Block components are a flex containier
 * for Card atoms. There is no limit to the number
 * of cards that can be rendered. On consumptoin,
 * component can either be set to wrap row and flow 
 * down the page, or wrap on column whence the overflow
 * on the x-axis becomes scrollable.
 */
import React, { useContext, useEffect } from "react";
import { ThemeContext } from '../../00-protons/Themer/Themer';

var CardBlock = function CardBlock(_ref) {
  var additionalClasses = _ref.additionalClasses,
      backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      loadingImage = _ref.loadingImage,
      rowContains = _ref.rowContains;
  // animate cards
  useEffect(function () {
    var cardBlock = document.querySelector('.card-block');

    var animateCardBlock = function animateCardBlock(entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          // get cards
          var cards = Array.from(cardBlock.querySelectorAll('.card'));
          cards.forEach(function (card, i) {
            card.style.animationDelay = "".concat(i * 100, "ms");
            card.classList.add('slide-from-right__fade-in--medium');
          });
        }
      });
    };

    var options = {
      threshold: .6
    };
    var observer = new IntersectionObserver(animateCardBlock, options);
    observer.observe(cardBlock);
    return function () {
      return observer.unobserve(cardBlock);
    };
  }, []); // consume theme and set styles

  var _useContext = useContext(ThemeContext),
      colors = _useContext.colors;

  var blockStyles = {
    backgroundColor: colors[backgroundColor]
  };
  var classes = ["card-block", !!rowContains ? "card-block--row-".concat(rowContains) : ''].concat(_toConsumableArray(additionalClasses));
  return React.createElement("section", {
    style: blockStyles,
    className: "".concat(classes.join(" "))
  }, React.createElement("div", {
    className: "card-block__card-wrapper"
  }, children === undefined && loadingImage && React.createElement("img", {
    src: loadingImage,
    alt: "card data is loading",
    className: "loading-image"
  }), children));
};

CardBlock.defaultProps = {
  additionalClasses: [],
  backgroundColor: "mid"
};
export default CardBlock;