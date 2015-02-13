/**
 * Use program at https://gist.github.com/MightySCollins/f99823c076acde763d00
 * to create correct language to pesudo code with capitlisation.
 * Make sure to add replace in correct order for exarmple 'writeln' then 'write'
 * else you might get 'OUTPUTln'. Template code has eben included, just copy and paste
 */
function onOpen() {
  // Add a menu with some items, some separators, and a sub-menu.
  DocumentApp.getUi().createMenu('Pesudo')
      .addSubMenu(DocumentApp.getUi().createMenu('Convert Language')
          .addItem('Pascal', 'startPascal')) //Make sure last item has double brackets
        //.addItem('Language','startLanguage'))
      .addToUi();
}

/**
 * Starts the conversion of code
 */
function startPascal() {
  // Displays a dialog box with "Yes" and "No" buttons. Script execution will be
  // halted until the dialog is dismissed.
  var result = DocumentApp.getUi().alert(
      'Pascal Conversion',
      'Are you sure you want to continue?',
      DocumentApp.getUi().ButtonSet.YES_NO);

  // Process the user's response.
  if (result == DocumentApp.getUi().Button.YES) {
    // The user clicked the "Yes" button.

    // Get Document
    var body = DocumentApp.getActiveDocument().getBody();

    // Clear the text surrounding "Apps Script", with or without text.
    // Read information above about adding replace text
    // Symbole Replacment
    body.replaceText(";$","");
    body.replaceText(":=","=");
    
    // Text Replacment
    body.replaceText("[w,W][r,R][i,I][t,T][e,E]","OUTPUT");    

    // Compleated Scripts
    DocumentApp.getUi().alert('Conversion Finished');
  } else {
    // The user clicked the "No" button or the dialog's close button.
    DocumentApp.getUi().alert('Canceling the conversion...');
  }
  
}

/**
 * Template language
 * Replace language with desired coding language using generater attached
 */
function startLanguage() {
  // Displays a dialog box with "Yes" and "No" buttons. Script execution will be
  // halted until the dialog is dismissed.
  var result = DocumentApp.getUi().alert(
      'Pascal Conversion',
      'Are you sure you want to continue?',
      DocumentApp.getUi().ButtonSet.YES_NO);

  // Process the user's response.
  if (result == DocumentApp.getUi().Button.YES) {
    // The user clicked the "Yes" button.

    // Get Document
    var body = DocumentApp.getActiveDocument().getBody();

    // Clear the text surrounding "Apps Script", with or without text.
    // Read information above about adding replace text
    body.replaceText(";$","");
    body.replaceText(":=","=");
    // Template generated replace text
    body.replaceText("[w,W][r,R][i,I][t,T][e,E]","OUTPUT");    

    // Compleated Scripts
    DocumentApp.getUi().alert('Conversion Finished');
  } else {
    // The user clicked the "No" button or the dialog's close button.
    DocumentApp.getUi().alert('Canceling the conversion...');
  }
  
}
