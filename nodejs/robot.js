var robot = require('robotjs');

//robot.typeString("Hello World!");
robot.keyToggle("n","down","command");
//robot.setKeyboardDelay(10000);

/*i = 0;
while ( i < 1){

console.log(robot.getMousePos());

}*/

robot.moveMouse(318,206);
robot.mouseClick();
robot.typeString("Hello World!");
//robot.keyToggle("n","down");