/**
 * MinStack
 */
function MinStack() {
    this.dataStack = [];
    this.minStack = [];
}
MinStack.prototype.push = function (data) {
    let dataLen = this.dataStack.length;
    let minLen = this.minStack.length;
    if (minLen === 0) {
        this.minStack.push(data);
    } else {
        let minTop = this.minStack[minLen - 1];
        if (data <= minTop) {
            this.minStack.push(data);
        }
    }
    this.dataStack.push(data);
}

MinStack.prototype.pop = function () {
    let dataLen = this.dataStack.length;
    let minLen = this.minStack.length;
    let result;
    if (dataLen === 0) {
        throw Error("dataStack为空");
    } else {
        let minTop = this.minStack[minLen - 1];
        let dataTop = this.dataStack[dataLen - 1];
        if (minTop && dataTop <= minTop) {
            this.minStack.pop();
        }
        result = this.dataStack.pop();
    }
    return result;
}
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
}


function testMinStack() {
    let stack = new MinStack();
    let arr = [9, 34, 56, 7, 23, 89, 56, 3, 12, 7];
    for (let data of arr) {
        stack.push(data);
    }

    let len = stack.dataStack.length;
    for (let i = 0; i < len; i++) {

        stack.pop();
    }
}
//testMinStack();
/**
 * TwoSum
 */

function twoSum(number, target) {
    let result = [];
    for (var i = 0; i < number.length; i++) {
        let a = number[i];
        for (var j = i + 1; j < number.length; j++) {
            let b = number[j];
            if (target === a + b) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
    }
    return result;
}
//var isPalindrome =
function isPalindrome(x) {
    function func(x) {
        let strX = (x).toString();
        let len = strX.length;
        if (len === 0) {
            return true;
        }
        if (strX.charAt(0) === strX.charAt(len - 1)) {
            if (strX.length > 3) {
                return func(strX.substring(1, len - 1));
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
    return func(x);
};

// console.log(isPalindrome(12345));
// console.log(isPalindrome(123454321));
// console.log(isPalindrome(1234554321));
// console.log(isPalindrome(1));
// console.log(isPalindrome(""));
// console.log(isPalindrome("sfsagaf"));


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let trans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    if (s.length === 0) return 0;
    let arrS = s.split('');
    let len = arrS.length;
    console.log(arrS);
    let sum = 0;
    if (len === 1) {
        return trans[s];
    }
    for (let i = 0; i < len; i++) {
        let a = trans[arrS[i]];
        let b = trans[arrS[i + 1]];
        if (b) {
            if (a >= b) {
                sum += a;
            } else {
                sum -= a;
            }
        } else { //说明是最低的一位了
            sum += a;
        }
    }
    return sum;
};

// console.log(romanToInt("I"));//1
// console.log(romanToInt("IV"));//4
// console.log(romanToInt("CXCII"));//192
// console.log(romanToInt("DCLIII"));//653
// console.log(romanToInt("DCCCLXII"));//862
// console.log(romanToInt("MMMMDCCCLXXXI"));//4881

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    function splitNum(num, zhishu) {
        var trans = {
            "1": "I",
            "5": "V",
            "10": "X",
            "50": "L",
            "100": "C",
            "500": "D",
            "1000": "M"
        };
        var str = "";
        var i = 0;
        var jishu = Math.pow(10, zhishu);
        var jishuStr = (jishu).toString();
        if (0 < num && num < 4) {
            for (i = 0; i < num; i++) {
                str += trans[jishuStr];
            }
        } else if (num === 4) {
            if (jishu === 1000) {
                str = "MMMM";
            } else {
                str = trans[jishuStr] + trans[(5 * jishu).toString()];
            }

        } else if (num === 5) {
            str = trans[(5 * jishu).toString()];
        } else if (num > 5 && num < 9) {
            var str2 = "";
            for (i = 0; i < num - 5; i++) {
                str2 += trans[jishuStr];
            }
            str = trans[(5 * jishu).toString()] + str2;
        } else if (num === 9) {
            str = trans[jishuStr] + trans[(10 * jishu).toString()];
        } else if (num === 10) {
            str = trans[(10 * jishu).toString()];
        }
        return str;
    }
    var nums = [];
    nums = (num).toString().split('').map((value, key) => {
        return parseInt(value);
    });
    var str2 = "";
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        str2 += splitNum(nums[i], len - i - 1);
    }
    return str2;
};

// console.log(intToRoman(1));//("I"));//1
// console.log(intToRoman(4));//("IV"));//4
// console.log(intToRoman(192));//("CXCII"));//192
// console.log(intToRoman(653));//("DCLIII"));//653
// console.log(intToRoman(862));//("DCCCLXII"));//862
// console.log(intToRoman(3881));//("MMMDCCCLXXXI"));//4881
// console.log(intToRoman(4881));//("MMMMDCCCLXXXI"));//4881


function longestCommonPrefix(strs) {
    var result = "";
    if (strs.length === 0) {
        return result;
    }
    result = strs.reduce(function (common, value) {
        let len = Math.min(common.length, value.length);
        var str = "";
        for (var i = 0; i < len; i++) {

            if (common.charAt(i) === value.charAt(i)) {
                str += common.charAt(i);
            } else {
                break;
            }
        }
        return str;
    }, strs[0]);
    return result;
};
//  console.log(longestCommonPrefix(["abc","abcd","ab"]));//("I"));//1
//  console.log(longestCommonPrefix(["aca","cba"]));//("IV"));//4
// console.log(longestCommonPrefix(["leet","letcode","le","let"]));//("CXCII"));//192


function threeSum(nums) {
    var result = [];
    var resultObj = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            for (var k = j + 1; k < len; k++) {
                let tmp = nums[i] + nums[j] + nums[k];
                if (tmp === tmp && tmp === 0) {
                    let tmpArr = [nums[i], nums[j], nums[k]].sort(function (a, b) {
                        return a > b;
                    });;
                    let str = tmpArr.join("");
                    if (resultObj[str] === undefined) {
                        resultObj[str] = 1;
                        result.push(tmpArr);
                    }
                }
            }
        }

    }
    return result;
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


