// 冒泡排序
// 冒泡排序的基本思想是，
// 对相邻的元素进行两两比较，顺序相反则进行交换，这样，每一趟会将最小或最大的元素“浮”到顶端， 最终达到完全有序。
// 判断是否是数组的方法
/*
1.通过instanceof判断   a instanceof Array; //true
2.通过constructor判断   a.constructor === Array;//true
3.通过Object.prototype.toString.call()判断    Object.prototype.toString.call(a) === '[object Array]';//true
4.通过Array.isArray()判断
*/
// // arr = [4, 5, 1, 9, 6, 7, 8]
arr = [5, 9, 7, 6, 2, 0]

// function Bubbling(arr) {
//     if (Array.isArray(arr) && arr.length - 1 < 0) return alert('输入有误')
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
function Bubbling(arr) {
    if (!Array.isArray(arr) || arr.length <= 1) return;
    let lastIndex = arr.length - 1;
    while (lastIndex > 0) { // 当最后一个交换的元素为第一个时，说明后面全部排序完毕
        let flag = true,
            k = lastIndex;
        for (let j = 0; j < k; j++) {
            console.log(j);
            if (arr[j] > arr[j + 1]) {
                flag = false;
                lastIndex = j; // 设置最后一次交换元素的位置l
                console.log(arr[j], arr[j + 1]);
                console.log(arr);
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (flag) break;
    }
    return arr
}
console.log(Bubbling(arr));