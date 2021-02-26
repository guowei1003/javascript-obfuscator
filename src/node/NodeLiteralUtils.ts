import * as ESTree from 'estree';

import { NodeGuards } from './NodeGuards';

export class NodeLiteralUtils {

    /**
     * @param {Node} node
     * @returns {boolean}
     */
    public static isBinaryExpressionRequireNode (node: ESTree.BinaryExpression): boolean | null {
        return NodeGuards.isUnaryExpressionNode(node.left) && NodeGuards.isLiteralNode(node.right) &&
          'operator' in node.left && node.left.operator === 'typeof' &&
          NodeGuards.isIdentifierNode(node.left.argument) &&
          node.left.argument.name === 'require' &&
          node.right.value === 'function';
    }

    /**
     * @param {Literal} literalNode
     * @returns {literalNode is (SimpleLiteral & {value: string})}
     */
    public static isStringLiteralNode (literalNode: ESTree.Literal): literalNode is ESTree.Literal & {value: string} {
        return typeof literalNode.value === 'string';
    }

    /**
     * @param {Literal} literalNode
     * @param {Node} parentNode
     * @returns {boolean}
     */
    public static isProhibitedLiteralNode (literalNode: ESTree.Literal, parentNode: ESTree.Node): boolean {
        if (NodeGuards.isPropertyNode(parentNode) && !parentNode.computed && parentNode.key === literalNode) {
            return true;
        }

        if (NodeGuards.isImportDeclarationNode(parentNode)) {
            return true;
        }

        if (NodeGuards.isExportAllDeclarationNode(parentNode) || NodeGuards.isExportNamedDeclarationNode(parentNode)) {
            return true;
        }

        return false;
    }
}
