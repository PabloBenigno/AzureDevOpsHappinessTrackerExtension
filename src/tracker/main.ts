// import RestClient = require("TFS/Core/RestClient");

function getUserName () {
    "use strict";
    return VSS.getWebContext().user.name;
};

// function getTeamMembers () {
    // var ctx = VSS.getWebContext();

    // // Get an instance of the client
    //  var client = RestClient.getClient();
    // var members = client.getTeamMembersWithExtendedProperties(ctx.project.id, ctx.team.id, 10, 0);
    // console.log(members);
//     return members;
// }