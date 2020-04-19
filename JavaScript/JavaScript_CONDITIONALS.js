JavaScript CONDITIONALS

SEE JAMES’ PPT FROM DAY THREE OF IMMERSION WEEK

Conditionals make our code take different execution paths depending on the inputs. i.e. you leave home and check the time, if YES it’s before 7am you take the bus, if NO it’s after 7am you take the tube. Both these result in getting to work. 

CONDITIONALS - IF AND IF/ELSE STATEMENTS

For example, this kind of code is usually used … 

```
if(score >= 7) {
    return “You did amazing!”;
}
else if(score >= 5 && score <= 6) {
    return “You did great”;
}
else {
    return “Maybe try a bit more practice”;
}
```

CONDITIONALS - SWITCH

These use case statements. You can use them for Strings as well as Numbers. 

```
switch(score) {
    case 1:
        result = “You only scored 1” ;
        break;
    case 2:
        result = “Nearly there you got a 2”;
        break;
    case 3:
        result = “Well done you got a 3”;
        break;
    default:
        result = “No idea what you got!?”;
}
```


