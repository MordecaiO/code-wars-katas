/*
You throw a ball vertically upwards with an initial speed v (in km per hour). 
The height h of the ball at each time t is given by h = v*t - 0.5*g*t*t where g is Earth's gravity (g ~ 9.81 m/s**2). 
A device is recording at every tenth of second the height of the ball. 
For example with v = 15 km/h the device gets something of the following form: 
(0, 0.0), (1, 0.367...), (2, 0.637...), (3, 0.808...), (4, 0.881..) ... where the first number is the time in tenth of second and the second number the height in meter.
Task
Write a function max_ball with parameter v (in km per hour) that returns the time in tenth of second of the maximum height recorded by the device.

Examples:
max_ball(15) should return 4

max_ball(25) should return 7
*/

export function maxBall(v0: number): number {
  let currMaxHeight : number = 0;
  let maxStep : number = 0; 
  for(let i=0; i<=v0; i++){
    let timeInSecs : number = i == 0 ? i : i/10
    let velocityMS : number = (v0*1000)/3600
    let height : number = velocityMS*timeInSecs - (0.5*9.81*timeInSecs*timeInSecs)
    if(height >= currMaxHeight){
      currMaxHeight = height
    } else {
      maxStep = i-1
      break
    }
  }
  return maxStep
}
