# Stream Video React APP


this is a react web app cabable of making http requests to a RTMP server that receive videos that are streamed through the software [OBS] (https://obsproject.com/)


## The project is comprised of the following main parts

 1) A client project which that runs on port 3000, where most of our DOM elements are and where our server requests originate from.
 2) A rtmp project, the server which receives the http requests on port 8000 from our client and is fed by the OBS software with videos on port 1935.
 3) A api project responsible for crud operations for our client project which runs on port 3001. 

