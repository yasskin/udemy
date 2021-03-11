* What is Node.JS - A JavaScript Runtime
* "JavaScript on the Server"
* We can use Node.JS to run JS outside the browser
* It uses V8 - the JS engine built by Google
* V8 Compiles JS to machine code
* The REPL
  # Read
  # Evaluate
  # Print
  # Loop
* The last lecture of each module always holds all snapshots for the module, ordered chronologically.
  ## JavaScript Basics
  * Weakly Typed Language / Object-Oriented Language
  * No explicit type assignment
* How Does The Web Works
* Core Modules
* # http - launch a server, send request
* # https - launch a SSL server (encrypted)
* # fs - file system
* # path -
* # os -

* Event Loop -- keeps on running as long as there are event listeners registered
* Single Thread
  ## Node uses one thread.
  ## Performance. "fs" - 
  ## Event Loop - automatically started. handles event callbacks. Only handles callback that contains fast-finishing code. A loop which keeps the process running and handles all the callbacks.
    ### First it checks for Timer callbacks -- setTimeout, setInterval 
    ### Then it checks Pending Callbacks - Execute I/O-related callbacks that were deferred.
    ### Poll phase. Looks for new I/O events and execute their callbacks. 
    ### It also checks if there are timer callbacks and executes them.
    ### Check phase. Executes setImmetiate() callbacks
    ### Executes Close Callbacks 'close' events
    1. Timer
    2. I/O
    3. Set Immetiate callbacks
    4. Close evnts
  ## Worker Pool - responsible for heavy lifting. detached and runs on different threads. Detached from the Event loop. Once the worker is done, it triggers the callback for that read loop.
  # Note the createServer() event never finished by default -- the server is always listening.

* Event Loop

* Blocking Code
* Program Lifecycle & Event Loop
* 