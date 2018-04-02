/* eslint-disable global-require */
const fastfilter = require('./fastfilter');

module.exports = {
  afterimage: require('./afterimage'),
  bitbang: require('./bitbang'),
  bloom: require('./bloom'),
  buffer_load: require('./buffer_load'),
  buffer_save: require('./buffer_save'),
  desolve: require('./desolve'),
  elastic: require('./elastic'),
  from_ycbcr: require('./from_ycbcr'),
  leak: require('./leak'),
  noise: require('./noise'),
  scanlines: require('./scanlines'),
  sliceglitch: require('./sliceglitch'),
  slicerep: require('./slicerep'),
  streak: require('./streak'),
  to_ycbcr: require('./to_ycbcr'),
  tv_displacement: require('./tv_displacement'),
  tvscan: require('./tvscan'),
  ffblur: fastfilter.blur,
  ffbrightness: fastfilter.brightness,
  ffcontrast: fastfilter.contrast,
  ffhue: fastfilter.hue,
  ffsaturate: fastfilter.saturate,
  xform: require('./xform'),
};
