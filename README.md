#Installation
-Download Node.js
	https://nodejs.org/en/download/
-Install Angular-CLI 6.0.8
	Enter "npm install -g @angular/cli" into a terminal  or command prompt.
-Clone Project
	git clone https://github.com/yelwah/CISC475-Group7.git
-Run the following commands from ./CISC475-Group7/ngStats 
	npm i
	npm start
-Application runs at http://localhost:4200/

#Features
-Displays large amounts of data in an appealing fashion
-Filter through test and lab data
-Search questions by prompt
-View detailed information on specific questions
-Interactive tables and charts to see more information at a glance. 

#Future Goals
-Replace json data from ./ngStats/src/assets with a json from a database.
	+Need an assets folder or a database to pull data live.
-Link the import spreadsheet feature from sheetjs.component.ts to the database.
	+Cannot save data from a client into a server's assets folder.
	+Currently freezes because it can't save. Clear will unfreeze.
-Add compatibility for lab data
	+Extend test frameworks to labs since the data format is similar. 