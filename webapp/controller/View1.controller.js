sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("zbtp.sapui5viewsandctrl.controller.View1", {
        onInit() {},

        onAddItem: function (){
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "zbtp.sapui5viewsandctrl"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });
        },

        fnDisplayMsg: function (sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey = oEvent.getParameter("selectedItem").getKey();
            var sSelectedText = oEvent.getParameter("selectedItem").getText();

        
            MessageToast.show("Selected MOP: " + sSelectedText);

            var oView = this.getView();
            var oMobileLabel = oView.byId("idLblPhone");
            var oMobileInput = oView.byId("idInputPhone");
            var oCCLabel = oView.byId("idLblCC");
            var oCCInput = oView.byId("idInputCC");

            oMobileLabel.setVisible(sSelectedKey === "GCASH");
            oMobileInput.setVisible(sSelectedKey === "GCASH");

            oCCLabel.setVisible(sSelectedKey === "CC");
            oCCInput.setVisible(sSelectedKey === "CC");
        },

        onPressCheckout: function () {
            var oView = this.getView();
            var sFName = oView.byId("idInptFName").getValue();
            var sLName = oView.byId("idInptLName").getValue();

            if (!sFName && !sLName) {
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("requiredFieldMsg");
                MessageToast.show(sMsg);
            }
        },
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        },

    });
});
