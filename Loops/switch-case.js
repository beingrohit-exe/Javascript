var area = "circle";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case "circle":
        console.log("Area of circle is : " + (PI * r));
        break;
    case "rectangle":
        console.log("Area of rectangle is : " + (l*b));
        break;
    default:
        console.log("Wrong Input");
        break;
}