const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Some Message</title></head>');
    res.write('<body><div>Hello from my Node.js Server!</div>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="newuser">')
    res.write('<button type="submit">Send</button>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>');
    res.end();
  }

  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul><li>Nancy</li><li>Bo</li><li>Susan</li></ul></body>')
    res.write('</html>');
    res.end();
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
    body.push(chunk);
      })
    req.on('end', ()=> {
      const parsedBody = Buffer.concat(body).toString();
      const newuser = parsedBody.split('=')[1];
      console.log(newuser);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }


}

module.exports.handler = requestHandler;