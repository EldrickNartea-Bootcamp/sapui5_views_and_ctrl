sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("zbtp.sapui5viewsandctrl.controller.View1", {
        onInit() {},

        onAddItem: function () {
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "zbtp.sapui5viewsandctrl.fragment.ProductDialog"
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

            // Show MessageToast
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
        onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
        },

        onPressCheckout: function (){
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();

            // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
               
            // set value state to Error
                oInputFName.setValueState("Error");
                oInputLName.setValueState("Error");
            } else {
                oInputFName.setValueState("None");
                oInputLName.setValueState("None");

                //Navigate to review page passing first
                oRouter.navTo("RouteReviewPage", {
                    firstName: oInputFNameValue
                });

            }
        },
    });
});
