/*eslint-env browser*/

/*Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######

*/

var things = ["#", "##", "###", "####", "#####", "######", "#######"];
var i;
for (i = 0; i < things.length; i++){
    document.write( things[i] + "<br>");
}