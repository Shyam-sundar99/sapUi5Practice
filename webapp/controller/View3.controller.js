sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
        "use strict";

        return Controller.extend("training.controller.View3", {
            onInit() {
                
            },
            OnPressButton1 : function(){
                //this.getOwnerComponent().getRouter().navTo("RouteView1");
                history.go(-1);
            }
        });
    });