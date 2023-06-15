sequenceDiagram
    participant browser
    participant server

    Input 'bbb' into the text field and click the submit button.
    Note left of browser: The browser executes the callback function that rerenders the notes including added element
    Note right of browser: The browser starts exeuting the JS code that submit inputed data to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: {message: "note created"}
    deactivate server

    