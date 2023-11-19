document.addEventListener('DOMContentLoaded', function () {
    let currentNode = document.body;

    function showNodeContentRecursively(node, depth = 0) {
        const content = node.textContent.split('\n').filter(line => line.trim() !== '').join('\n');
        const tagName = node.tagName ? node.tagName.toLowerCase() : 'Text Node';

        console.log(`Node Tag: \n " ${tagName}"\nNode Content: \n"${content}"`);

        if (node.hasChildNodes()) {
            const answer = confirm(`Node Tag:"${tagName}"\nNode Content: \n"${content}"`);
            if (answer) {
                for (let childNode of node.childNodes) {
                    if (childNode.nodeType === 1) {
                        showNodeContentRecursively(childNode, depth + 1);
                        const answer = confirm(`Node Tag: \n"${tagName}"\nNode Content: \n"${content}"\nДалі 'OK' назад 'Cancel'?`);
                    }
                }
            } else {
                showNodeContentRecursively(node.parentElement, depth);
                const answer = confirm(`Node Tag: \n"${tagName}"\nNode Content: \n"${content}"`);
            }
        } else {
            const answer = confirm(`Node Tag: \n"${tagName}"\nNode Content: \n"${content}"\nЦе останній підвузол! Повернутися до минулого вузла 'OK' або пройти до іншого вузла 'Cancel'?`);
            if (answer) {
                showNodeContentRecursively(node.parentElement, depth);
            } else {
                return;
            }
        }
    }

    showNodeContentRecursively(currentNode);
});
