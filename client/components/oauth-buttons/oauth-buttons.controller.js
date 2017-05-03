 const OauthButtonsController = ($window) => {
  this.loginOauth = function (provider) {
    $window.location.href = '/auth/' + provider;
  };
};

 export default OauthButtonsController;