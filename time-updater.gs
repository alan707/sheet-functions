function onEdit(event) {
    var sheetName = "My Sheetname";
    var s = SpreadsheetApp.getActiveSheet();
    var user = Session.getEffectiveUser();
    if (s.getName() !== sheetName) return;
    var r = s.getActiveCell();
    if( r.getColumn() != 2 ) { //checks the column
        var row = r.getRow();
        var time = new Date();
        time = Utilities.formatDate(time, "GMT-08:00", "MMM-d-yyyy, H:mm:ss");

        var updatedat = "Last updated on ";
        var updatedby = "Last updated by ";
        var timestring = updatedat + time;
        var userstring = updatedby + user;

        SpreadsheetApp.getActiveSheet().getRange("C1:C1").setValue(timestring);
        SpreadsheetApp.getActiveSheet().getRange("D1:D1").setValue(userstring);
    }
}
