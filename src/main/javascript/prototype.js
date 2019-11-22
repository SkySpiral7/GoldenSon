'use strict';
if (undefined === JSON.clone)
{
   JSON.clone = function (obj)
   {
      return JSON.parse(JSON.stringify(obj));
   };
}
/**Removes the element from this array that is located at the index specified.
 Negative index is counted from the end.
 If the index does not exist nothing happens.
 This array is changed and nothing is returned.*/
Array.prototype.remove = function (index)
{
   if (typeof(index) === 'number' && isFinite(index)) this.splice(index, 1);
};
/**Removes the first element from this array that is equal to (type strict) the value specified.
 If the value is not found, nothing happens.
 This array is changed and nothing is returned.*/
Array.prototype.removeByValue = function (value)
{
   var index = this.indexOf(value);
   if (-1 === index) return;  //not found
   this.remove(index);
};
/**For each element of this array a type strict comparison is done against the parameter and returns true if any of them match*/
if (Array.prototype.contains === undefined)
{
   Array.prototype.contains = function (obj)
   {
      return (this.indexOf(obj) !== -1);  //Array.prototype.indexOf is type strict (using ===)
   };
}
