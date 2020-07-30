{"title":"定制弹窗布局","meta":{"title":"定制弹窗布局","description":"\n<p>通过 <code>MenuProps</code> 自定义 <code>Select</code> 弹窗的头部和底部（注意 <code>MenuProps.header</code> 不能与 <code>hasSelectAll</code> 同时出现, <code>MenuProps.header</code> 优先级更高）</p>\n","order":"7"},"codes":{"jsx":"import { Select, Divider, Icon, Button, Input } from '@alifd/next';\n\nconst Option = Select.Option;\n\nconst dataSource = [\n    {value: '10001', label: 'Lucy King'},\n    {value: 10002, label: 'Lily King'},\n    {value: 10003, label: 'Tom Cat', disabled: true},\n];\n\nconst generateData = (base, total) => {\n    const arr = [];\n    for(let i = 0; i< total; i++) {\n        arr.push(`extra-${base + i}`);\n    }\n    return arr;\n};\n\nclass App extends React.Component {\n    state = {\n        dataSource,\n    };\n    loadMore = () => {\n        const ds = this.state.dataSource;\n        this.setState({\n            dataSource: [ ...ds, ...generateData(ds.length, 5)]\n        });\n    }\n    \n    render() {\n        const menuProps = {\n            focusable: false,\n            header: <div style={{padding: '0 4px', textAlign:'center'}}>\n                <div style={{paddingBottom: 4}}>\n                    <Input style={{width: '100%'}} \n                    ref={ref => this.inputRef = ref}\n                        onClick={e => console.log(/onclick/)} \n                        onMouseDown={e => {console.log(/onMouseDown/); this.inputRef.focus();}} \n                        />\n                </div>\n                <Divider style={{marginTop:0, marginBottom: 4}}/>\n            </div>,\n            footer: <div style={{padding: '0 4px', textAlign:'center'}}>\n                <Divider style={{marginBottom:0, marginTop: 4}}/>\n                <Button text type=\"primary\" onClick={this.loadMore}>Load More...</Button>\n            </div>\n        };\n        return (<Select hasSelectAll mode=\"multiple\"  dataSource={this.state.dataSource} style={{width: 200}}\n            menuProps={menuProps} \n            popupAutoFocus\n         / >);\n    }\n};\n\nReactDOM.render(<App />, mountNode);\n"},"body":"\n\n````jsx\nimport { Select, Divider, Icon, Button, Input } from '@alifd/next';\n\nconst Option = Select.Option;\n\nconst dataSource = [\n    {value: '10001', label: 'Lucy King'},\n    {value: 10002, label: 'Lily King'},\n    {value: 10003, label: 'Tom Cat', disabled: true},\n];\n\nconst generateData = (base, total) => {\n    const arr = [];\n    for(let i = 0; i< total; i++) {\n        arr.push(`extra-${base + i}`);\n    }\n    return arr;\n};\n\nclass App extends React.Component {\n    state = {\n        dataSource,\n    };\n    loadMore = () => {\n        const ds = this.state.dataSource;\n        this.setState({\n            dataSource: [ ...ds, ...generateData(ds.length, 5)]\n        });\n    }\n    \n    render() {\n        const menuProps = {\n            focusable: false,\n            header: <div style={{padding: '0 4px', textAlign:'center'}}>\n                <div style={{paddingBottom: 4}}>\n                    <Input style={{width: '100%'}} \n                    ref={ref => this.inputRef = ref}\n                        onClick={e => console.log(/onclick/)} \n                        onMouseDown={e => {console.log(/onMouseDown/); this.inputRef.focus();}} \n                        />\n                </div>\n                <Divider style={{marginTop:0, marginBottom: 4}}/>\n            </div>,\n            footer: <div style={{padding: '0 4px', textAlign:'center'}}>\n                <Divider style={{marginBottom:0, marginTop: 4}}/>\n                <Button text type=\"primary\" onClick={this.loadMore}>Load More...</Button>\n            </div>\n        };\n        return (<Select hasSelectAll mode=\"multiple\"  dataSource={this.state.dataSource} style={{width: 200}}\n            menuProps={menuProps} \n            popupAutoFocus\n         / >);\n    }\n};\n\nReactDOM.render(<App />, mountNode);\n````","html":"<script>(function(){'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _next = require('@alifd/next');\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Option = _next.Select.Option;\n\nvar dataSource = [{ value: '10001', label: 'Lucy King' }, { value: 10002, label: 'Lily King' }, { value: 10003, label: 'Tom Cat', disabled: true }];\n\nvar generateData = function generateData(base, total) {\n    var arr = [];\n    for (var i = 0; i < total; i++) {\n        arr.push('extra-' + (base + i));\n    }\n    return arr;\n};\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, App);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            dataSource: dataSource\n        }, _this.loadMore = function () {\n            var ds = _this.state.dataSource;\n            _this.setState({\n                dataSource: [].concat(_toConsumableArray(ds), _toConsumableArray(generateData(ds.length, 5)))\n            });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(App, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var menuProps = {\n                focusable: false,\n                header: React.createElement(\n                    'div',\n                    { style: { padding: '0 4px', textAlign: 'center' } },\n                    React.createElement(\n                        'div',\n                        { style: { paddingBottom: 4 } },\n                        React.createElement(_next.Input, { style: { width: '100%' },\n                            ref: function ref(_ref2) {\n                                return _this2.inputRef = _ref2;\n                            },\n                            onClick: function onClick(e) {\n                                return console.log(/onclick/);\n                            },\n                            onMouseDown: function onMouseDown(e) {\n                                console.log(/onMouseDown/);_this2.inputRef.focus();\n                            }\n                        })\n                    ),\n                    React.createElement(_next.Divider, { style: { marginTop: 0, marginBottom: 4 } })\n                ),\n                footer: React.createElement(\n                    'div',\n                    { style: { padding: '0 4px', textAlign: 'center' } },\n                    React.createElement(_next.Divider, { style: { marginBottom: 0, marginTop: 4 } }),\n                    React.createElement(\n                        _next.Button,\n                        { text: true, type: 'primary', onClick: this.loadMore },\n                        'Load More...'\n                    )\n                )\n            };\n            return React.createElement(_next.Select, { hasSelectAll: true, mode: 'multiple', dataSource: this.state.dataSource, style: { width: 200 },\n                menuProps: menuProps,\n                popupAutoFocus: true\n            });\n        }\n    }]);\n\n    return App;\n}(React.Component);\n\n;\n\nReactDOM.render(React.createElement(App, null), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Select<span class=\"token punctuation\">,</span> Divider<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>value<span class=\"token operator\">:</span> <span class=\"token string\">'10001'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'Lucy King'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>value<span class=\"token operator\">:</span> <span class=\"token number\">10002</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'Lily King'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>value<span class=\"token operator\">:</span> <span class=\"token number\">10003</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'Tom Cat'</span><span class=\"token punctuation\">,</span> disabled<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">generateData</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">base<span class=\"token punctuation\">,</span> total</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> arr <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">&lt;</span> total<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        arr<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">extra-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>base <span class=\"token operator\">+</span> i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> arr<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n    state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        dataSource<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function-variable function\">loadMore</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> ds <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            dataSource<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span> <span class=\"token operator\">...</span>ds<span class=\"token punctuation\">,</span> <span class=\"token operator\">...</span><span class=\"token function\">generateData</span><span class=\"token punctuation\">(</span>ds<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">,</span> <span class=\"token number\">5</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> menuProps <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n            focusable<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n            header<span class=\"token operator\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>padding<span class=\"token operator\">:</span> <span class=\"token string\">'0 4px'</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token operator\">:</span><span class=\"token string\">'center'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>paddingBottom<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> \n                    <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">ref</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>inputRef <span class=\"token operator\">=</span> ref<span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token regex\">/onclick/</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> \n                        <span class=\"token attr-name\">onMouseDown</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token regex\">/onMouseDown/</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>inputRef<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> \n                        <span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Divider</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>marginTop<span class=\"token operator\">:</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n            footer<span class=\"token operator\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>padding<span class=\"token operator\">:</span> <span class=\"token string\">'0 4px'</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token operator\">:</span><span class=\"token string\">'center'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Divider</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>marginBottom<span class=\"token operator\">:</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> marginTop<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">/></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">text</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadMore<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Load More...</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Select hasSelectAll mode<span class=\"token operator\">=</span><span class=\"token string\">\"multiple\"</span>  dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">}</span> style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>width<span class=\"token operator\">:</span> <span class=\"token number\">200</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n            menuProps<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>menuProps<span class=\"token punctuation\">}</span> \n            popupAutoFocus\n         <span class=\"token operator\">/</span> <span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div>"}