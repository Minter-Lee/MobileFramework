/**
 * ESLint配置文件，定义基本开发规范
 * @author MinterLee@hotmail.com
 * @description 继承ESLint常规方案，详情请参看 http://eslint.cn/docs/rules/，
 * 追加了一些，增加代码可读性，解耦，拆分的规则
 */
module.exports = {
    "extends": ['plugin:react/recommended'],
    "env": {
        "browser": "error",
        "commonjs": "error",
        "es6": "error"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "rules": {
        // 强制使用一致的缩进
        "indent": [ "error", "tab" ],
        // Mac使用unix, Windows使用windows
        "linebreak-style": [ "error", "unix" ],
        // 单引号
        "quotes": [ "error", "single", { "avoidEscape": true } ],
        // 生产环境禁用Debugger
        'no-debugger': process.env.NODE_ENV === 'production' ? "error" : 0,
        // 要求 switch 语句中有 default 分支
        "default-case": "error",
        // 强制模式 保留字、关键字不可用
        "strict": "error",
        // 禁止将 undefined 作为标识符
        "no-undefined": "error",
        // 禁用不必要的标签
        "no-extra-label": "error",
        // 强制单行最大长度
        "max-len": ["error", { "code": 150 }],
        // 强制块语句的最大可嵌套深度
        "max-depth": ["error", { "max": 5 }],
        // 禁止在代码后使用内联注释
        "no-inline-comments": "error",
        // 禁止混合使用不同的操作符
        "no-mixed-operators": "error",
        // 禁止出现多行空行
        "no-multiple-empty-lines": "error",
        // 禁用行尾空格
        "no-trailing-spaces": "error",
        // 禁止连续赋值
        "no-multi-assign": "error",
        // 不允许多个空行
        "no-multiple-empty-lines": "error",
        // 禁止使用嵌套的三元表达式
        "no-nested-ternary": "error",
        // 禁止属性前有空白
        "no-whitespace-before-property": "error",
        // 强制在花括号中使用一致的空格
        "object-curly-spacing": ["error", "never", {"arraysInObjects": false}],
        // 禁止重复导入
        "no-duplicate-imports": "error",
        // 强制分号在行尾
        "semi-style": ["error", "last"],
        // 强制使用恒等, smart 模式
        "eqeqeq": ["error", "smart"],
        // 禁止在常规字符串中出现模板字面量占位符语法
        "no-template-curly-in-string": "error",
        // 必须加入JSDoc的方法定义
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": false,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false,
                "FunctionExpression": false
            }
        }],
        "react/react-in-jsx-scope": 0,
        "indent": ["off", "tab"]
    }
}