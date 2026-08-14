sap.ui.define([
    "sap/ui/core/util/MockServer"
], function(MockServer) {
    "use strict";

    return {

        init: function () {

            var oMockServer = new MockServer({
                rootUri: "/sap/opu/odata/sap/ZEMPLOYEE_SRV/"
            });

            oMockServer.simulate(
                "localService/metadata.xml",
                {
                    sMockdataBaseUrl: "localService/mockdata"
                }
            );

            oMockServer.start();

            console.log("Mock Server Started");
        }
    };
});