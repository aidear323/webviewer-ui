import getHashParams from 'helpers/getHashParams';

export default () => {
  console.warn('Deprecated and will be removed in version 9.0');
  if (!window.bbAnnotManager) {
    const serverURL = getHashParams('pdftronServer', '');
    window.bbAnnotManager = new window.CoreControls.BlackBoxAnnotationManager(serverURL, window.docViewer);
  }

  return window.bbAnnotManager;
};