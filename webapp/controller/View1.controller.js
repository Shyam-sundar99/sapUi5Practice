sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("training.controller.View1", {
            onInit() {
            },
            // onPress: function(){
            //     var name = this.getView().byId("Idinput").getValue();
            //     var welcomeMSG = "welcome to SAP" + " "+name;
            //     this.getView().byId("idText").setText(welcomeMSG);
            //    this.getView().byId("Idbutton").setType("Accept");
            //    //this.getOwnerComponent().getRouter().navTo("RouteView2");
            // }
            onPress: function () {
                var Empid = this.getView().byId("EmpId").getValue();
                var EmpName = this.getView().byId("EmpName").getValue();
                var EmpEmail = this.getView().byId("EmpEmail").getValue();


                if(Empid === ""){
                    this.getView().byId("EmpId").setValueState("Error");
                    this.getView().byId("EmpId").setValueStateText("please fill this field")
                }else{
                    this.getView().byId("EmpId").setValueState("None");
                }
                if (Empid === "" || EmpName === "" || EmpEmail === "@gmail" ){
                     MessageBox.error("please fill the all required field");
                    
                }else if(EmpEmail === "@gmail"){
                     
                    this.getOwnerComponent().getRouter().navTo("RouterView3");
                }else{
                    this.getOwnerComponent().getRouter().navTo("RouteView2");
                }
            
                
                
                //if (Empid === ""){
                  //  MessageBox.error("please fill the all required fields");
                    
                //}
                //if (EmpName === ""){
                    //MessageBox.error("please fill the all required fields");
                    
                //}
                //if (Emp === ""){
                   // MessageBox.error("please fill the all required fields");
                    
                //}
            }
        });
    });