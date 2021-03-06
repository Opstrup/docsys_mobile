/**
 * Created by Opstrup on 06/10/2015.
 */

angular.module('docsys-phonegap')

  .factory('cameraServices', ['$cordovaCamera', function($cordovaCamera) {

    function getOptions() {
        return options = {
          quality: 100,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: false,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 600,
          targetHeight: 600,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation: true
        };
    }

    return {

      takePicture: function() {
          var options = getOptions();
          return $cordovaCamera.getPicture(options);
      }
    };

  }]);
