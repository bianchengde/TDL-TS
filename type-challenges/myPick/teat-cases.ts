type MyPick<T, K> = any;

// js
// 对比学习法
function myPick(todo, keys) {
    const obj = {}

    keys.forEach(key => {
        if (key in todo) {
            obj[key] = todo[key];
        }
    });
    return obj;
}

