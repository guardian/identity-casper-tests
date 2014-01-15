
casper.test.begin('Test: does sign in page exist', function(test) {
	casper.start('https://profile.theguardian.com/signin', function() {
    	test.assertTitle('Sign in', 'expected: Sign in');
	    test.assertVisible('.social-signin', 'expected to see social sign in buttons');
	    // this.capture('signinpage.png');
	});
});

casper.run();