sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("training.controller.View1", {
            onInit() {
            },
            onPress: function(){
                var empId = this.getView().byId("empid").getValue();
                var empName = this.getView().byId("empname").getValue();
                var empDesg = this.getView().byId("empdesg").getValue();
                var empEmail = this.getView().byId("empemail").getValue();
                var empSalary = this.getView().byId("empsalary").getValue();

                var oModel = this.getOwnerComponent().getModel();
                oModel.setProperty("/Empid", empId);
                oModel.setProperty("/Empname", empName);
                oModel.setProperty("/Empdesig", empDesg);
                oModel.setProperty("/Empemail", empEmail);
                oModel.setProperty("/Empsalary", empSalary);


                this.getOwnerComponent().getRouter().navTo("RouteView2");
            }
            // onPress: function(){
            //     var name = this.getView().byId("Idinput").getValue();
            //     var welcomeMSG = "welcome to SAP" + " "+name;
            //     this.getView().byId("idText").setText(welcomeMSG);
            //    this.getView().byId("Idbutton").setType("Accept");
            //    //this.getOwnerComponent().getRouter().navTo("RouteView2");
            // }
            //onPress: function () {
                // var Empid = this.getView().byId("EmpId").getValue();
                // var EmpName = this.getView().byId("EmpName").getValue();
                // var EmpEmail = this.getView().byId("EmpEmail").getValue();
                // var EmpDesigination = this.getView().byId("EmpDesigination").getValue();
                // var EmpSalary = this.getView().byId("EmpSalary").getValue();

                
                // if (Empid === "" || EmpName === "" || EmpEmail === "" ){

                //     if(Empid === ""){
                //     this.getView().byId("EmpId").setValueState("Error");
                //     this.getView().byId("EmpId").setValueStateText("please fill this field");
                // } else{
                //     this.getView().byId("EmpId").setValueState("None");
                // }
                //      MessageBox.error("please fill the all required field");
                // };
                // var oModel = this.getOwnerComponent().getModel();

                //  oModel.setProperty("/EmpId", Empid);
                //  oModel.setProperty("/EmpName", EmpName);
                //  oModel.setProperty("/EmpDesigination", EmpDesigination1);
                //  oModel.setProperty("/EmpEmail", EmpEmail);
                // oModel.setProperty("/EmpSalary", EmpSalary);

                // this.getOwnerComponent().getRouter().navTo("RouteView2");

                 

                
                
                //if (Empid === ""){
                  //  MessageBox.error("please fill the all required fields");
                    
                //}
                //if (EmpName === ""){
                    //MessageBox.error("please fill the all required fields");
                    
                //}
                //if (Emp === ""){
                   // MessageBox.error("please fill the all required fields");
                    
                //}
            });
    });