const express = require( 'express' );
const {PersonRouter} = require( './server/router/router' );
require( './server/config/database' );
const app = express();
app.use(express.json());
app.use( '/', PersonRouter );

app.listen( 8080, function(){
    console.log( "The server is running in port 8080." );
});