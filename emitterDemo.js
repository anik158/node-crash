import {EventEmitter} from 'events';

// Create an instance of EventEmitter
const emitter = new EventEmitter();

// Define a listener function
const greetListener = (name) => {
    console.log(`Hello, ${name}!`);
};

const farewellListener = (name) => {  
    console.log(`Goodbye, ${name}!`);
}

// Register the listener for the 'greet' event
emitter.on('greet', greetListener);

// Emit the 'greet' event with a name
emitter.emit('greet', 'Alice');

// Emit the 'greet' event with another name
emitter.emit('greet', 'Bob');

emitter.on('farewell', farewellListener);

emitter.emit('farewell', 'Alice');

emitter.emit('farewell', 'Bob');


emitter.on('error', (err) => {
    console.error('An error occurred:', err.message);
});


emitter.emit('error', new Error('Something went wrong!'));