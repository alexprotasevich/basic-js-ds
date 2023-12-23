const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.node) {
      this.node = newNode;
      return this.node;
    }

    this.addNode(this.node, newNode);
  }

  has(data) {
    if (!this.node) {
      return false;
    }

    return !!this.findNode(this.node, data);
  }

  findNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    }

    if (data > node.data) {
      return this.findNode(node.right, data);
    }

    return node;
  }

  find(data) {
    if (!this.node) {
      return null;
    }

    return this.findNode(this.node, data);
  }

  remove(data) {
    if (!this.node) {
      return null;
    }

    return this.removeNode(this.node, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left && !node.right) {
      node = null;
      return node;
    }

    if (!node.left) {
      node = node.right;
      return node;
    }

    if (!node.right) {
      node = node.left;
      return node;
    }

    const minNode = this.getMinNode(node.right);
    node.data = minNode.data;

    node.right = this.removeNode(node.right, minNode.data);
    return node;
  }

  min() {
    if (!this.node) {
      return null;
    }

    return this.getMinNode(this.node).data;
  }

  getMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.getMinNode(node.left);
  }

  getMaxNode(node) {
    if (!node.right) {
      return node;
    }
    return this.getMaxNode(node.right);
  }

  max() {
    if (!this.node) {
      return null;
    }

    return this.getMaxNode(this.node).data;
  }

  addNode(node, nodeToAdd) {
    if (nodeToAdd.data < node.data) {
      if (!node.left) {
        node.left = nodeToAdd;
      } else {
        this.addNode(node.left, nodeToAdd);
      }
    } else {
      if (!node.right) {
        node.right = nodeToAdd;
      } else {
        this.addNode(node.right, nodeToAdd);
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
