import { Element, render } from './element'
let allPatches;
let index = 0; // 默认哪个需要打补丁
function patch(node, patches) {
    // 给元素打补丁
    allPatches = patches
    

    walk(node)
}

function walk(node) {
    let currentPatch = allPatches[index++]
    let childNodes = node.childNodes
    childNodes.forEach(child => walk(child))
    if (currentPatch) {
        doPatch(node, currentPatch)
    }
}

function doPatch(node, patches) {
    patches.forEach((path) => {
        switch (path.type) {
            case 'ATTRS':
                for (let key in path.attrs) {
                    let value = path.attrs[key]
                    if (value) {
                        setAttr(node, key, value)
                    }
                }
                break
            case 'TEXT':
                node.textContent = path.text
                break
            case 'REPLACE': 
                let newNode = (path.newNode instanceof Element) ? render(path.newNode) : document.createTextNode(path.newNode)
                node.parentNode.replaceChild(newNode, node)
                break
            case 'REMOVE':
                node.parentNode.removeChild(newNode, node)
                break
            default:
                break
        }
    })
}

function setAttr(node, key, value) {
    switch (key) {
        case 'value': // node 是input或者textarea
            if (node.tagName.toUpperCase() === 'INPUT' || node.tagName.toUpperCase() === 'TEXTAREA') {
                node.value = value
            } else {
                node.setAttribute(key, value)
            }
        break
        case 'style':
            node.style.cssText = value  // 将节点样式设置为value值
        break
        default:
            node.setAttribute(key, value)
            break
    }
}

export default patch