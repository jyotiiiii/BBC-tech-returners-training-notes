// Test Driven Development (TDD)

// AKA Red Green Refactor - when running tests, you see red for faults and green for passing. Refactor is for changing code and retesting. 

// If you’re someone who likes to understand what people like to do with Apps and questions whether an App should even be invented in the first place, you might be interested in going into testing. 

// WHAT IS A BUG? 

// If you ask ten different people, you’ll get ten different answers. 

// Anything that breaks the code. But could also be something that runs how you have asked it to, but it doesn’t do what you intended?  Something that does an unintended outcome?  i.e. search CEO in google brings only pictures of white men. So the data is biased, which means you don’t get the results you might one. Unintended biases. Google might not have designed that search to result in photos of white men, but that was the result of the data. If you’re a developer, do you put in extra code that skews the data to result in a more utopian world? 

// Look at The Cognitive Bias Chart. 

// Weapons of Math Destruction - about machine learning and bias. 
 
// Invisible Women - biases in product development etc. 

// The Jobs to be Done framework. Working with users to understand what job they are wanting done at the time. It’s a book called Jobs to be Done. 

// THE TESTING TRIANGLE

// UNIT
// Green base - unit tests. did we build it right? Does the code do what we expected it too? This is what we’ve been doing this week.  Pass/Fail. 
// The top half is focused on ‘did we build the right thing?’
// Green might be automated.  Tend to be written by developers and so it’s more ‘happy path’, looking for people to use it how you would use it. Sometimes get different developers to test it than wrote it, so try to pick out  faults that people won’t spot when they are too close to it. 
// White box testing - you know how the code works and you write tests to test it
// Black box testing - you have no idea how it works and you write tests to try to find out testing it. 
// INTEGRATION
// Blue - might be less pass/fail than the green one. Integration 
// ACCEPTANCE
// Yellow is testing by a computer - it can tell you if you click a button, something will happen. It can tell you if the purple is the wrong purple for the brand, but it can’t tell you if it looks crap. 
// The red at the top is probably humans doing it. Tends to be more subjective.  Trying to get software in front of people who are actually going to use it. In labs, people don’t use it how you’d use it day in/ day out. 

// Good testers ask shedloads of questions and don’t assume anything. 

// UNIT TESTS VX INTEGRATION TESTS

// Unit tests run very fast … get rest of stuff from James’ ppt

// Mocks - if you have code that gets code from database, don’t necessarily want you r database turned on, so you mock up data that is like your database and you use it for testing. There are mock databases around you can use. 

// INTEGRATION TESTS

// How does the thing run as a whole? If you’re doing Stripe or Paypal, you might want to know if the system works as a whole, does your code work with Paypal - do the systems works well integrated. So you might actually do test payments of £0.01 to check it works okay. 

// TDD

// Write a test - focusing on what that should do. 

// Run all tests and see if the one you have just added, fails. Sometimes it passes when it shouldn’t, and that starts a conversation - why did we think that was a valid test and why have we not got the result we wanted. 

// For example, if calculating VAT., what is people put numbers in words like one hundred. It won’t pass. And that triggers a conversation. Do we want user to be able to put numbers in as words and we change that for them using the code? Or do we tell them upfront that it has to be a number.  What’s better for the user? 

// Hit by the bus factor?  Single Points Of Failure (SPOF)
// As a team, you’re looking to protect yourself against all the knowledge being held by one person, so if they get hit by a bus, everything is lost. Want to code with documentation, so we are all disposable. This is best for the business. 

// Write tests and code that others can understand. 

// If you have tests that test WHAT is done, not HOW it’s done, you can change your code later on and the tests will still pass. 

// The DIAGRAM IN PPT
// Write a test that fails, write just a little code to make it pass, and then refactor the code to improve it to keep it still passing. 

// The data that you get is part of the ‘contract’ that you have. You need to know the format the data will come in as to be able to make things work. Like if data comes in as firstName for years and then provider changes it to first_name and doesn’t tell you, the system will fail, as the ‘contract’ has been broken. 

// Sometimes easier to do it yourself, sometimes not. The Buy it/ Build it dilemma. If taking payments, could write it all yourself and set yourself up as a bank, or just integrate with PayPal. 

// TDD

// Regression defects 

// Emegent design - it does just enough for what we need now, you don’t need to make it perfect

// Promotes a YAGNI approach - You Ain’t Gonna Need It

// A Pure Function - Ident

// Every time you put in the same input, it will put in the same output. That’s what you want for a test. 

// Need good code coverage where you make sure your test tests what you think. Dates are sometimes a bugger, where morning or afternoon things change. 

// ALTERNATIVE WAYS OF MANAGING RISK

// Canary releases
// Sending stuff out to see how people get on with it before releasing it to the whole world. FaceBook send out their updates to their staff first, (cohort deployments) then they might release to i.e. Texas, then the US, then Europe. 

// Blue/Green release - where most people are using the older, well tested version. And you send the blue release to some people to let them have a go. 

// Feature toggles
// Can turn things off for people and then you can turn things on for people. Like they’ve turned off Likes being visible in Instagram. So only the account holder can see the total number of likes for each thing. 

// Early Access is almost a perk - we’ll turn it on just for you special people, early adopters, and it’s for testing. 

// A Complaint is a Gift - firstly they are telling you something that isn’t working for them. And people like you more  if they complain and you address the issue, than if they had never complained in the first place. 

// Increased Exposure - might just put it out to a few people, maybe 1% of your market, so if it doesn’t work, you’ve only annoyed 1% of your customers. And then put it out to maybe 5%. With each increase, you learn more about any faults in the code. 

// LTS releases  - Long Term Support cost - (usually for 2 years!)

// Beta releases are sent out - all about managing expectations and crowdsourcing your testing. You’re fairly sure the code is good, but people will respond with problems they have. 
// Alpha releases are less resolved and are sent out to experts to test. 
// In the olden days with CD-Roms, you’d have to be sure it was perfect. Now, things can be sent out  with faults and the company can patch the software over the internet.  i.e. through updates. 

// LINKS (from ppt)

// Martin Fowler - can be very opinionated! 
