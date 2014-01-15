casper.test.begin('Test: does register page exist', function(test) {
	casper.start('https://profile.theguardian.com/register', function() {
		test.assertTitle('Register', 'expected: Register');
	});
});