function longestCommonPrefix(strs) {
    var result = "";
    if (strs.length === 0) {
        return result;
    }
    result = strs.reduce(function (common, value) {
        let len = Math.min(common.length, value.length);
        var str = "";
        for (var i = 0; i < len; i++) {

            if (common.charAt(i) === value.charAt(i)) {
                str += common.charAt(i);
            } else {
                break;
            }
        }
        return str;
    }, strs[0]);
    return result;
};
//  console.log(longestCommonPrefix(["abc","abcd","ab"]));//("I"));//1
//  console.log(longestCommonPrefix(["aca","cba"]));//("IV"));//4
// console.log(longestCommonPrefix(["leet","letcode","le","let"]));//("CXCII"));//192


function threeSum2(nums) {
    function quickSort(nums, left, right) {
        let i = 0;
        j = 0, t = 0, temp = 0;
        if (left > right) {
            return;
        }
        temp = nums[left]; //基准点
        i = left;
        j = right;
        while (i < j) {
            while (i < j && nums[j] >= temp) {
                j--;
            }

            while (nums[i] <= temp && i < j) {
                i++;
            }
            if (i < j) {
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }

        nums[left] = nums[i];
        nums[i] = temp;
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }
    var result = [];
    var resultObj = {};
    var len = nums.length;
    if (len < 3) {
        return result;
    }
    quickSort(nums, 0, len - 1);
    for (var i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break;
        }
        for (var j = i + 1; j < len; j++) {
            if (nums[j] > -nums[i]) {
                break;
            }
            for (var k = j + 1; k < len; k++) {
                let tmp = nums[i] + nums[j] + nums[k];
                if (tmp === tmp && tmp === 0) {
                    let tmpArr = [nums[i], nums[j], nums[k]];
                    let str = tmpArr.join("");
                    if (resultObj[str] === undefined) {
                        resultObj[str] = 1;
                        result.push(tmpArr);
                    }
                }
            }
        }

    }
    return result;
};


function threeSum3(nums) {
    function quickSort(nums, left, right) {
        let i = 0;
        j = 0, t = 0, temp = 0;
        if (left > right) {
            return;
        }
        temp = nums[left]; //基准点
        i = left;
        j = right;
        while (i < j) {
            while (i < j && nums[j] >= temp) {
                j--;
            }

            while (nums[i] <= temp && i < j) {
                i++;
            }
            if (i < j) {
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }

        nums[left] = nums[i];
        nums[i] = temp;
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }

    function twoSum(nums, left, right, target) {
        let sumArr = [];
        if (!nums || nums.length < 2) {
            return sumArr;
        }
        while (left < right) {
            if ((nums[left] + nums[right]) === target) {
                let tmp = [nums[left], nums[right]];
                sumArr.push(tmp);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else {
                left++;
            }
        }
        return sumArr;
    }
    var result = [];
    var resultObj = {};
    var len = nums.length;
    if (len < 3) {
        return result;
    }
    quickSort(nums, 0, len - 1);
    for (var i = 0; i < len; i++) {
        if (nums[i] > 0) {
            break;
        }
        let temp = twoSum(nums, i + 1, nums.length - 1, -nums[i]);

        for (let a of temp) {
            a.unshift(nums[i]);
            let str = a.join("");
            if (resultObj[str] === undefined) {
                resultObj[str] = true;
                result.push(a);
            }
        }
    }
    return result;
}


//[ [ -4, -2, 6 ],
//   [ -4, 0, 4 ],
//   [ -4, 1, 3 ],
//   [ -4, 2, 2 ],
//   [ -2, -2, 4 ],
//   [ -2, 0, 2 ] ]
// [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
// console.log(threeSum3([4,-2,2,-2,0,1,2,-2,2,3,3,4,-4,6,6]));
// console.log(threeSum3([-1,0,1,2,-1,-4]));



function letterCombinations(digits) {
    function f(arr1, arr2) {
        let result = [];
        for (let a of arr1) {
            for (let b of arr2) {
                result.push(a + b);
            }
        }
        return result;
    }

    function handle(letters) {
        let len = letters.length;
        if (len < 2) {
            return letters;
        }
        let result = [];
        for (let i = 0; i < Math.floor(len / 2); i++) {
            let tmp = f(letters[2 * i], letters[2 * i + 1]);
            result.push(tmp);
        }
        if (len % 2 === 1) {
            result.push(letters[len - 1]);
        }
        return result;
    }

    let constObj = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };
    let result = [];
    if (digits.length === 0) {
        return result;
    }
    let str = digits.split("");
    for (let digit of digits) {
        if (constObj[digit]) {
            let t = constObj[digit].split("");
            result.push(t);
        }
    }
    while (result.length > 1) {
        result = handle(result);
    }
    return result[0];
};

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// console.log(letterCombinations("23"));
// console.log(letterCombinations("234"));
// console.log(letterCombinations("234556789"));

function isValid(s) {
    const strMap = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let temp = [];
    let result = false;
    let strArr = s.split("");
    for (let str of strArr) {
        let len = temp.length;
        if (len === 0) {
            temp.push(str);
        } else {
            if (strMap[temp[len - 1]] == str) {
                temp.pop();
            } else {
                temp.push(str);
            }
        }
    }
    if (temp.length === 0) {
        return true;
    }
    return false;
};

//  console.log(isValid("("));//false
//  console.log(isValid("([])"));//true
//  console.log(isValid("([)]"));//false
//  console.log(isValid(""));//true
//  console.log(isValid("({[({}(){})]})"));//true
//  console.log(isValid("({[({}([]){]})]})"));//false


/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    let result = [];
    let obj = {};

    function compute(arr) {
        let result = [];
        let obj = {};
        for (let str of arr) {
            let len = str.length;
            let tempArr = str.split("");
            for (let i = 0; i <= Math.floor(len / 2); i++) {
                let tmpS = "";
                for (let j = 0; j < len; j++) {
                    if (j === i) {
                        tmpS += '()' + tempArr[j];
                    } else {
                        tmpS += tempArr[j];
                    }
                }
                if (!obj[tmpS]) {
                    obj[tmpS] = true;
                    result.push(tmpS);
                }
            }
        }
        return result;
    }
    if (n <= 0) {
        return result;
    }
    if (n === 1) {
        return ["()"];
    }
    result = ["()"];
    for (let i = 1; i < n; i++) {
        result = compute(result);
    }
    return result;

};

/****************************************  倒置链表
    public ListNode swapPairs(ListNode head) {
    	if(head == null)  
    	    return null;  
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = head;
        ListNode second = head;
        ListNode middle = head;
        int len = 1;
        while(first.next!= null){
            len++;
            first = first.next;
        }
        first = head;
        int step = 0;
        System.out.println(" len "+len);
        if(len % 2 ==0){
        	step = len/2;
        	for(int i=0;i< step;i++){
                second = second.next; 
             }
        }else{
        	step = (len-1)/2;
        	for(int i=0;i<= step;i++){
                second = second.next;     
             }
        }
        middle = second;
        for(int j = 0;j< step;j++){
        	for(int k=1;k<step-j;k++){
            	second = second.next;
            }
            int val = second.val;
            second.val= first.val;
            first.val = val;
            second = middle;
        }
		return dummy.next;
    }

*********************************************************/


function removeDuplicates(nums) {
    let result = [];
    let obj = {};
    for (let num of nums) {
        console.log(num);
        console.log(obj[num]);
        if (obj[num] === undefined) {
            obj[num] = true;
            console.log(result, num);
            result.push(num);
        }
    }
    return result;
};


var findSubstring = function (s, words) {

    function permute(arr) {
        let result = [];
        let strs = [];
        let list = [];
        if (arr.length === 0) {
            return result;
        };

        //复制数组
        for (let temp of arr) {
            strs.push(temp);
        };

        function permuteStr(strList, list) {
            let len = strList.length;
            if (len == 0) {
                result.push(list);
                return;
            }
            for (let i = 0; i < len; i++) {
                let varArr = [].concat(list);
                varArr.push(strList[i]);
                //构造未排序序列，将刚加入的数字从序列中去掉
                let tmpArr = [].concat(strList);
                let tmplen = tmpArr.length;
                for (let j = 0; j < tmplen; j++) {
                    if (tmpArr[j] === strList[i]) {
                        tmpArr.splice(j, 1);
                        break;
                    }
                }
                //递归排序新的已排序结合和未排序集合
                permuteStr(tmpArr, varArr);
            }
            return;


        }
        permuteStr(strs, list);
        return result;
    }

    let result = [];
    if (!s || !words || words.length <= 0) {
        return result;
    }
    let obj = {};
    let list = [];
    let tempArr = permute(words);
    for (let temp of tempArr) {
        let str = temp.join("");
        if (obj[str] === undefined) {
            obj[str] = true;
            list.push(str);
        }
    }
    for (let tp of list) {
        let idx;
        do {
            idx = s.indexOf(tp, idx + 1);
            if (idx > -1) {
                result.push(idx);
            } else {
                break;
            }
        } while (true);

    }
    return result;
};

// console.log(findSubstring("foobarfoobar",["foo","bar"]));//[0,3,6]
// console.log(findSubstring("barfoofoobarthefoobarman",["bar","foo","the"]));//[6,9,12]
// console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","good"]));//[8]




// console.log(permute([1, 2, 3, 4]));
// console.log(findSubstring("barfoothefoocoobarman",["foo","bar","coo"]));
// console.log(findSubstring("barfoothefoocoobarman",["foo","bar","coo"]));


