sap.ui.define([
    "sap/ui/core/UIComponent",
    "multipleuielements/model/models",
    "sap/ui/model/json/JSONModel"
], (UIComponent, models, JSONModel) => {
    "use strict";

    return UIComponent.extend("multipleuielements.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
      var oModel= new JSONModel(sap.ui.require.toUrl("multipleuielements/model/data.json"));
      this.setModel(oModel);



            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});