sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/routing/History"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, History) {
        "use strict";

        return Controller.extend("zbtp.sapui5viewsandctrl.controller.ReviewPage", {
            onInit: function () {
                // Get the router object
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.getRoute("RouteReviewPage").attachPatternMatched(this._onObjectMatched, this);
            },

            _onObjectMatched: function (oEvent) {
                // Get the passed value from arguments
                var aArgs = oEvent.getParameter("arguments");
                // Display the first name value from previous page
                MessageToast.show(aArgs.firstName);
            },

            onPressBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                var oRouter = this.getOwnerComponent().getRouter();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    oRouter.navTo("RouteMainView", {}, true);
                }
            },
            onAddItem: function () {
 
    
                if (!this.oDialog) {
                    this.oDialog = this.loadFragment({
                        name: "zbtp.sapui5viewsandctrl.fragment.ProductDialog"
                    });
                } 
                this.oDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },
    
            fnDisplayMsg: function (sMsg ) {
                MessageToast.show(sMsg);
            },
            onCloseDialog: function (){
                this.getView().byId("idProductDialog").close();
            },
        });
    });
