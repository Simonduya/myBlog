import TNode from "../types/TNode";
import { btPrint } from "hy-algokit";
class TreeNode<T> extends TNode<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
}

class BSTree<T> {
  private root: TreeNode<T> | null = null;
  print() {
    btPrint(this.root);
  }
  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preTraverse() {
    this.preTraverseNode(this.root);
  }
  private preTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value);
      this.preTraverseNode(node.left);
      this.preTraverseNode(node.right);
    }
  }
  inTraverse() {
    this.inTraverseNode(this.root);
  }
  private inTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inTraverseNode(node.left);
      console.log(node.value);
      this.inTraverseNode(node.right);
    }
  }
  postTraverse() {
    this.postTraverseNode(this.root);
  }
  private postTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postTraverseNode(node.left);
      this.postTraverseNode(node.right);
      console.log(node.value);
    }
  }
  levelTraverse() {
    this.levelTraverseNode(this.root);
  }
  private levelTraverseNode(node: TreeNode<T> | null) {
    if (!node) {
      return;
    }
    const queue: TreeNode<T>[] = [];
    queue.push(node);
    while (queue.length) {
      const current = queue.shift()!;
      console.log(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}
const bst = new BSTree<number>();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
bst.print();
console.log("前序遍历");

bst.preTraverse();
console.log("中序遍历");
bst.inTraverse();
console.log("后序遍历");
bst.postTraverse();
console.log("层序遍历");
bst.levelTraverse();
export {};
