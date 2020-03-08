// this is a basic data file for housing all the props data
// that you will pass into this component. By default, loris has
// setup a "data" object for you. You should import it in the file 
// where you consume this component and then pass it to the relevant 
// component like this: {...data}
//
// you can also add and export as many other objects from this file
// as you like, this is a pattern we encourage. So if you had an instance
// of this component on the homepage, setup and export a "homepage" object
// and then an "aboutpage" object etc (or use whatever naming convention
// you like!)
import { CAMERA_PLACEHOLDER, NGPHOTO_TEST_1, NGPHOTO_TEST_2, NGPHOTO_TEST_3, NGPHOTO_TEST_4, NGPHOTO_TEST_5, NGPHOTO_TEST_6, NGPHOTO_TEST_7, NGPHOTO_TEST_8, NGPHOTO_TEST_9 } from '../../demo/assets';
var data = {
  // add props here that your component will expect in the format:
  // PropName: prop value
  images: [{
    imageAlt: "ngphoto test 1",
    imageId: "ngphoto-test-1-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_1
  }, {
    imageAlt: "ngphoto test 2",
    imageId: "ngphoto-test-2-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_2
  }, {
    imageAlt: "ngphoto test 3",
    imageId: "ngphoto-test-3-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_3
  }, {
    imageAlt: "ngphoto test 4",
    imageId: "ngphoto-test-4-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_4
  }, {
    imageAlt: "ngphoto test 5",
    imageId: "ngphoto-test-5-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_5
  }, {
    imageAlt: "ngphoto test 6",
    imageId: "ngphoto-test-6-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_6
  }, {
    imageAlt: "ngphoto test 7",
    imageId: "ngphoto-test-7-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_7
  }, {
    imageAlt: "ngphoto test 8",
    imageId: "ngphoto-test-8-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_8
  }, {
    imageAlt: "ngphoto test 9",
    imageId: "ngphoto-test-9-gallery",
    placeholderImageSrc: CAMERA_PLACEHOLDER,
    imageSrc: NGPHOTO_TEST_9
  }],
  sideNavMenuItems: [{
    label: 'Animals',
    link: '/galleries/animals'
  }, {
    label: 'Birds',
    link: '/galleries/birds'
  }, {
    label: 'Insects',
    link: '/galleries/insects'
  }, {
    label: 'Land and Sea',
    link: '/galleries/land-and-sea'
  }, {
    label: 'Plants',
    link: '/galleries/plants'
  }, {
    label: 'Urban and Abstract',
    link: '/'
  }],
  titleText: "Latest work",
  titleLevel: 2,
  underlineColor: "main"
};
export { data };