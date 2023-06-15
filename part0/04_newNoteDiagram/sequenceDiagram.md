sequenceDiagram
    participant browser
    participant server

    Input 'aaa' into the text field and click the submit button.
    Note right of browser: The browser starts exeuting the JS code that submit inputed data to the server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser:
    deactivate server

    Note right of browser: The page https://studies.cs.helsinki.fi/exampleapp/notes refreshes when form data is submitted successfully

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON including the data lastly added from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "jjj", "date": "2023-06-14T09:06:25.113Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes