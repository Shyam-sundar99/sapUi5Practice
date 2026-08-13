sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
        "use strict";

        return Controller.extend("training.controller.View2", {
            onInit() {
                
            },
            OnPressButton : function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        });
    });