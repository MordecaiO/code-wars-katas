/*
Background
I have stacked some pool balls in a triangle.

Like this,

pool balls
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 5 layers.
*/

export function stackHeight2d(layers: number) {
  if (layers == 0 || layers == 1) return layers
 let h : number = Math.sqrt(Math.pow(layers-1,2) - Math.pow(0.5*(layers-1),2)) +1
  return h
}
