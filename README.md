# Website: https://travelshareapp.herokuapp.com

# Travel Share
This is a fork of an app my team worked on for our final project in Alchemy Code Lab.It lets you explore the wide world of travel with pictures and stories from people who have traveled there. This fork has refactored code and uses Sockets.io for live chat. Original can be faund at https://github.com/tbdello/i-travel

# Tech Used
AWS S3 for image uploads and storage, 
Redux for state managment,
Sockets.io for web sockets use in live chat.


## Requirements

MongoDB, latest stable version of Node.js 

## Installation


1. Clone repository and change directory.

    ```
    git clone https://github.com/martsyalis/travel-share 
    ```

2. Install dependencies.

    ```
    npm install
    ```

This app relies on a server, found at:

https://github.com/Martsyalis/travel-share-server

and your own AWS keys.

## Usage

After installation in the terminal: `npm start`

and then open a browser to: `http://localhost:3000/`


## Contributing

1. Fork it!
1. Create your feature branch: `git checkout -b my-new-feature`
1. Commit your changes: `git commit -am 'Add some feature'`
1. Push to the branch: `git push origin my-new-feature`
1. Submit a pull request 

## Credits

Created by: *Andrew Bodey, Maryus Martsyalius, Eli Speigel*

## License

MIT
