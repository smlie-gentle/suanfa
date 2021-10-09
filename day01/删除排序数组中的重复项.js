// 输入：nums = [0,0,1,1,1,2,2,3,3,4]
// 输出：5, nums = [0,1,2,3,4]
// 解释：函数应该返回新的长度 5 ， 
// 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i; j < nums.length - 1; j++) {
//             if (nums[i] == nums[j]) {
//                 nums.splice(j, 1)
//             }
//         }
//     }
//     return ('数组nums:' + nums + '数组长度:' + nums.length)
// };
// nums = [0, 0, 1, 0, 1, 2, 2, 3, 3, 4]
// console.log(removeDuplicates(nums));

// function remove(nums) {
let index = 1
for (let i = 1; i < nums.length; i++) {
    // 重复元素就跳过
    if (nums[i] == nums[i - 1]) continue;
    else {
        // 不是重复元素就将该元素赋值给index位置，再向右移动指针
        nums[index++] = nums[i];
    }
}
return index;
// }
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(remove(nums));



/*
删除数组中的一项
1.splice 会改变原数组  
2.delete   delete删除掉数组中的元素后，会把该下标出的值置为undefined,数组的长度不会变
3.remove   移除数组中的一项
4.arrayObject.slice(start,end) //第一个参数为起始位置，第二个参数为结束位置
*/