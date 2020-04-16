var getUserName = (function () {
    "use strict";
    return VSS.getWebContext().user.name;
}());

VSS.register("getUserName", getUserName);