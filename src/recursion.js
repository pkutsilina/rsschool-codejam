module.exports = function recursion(tree) {
    let queue = [];
    let resultArr = [];
    function breadth(elementWrapper) {

        let level = elementWrapper.nodeLevel;
        let element = elementWrapper.node;
        if (!resultArr[level]) {
            resultArr[level] = [];
        }

        resultArr[level].push(element.value);

        if (element.left) {
            queue.push({'node': element.left, 'nodeLevel': level + 1});
        }
        if (element.right) {
            queue.push({'node': element.right, 'nodeLevel': level + 1});
        }
        if (queue.length !== 0) {
            breadth(queue.shift());
        }
        return;
    }
    breadth({'node': tree, 'nodeLevel': 0});
    return resultArr;
};