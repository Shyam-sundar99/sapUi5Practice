sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
        "use strict";

        return Controller.extend("training.controller.View2", {
            onInit() {
                 this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this.onPatternMatched, this);
            },
             OnPressButton : function(){
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            },
            // onPatternMatched: function(){
            //   var EmpId = this.getOwnerComponent().getModel().getProperty("/EmpId");
            //    var EmpName= this.getOwnerComponent().getModel().getProperty("/EmpName");
            //    var EmpDesigination= this.getOwnerComponent().getModel().getProperty("/EmpDesigination");
            //    var EmpEmail= this.getOwnerComponent().getModel().getProperty("/EmpEmail");
            //    var EmpSalary= this.getOwnerComponent().getModel().getProperty("/EmpSalary");

            //    this.getView().byId("TexEmpId1").setProperty(EmpId);
            //    this.getView().byId("TexEmpName1").setProperty(EmpName);
            //    this.getView().byId("TexEmpDesigination").setProperty(EmpDesigination);
            //    this.getView().byId("TexEmpEmail1").setProperty(EmpEmail);
            //    this.getView().byId("TexEmpSalary").setProperty(EmpSalary);
               

            // }
         onPatternMatched: function()
{
    var EmpId = this.getOwnerComponent().getModel().getProperty("/Empid");
    var EmpName = this.getOwnerComponent().getModel().getProperty("/Empname");
    var EmpDesg = this.getOwnerComponent().getModel().getProperty("/Empdesig");
    var EmpEmail = this.getOwnerComponent().getModel().getProperty("/Empemail");
    var EmpSalary = this.getOwnerComponent().getModel().getProperty("/Empsalary");


    this.getView().byId("TexId").setText(EmpId);
    this.getView().byId("TexName").setText(EmpName);
    this.getView().byId("TexDesig").setText(EmpDesg);
    this.getView().byId("TexEmail").setText(EmpEmail);
    this.getView().byId("TexSalary").setText(EmpSalary);
    
},
onClick: function(){
    this.getOwnerComponent().getRouter().navTo("RouteView3");
}
        });
    });