
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

console.log(__dirname);

app.post('/run', (req, res) => {
	const body = req.body;
	
	console.log(body.code);

	//console.log(runCode(body.code, "").Console());
	let input = [1, "in2"];
	const result = runCode(body.code, input);
  	//console.log(`Input: ${input}, Output: ${result}`);

	res.status(200).send( JSON.stringify({'output':result}) );
});



app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

app.use(express.static(__dirname));





const vm = require('vm');

function runCode(code, input) {
	const sandbox = { input };
	const capturedOutput = [];
  
	// Create a custom console object to capture output
	const customConsole = {
	  log: (...args) => {
		capturedOutput.push(args.map(arg => String(arg)).join(' '));
	  }
	};
  
	sandbox.console = customConsole;
  
	try {
	  vm.createContext(sandbox);
	  vm.runInContext(code, sandbox);
	  return capturedOutput.join('\n');
	} catch (error) {
	  console.error('Error running code:', error);
	  throw error; // Rethrow the error for the calling function to handle
	}
  }