var nextPermutation = function (nums) {

    function quickSort(nums, left, right) {
        let i = 0;
        j = 0, t = 0, temp = 0;
        if (left > right) {
            return;
        }
        temp = nums[left]; //基准点
        i = left;
        j = right;
        while (i < j) {
            while (i < j && nums[j] >= temp) {
                j--;
            }

            while (nums[i] <= temp && i < j) {
                i++;
            }
            if (i < j) {
                t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }

        nums[left] = nums[i];
        nums[i] = temp;
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }

    function next(nums, left, right) {
        let len = right - left + 1;
        if(len ==0 || len ==1){
            return ;
        }
        if(len ==2){
            let tp = nums[left];
            nums[left] = nums[right];
            nums[right] = tp;
            return;
        }

        let pior = nums[left];
        let k = left+1;
        let min = nums[k];//找出大于锚点的最小数字
        let idx = k;
        for (; k <= right; k++) {
            console.log("min : ",min," k :  " ,k," nums[k] : ",nums[k]);
            if (nums[k] > pior && nums[k] < min) {
                min = nums[k];
                idx = k;
            }
        }
        let tmp = nums[idx];
        nums[idx] = nums[left];
        nums[left] = tmp;
        quickSort(nums, left+1, right);
        return;
    }
    let len = nums.length;
    let i=0;
    let flag = true;
    for(i=len-1;i>0;i--){
        if(nums[i] > nums[i-1]){
            flag = false;
            break;
        }
    }
    if(flag) {
        quickSort(nums, 0, len - 1);
    }else{
        
        let left = i-1 >=0 ? i-1:0;
        
        next(nums,left,len-1);
    }
};

var nums1 = [1, 2, 3];
var nums2 = [3, 2, 1];
var nums3 = [1, 1, 5];
var nums4 = [1, 2, 3, 6, 7, 3, 8, 2, 9, 2, 0];//89022
var nums5 = [0, 1, 2, 3, 6, 7, 9, 8,6];//8679
var nums6 = [0, 1, 5, 2, 7, 3];//327

/*nextPermutation(nums1); // 1,2,3 → 1,3,2
nextPermutation(nums2); // 3,2,1 → 1,2,3
nextPermutation(nums3); // 1,1,5 → 1,5,1
nextPermutation(nums4);
nextPermutation(nums5);
nextPermutation(nums6);*/
/*console.log(nums1); // 1,2,3 → 1,3,2
console.log(nums2); // 3,2,1 → 1,2,3
console.log(nums3); // 1,1,5 → 1,5,1
console.log(nums4);
console.log(nums5);
console.log(nums6);*/



/*var Person = (function(){
    var privateData = {},privateId = 0;
    function Person (name) {
        Object.defineProperty(this, '_id', {value: privateId++})
        privateData[this._id] = {
            name: name
        }
    }
    Person.prototype.getName = function(){
      return privateData[this._id].name
    }
    return Person;
})();*/

// var Person2 = (function(){
//     let privateData= new WeakMap();
//     function Person(name) {
//         privateData.set(this,{name:name})
//     }
//     Person.prototype.getName = function() {
//         return privateData.get(this).name;
//     }
//     return Person;
// })();
// var p1 = new Person2("arvin");
// console.log(p1);
// console.log(p1.getName());

function *createIterator1(){
    yield 1;
    return ;
}
function *createIterator2(){
    yield 2;
    return undefined;
}
function *createIterator3(){
    yield 3;
    return NaN;
}
function *createIterator4(){
    yield 4;
    return null;
}
function *createIterator5(){
    yield 5;
    return {};
}
function *createIterator6(){
    yield 6;
    return function(){};
}
let iters = [createIterator1(),createIterator2(),
            createIterator3(),createIterator4(),
            createIterator5(),createIterator6()];
/*for(let iter of iters ){
    console.log('---------------------------')
    for(let i =0 ;i<3;i++){
        console.log(i,iter.next())
    }
}*/
function *numberIterator(){
    yield 1;
    yield 2; 
    yield 3;
    yield 4;
}
function *colorIterator(){
    yield 'green';
    yield 'blue'; 
    yield 'red';
}
function *combineIterator(){
    let result =yield *numberIterator()
    yield *colorIterator(result);
}
var iterator = combineIterator()
let i =0;
/*while(i<10){
    i++
    console.log(iterator.next().value)
}*/
function run(teaskDef){
    let task = teaskDef();
    let result = task.next();
    function step() {
        if(!result.done){
            console.log(result)
            result = task.next()
            step();
        }
    }
    step();
}
/*run(function*(){
    yield *numberIterator();
    yield colorIterator();
    yield 3;
})*/


// var Person = (function(){
//     var privateData = {},privateId = 0;
//     function Person(name,age,height){
//         Object.defineProperty(this,'_id',{value:privateId++});
//         privateData[this._id] = {
//             name:name,
//             age: age,
//             height: height
//         }
//     }
//     Person.prototype.getName = function() {
//         return privateData[this._id].name
//     }
//     Person.prototype.getAge = function() {
//         return privateData[this._id].age
//     }
//     Person.prototype.getHeight = function() {
//         return privateData[this._id].height
//     }
//     return Person;
// })();

var Person = (function(){
    let privateData = new WeakMap();
    function Person(name,age,height){
        privateData.set(this,{name:name,age:age,height:height});
    }
    Person.prototype.getName = function() {
        return privateData.get(this).name
    }
    Person.prototype.getAge = function() {
         return privateData.get(this).age
    }
    Person.prototype.getHeight = function() {
         return privateData.get(this).height
    }
    return Person;
})();
let person = new Person("tom","18",172);
console.log(person)
console.log(Object.keys(person));

console.log(Object.getOwnPropertyNames(person))
console.log(person.getName(),person.getAge(),person.getHeight());





let personClass = class {
    constructor(name){
        this.name = name
    }
    getName(){
        return this.name;
    }
}

let p2 = new personClass("arvin")
console.log(p2.getName());//arvin
console.log(p2.name );//arvin
p2.name = "tom"
console.log(p2.getName());//arvin
console.log(p2.name );//arvin
// console.log(p2.prototype.name);/**/
console.log(personClass.name);
console.log(personClass.prototype.name);
console.log(p2.getName());
