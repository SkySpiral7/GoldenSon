'use strict';
if (undefined === JSON.clone)
{
   Object.defineProperty(JSON, 'clone', {
      value: function (obj)
      {
         return JSON.parse(JSON.stringify(obj));
      }
   })
}
if (undefined === Array.prototype.contains)
{
   Object.defineProperty(Array.prototype, 'contains', {
      value:
         /**For each element of this array a type strict comparison is done against the parameter and returns true if any of them match*/
         function (obj)
         {
            return (this.indexOf(obj) !== -1);  //Array.prototype.indexOf is type strict (using ===)
         }
   });
}
if (undefined === Array.prototype.remove)
{
   Object.defineProperty(Array.prototype, 'remove', {
      value:
         /**Removes the element from this array that is located at the index specified.
          Negative index is counted from the end.
          If the index does not exist nothing happens.
          This array is changed and nothing is returned.*/
         function (index)
         {
            if (typeof(index) === 'number' && isFinite(index)) this.splice(index, 1);
         }
   });
}
if (undefined === Array.prototype.removeByValue)
{
   Object.defineProperty(Array.prototype, 'removeByValue', {
      value:
         /**Removes the first element from this array that is equal to (type strict) the value specified.
          If the value is not found, nothing happens.
          This array is changed and nothing is returned.*/
         function (value)
         {
            var index = this.indexOf(value);
            if (-1 === index) return;  //not found
            this.remove(index);
         }
   });
}
