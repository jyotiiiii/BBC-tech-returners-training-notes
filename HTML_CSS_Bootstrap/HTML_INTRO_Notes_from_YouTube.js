HTML INTRO - notes from YouTube 

HTML Page Structure:
https://www.w3schools.com/html/html_intro.asp

The following videos will help embed the core HTML knowledge.

HTML Intro Part One - https://www.youtube.com/watch?v=bWPMSSsVdPk

HTML Intro Part Two - https://www.youtube.com/watch?v=KJ13lX20FqU

Tags is how HTML defines different areas and sections of the document. And its how the web browser would read and interpret the code. 
HTML is not a programming language - it’s a markup language. It defines the structure of a webpage. It tells a browser which part of webpage is title or content. 
You use CSS to add style to a webpage, to define colours and fonts etc. 
JS is a programming language that can be used to add interactivity to a website - make elements move around. 
JS is a client side language. 
PHP is a popular server side language. 
HTML 5 is quite forgiving in terms of uppercase, lowercase, a mix of both, how you close your tags. All of the following is legal code:
```
<IMG SRC="nice.jpg">
<img src=nice.jpg />
<iMg SrC=nice.jpg>
```

Save as index.html 

<html>
Opening HTML tag - everything in this HTML file will go within these tags.  
</html>
Closing HTML tag  - at the very bottom of the HTML file

Within tags, we have two sections

Head section <head> </head>
With opening and closing tags
This is where info about the page would go. 

Body section <body> </body>
With opening and closing tags 
This is where the content the user would view, will go. 

HEAD
This is where page title goes to be displayed in title bar of web browser . 
<title>
Tab it in 
</title>

DOCTYPE
This tells the browser what version of HTML you are using. This must be the very first thing on any HTML page, outside the main HTML tags. 
<!DOCTYPE html> tells browser this is HTML5
The ! in this, tells the browser that this is not part of the HTML markup itself, but should be read differently. 

BODY

HTML has some built in styles. 
<h1> Larger font and bold </h1> 
<h2>Subheading</h2>
All the way through to h6

SELF-CLOSING TAGS
/>

VIEWING
Can keep opening index.html in Chrome to view it. 

<p>Paragraph  tags - put the text inside</p>
<p>Another paragraph</p>
For new paragraph, add more P tags. The line spacing will add automatically. 

INSERTING AN IMAGE
(can use relative path if image is in the same folder as the html file)
<img src=“../images/image.jpg” />
If you don’t put width and height you want in, it just displays the image at the size it originally was. 
/> is a self-closing tag i.e. closing the opening tag
If you want to put in a size, you do it like this: 
<img src=“../images/image.jpg” width=“600” />
This will set the width to 600 pixels and height automatically goes to whatever height it would be if width was 600. Or you can set height yourself: (this can stretch the image)
<img src=“../images/image.jpg” width=“600” height=“300”/>
These attributes can go in any order you want, inside the img opening and closing tags. This applies to attributes of any element. 

ALT tag
A required attribute - This means if you don’t include it, you technically have invalid HTML. 
It gives an alternate to the image, if necessary. 
<img src=“../images/image.jpg” width=“600” height=“300” alt=“My image is an elephant” />

CLICKABLE IMAGE - WITH A LINK
Creates a hyperlink which is an image. 
```
		<a href=“http://google.com”>
				<img src="images/piano.jpg" alt="Piano" />
		</a>
```

<br> or <br />This is a break tag within a paragraph, text goes onto next line without having paragraph spacing. 

<hr /> This is a horizontal line across the page - could use it to separate different sections of a webpage. 

LINK TAG
<a href=“http://google.com”>Click here!</a>

LISTS - unordered list - bullet pointed list
Wrap it all in ul tags
<ul></ul> 
And then each item in li tags - for list item
<li>Item 1</li>
<li>Item 2</li>

LISTS - ordered lists - numbered list
Wrap it all in ol tags instead of ul tags 

DIV tags
Divide the page up into sections. Think of them as invisible boxes that other things can go inside. 
By default you won’t see them, but a DIV tag will create a line break before and after, so you can’t put things next to a DIV tag, only above or below (this can be changed in CSS). 
You can nest DIV tags as much as you want. 
Elements can’t be overlapping - you have to open and close other tags within the same DIV tag i.e. I couldn’t open a paragraph tag in one DIV and close it in another DIV. It would have to be opened and closed within the same DIV. But elements can go inside each other of course. 
```
<body>
		<div id="header">
				<h1>Welcome to my website</h1>
		</div>

		<div class="my-class">
				<h2 class="my-class">Homepage</h2>
				<p>Hope you like it</p>
		</div>

		<div class="my-other-class">
				Copyright &copy; 2019 RLF
		</div>
```

&copy; is for copyright symbol
You can google HTML entities for more useful codes like that. 

IDENTIFYING ELEMENTS I.E. for styling with CSS
If you want CSS to style your page, you need to give the items attributes that can be recognised by CSS. You can do this in two ways. 

ID
You can give a tag an ID. This must be unique. You can’t give more than one element on a page an ID. 

CLASS
If you want to give attribute to more than one item, you can give them a class. You can add this as often as you like and then in CSS you can give styles to that particular class. 

SPAN tag
Similar to a DIV tag in that it creates logical groupings/sections on a page. But it won’t create a line break like a DIV tag does. 
```
Welcome to my <span class=“red”>cool</span>website! 
```
This won’t show in HTML, but it’s there to allow us to target the word ‘cool’ using our CSS. If we had used DIV tags, it would put the word ‘cool’ on its own line with paragraph spacing above and below. 

