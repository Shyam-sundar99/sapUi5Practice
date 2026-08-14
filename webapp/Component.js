sap.ui.define([
    "sap/ui/core/UIComponent",
    "training/model/models",
    "./localService/mockserver",
    "sap/ui/model/json/JSONModel"

], (UIComponent, models, mockserver, JSONModel) => {
    "use strict";

    return UIComponent.extend("training.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            var oModel = new JSONModel({
                Empid: "",
                Empname: "",
                Empdesig: "",
                Empemail: "",
                Empsalary: "",
                
            });
            this.setModel(oModel);

            mockserver.init();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});