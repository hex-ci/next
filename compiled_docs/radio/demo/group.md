{"title":"分组","meta":{"title":"分组","description":"\n<p>使用 <code>&lt;Radio.Group&gt;</code> 渲染 <code>&lt;Radio&gt;</code> 分组。</p>\n","order":"1"},"codes":{"jsx":"import { Radio } from '@alifd/next';\n\nconst Shape = {\n    NORMAL: 'normal',\n    BUTTON: 'button'\n};\n\nconst ItemDirection = {\n    HORIZON: 'hoz',\n    VERTICAL: 'ver'\n};\n\nclass RadioGroup extends React.Component {\n    state = {\n        shape: Shape.NORMAL,\n        itemDirection: ItemDirection.HORIZON\n    }\n\n    onShapeChange = (shape) => {\n        this.setState({ shape });\n    }\n\n    onItemDirectionChange = (itemDirection) => {\n        this.setState({ itemDirection });\n    }\n\n    render() {\n        return (\n            <div>\n                <h5>Choose a shape</h5>\n                <div>\n                    <Radio.Group\n                        shape=\"button\"\n                        value={this.state.shape}\n                        onChange={this.onShapeChange}\n                    >\n                        <Radio value={Shape.NORMAL}>Normal</Radio>\n                        <Radio value={Shape.BUTTON}>Button</Radio>\n                    </Radio.Group>\n                </div>\n                <h5>Choose an align-type of the item</h5>\n                <div>\n                    <Radio.Group\n                        shape=\"button\"\n                        value={this.state.itemDirection}\n                        onChange={this.onItemDirectionChange}\n                    >\n                        <Radio value={ItemDirection.HORIZON}>Horizon</Radio>\n                        <Radio\n                            value={ItemDirection.VERTICAL}\n                            disabled={this.state.shape === Shape.BUTTON}\n                        >Vertical</Radio>\n                    </Radio.Group>\n                </div>\n                <div className=\"rendered-container\">\n                    <h3>Rendered Result</h3>\n                    <Radio.Group\n                        shape={this.state.shape}\n                        itemDirection={this.state.itemDirection}\n                    >\n                        <Radio value=\"react\">React</Radio>\n                        <Radio value=\"vue\">Vue</Radio>\n                        <Radio value=\"angular\">Angular</Radio>\n                    </Radio.Group>\n                </div>\n            </div>\n        );\n    }\n}\n\nReactDOM.render(<RadioGroup />, mountNode);\n","css":".rendered-container {\n    margin: 32px 0 0;\n    padding: 0 24px 24px;\n    border: 3px dashed #aaa;\n    border-radius: 11px;\n}\n"},"body":"\n\n````jsx\nimport { Radio } from '@alifd/next';\n\nconst Shape = {\n    NORMAL: 'normal',\n    BUTTON: 'button'\n};\n\nconst ItemDirection = {\n    HORIZON: 'hoz',\n    VERTICAL: 'ver'\n};\n\nclass RadioGroup extends React.Component {\n    state = {\n        shape: Shape.NORMAL,\n        itemDirection: ItemDirection.HORIZON\n    }\n\n    onShapeChange = (shape) => {\n        this.setState({ shape });\n    }\n\n    onItemDirectionChange = (itemDirection) => {\n        this.setState({ itemDirection });\n    }\n\n    render() {\n        return (\n            <div>\n                <h5>Choose a shape</h5>\n                <div>\n                    <Radio.Group\n                        shape=\"button\"\n                        value={this.state.shape}\n                        onChange={this.onShapeChange}\n                    >\n                        <Radio value={Shape.NORMAL}>Normal</Radio>\n                        <Radio value={Shape.BUTTON}>Button</Radio>\n                    </Radio.Group>\n                </div>\n                <h5>Choose an align-type of the item</h5>\n                <div>\n                    <Radio.Group\n                        shape=\"button\"\n                        value={this.state.itemDirection}\n                        onChange={this.onItemDirectionChange}\n                    >\n                        <Radio value={ItemDirection.HORIZON}>Horizon</Radio>\n                        <Radio\n                            value={ItemDirection.VERTICAL}\n                            disabled={this.state.shape === Shape.BUTTON}\n                        >Vertical</Radio>\n                    </Radio.Group>\n                </div>\n                <div className=\"rendered-container\">\n                    <h3>Rendered Result</h3>\n                    <Radio.Group\n                        shape={this.state.shape}\n                        itemDirection={this.state.itemDirection}\n                    >\n                        <Radio value=\"react\">React</Radio>\n                        <Radio value=\"vue\">Vue</Radio>\n                        <Radio value=\"angular\">Angular</Radio>\n                    </Radio.Group>\n                </div>\n            </div>\n        );\n    }\n}\n\nReactDOM.render(<RadioGroup />, mountNode);\n````\n\n````css\n.rendered-container {\n    margin: 32px 0 0;\n    padding: 0 24px 24px;\n    border: 3px dashed #aaa;\n    border-radius: 11px;\n}\n````","html":"<script>(function(){'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _next = require('@alifd/next');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Shape = {\n    NORMAL: 'normal',\n    BUTTON: 'button'\n};\n\nvar ItemDirection = {\n    HORIZON: 'hoz',\n    VERTICAL: 'ver'\n};\n\nvar RadioGroup = function (_React$Component) {\n    _inherits(RadioGroup, _React$Component);\n\n    function RadioGroup() {\n        var _ref;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, RadioGroup);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n            shape: Shape.NORMAL,\n            itemDirection: ItemDirection.HORIZON\n        }, _this.onShapeChange = function (shape) {\n            _this.setState({ shape: shape });\n        }, _this.onItemDirectionChange = function (itemDirection) {\n            _this.setState({ itemDirection: itemDirection });\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(RadioGroup, [{\n        key: 'render',\n        value: function render() {\n            return React.createElement(\n                'div',\n                null,\n                React.createElement(\n                    'h5',\n                    null,\n                    'Choose a shape'\n                ),\n                React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                        _next.Radio.Group,\n                        {\n                            shape: 'button',\n                            value: this.state.shape,\n                            onChange: this.onShapeChange\n                        },\n                        React.createElement(\n                            _next.Radio,\n                            { value: Shape.NORMAL },\n                            'Normal'\n                        ),\n                        React.createElement(\n                            _next.Radio,\n                            { value: Shape.BUTTON },\n                            'Button'\n                        )\n                    )\n                ),\n                React.createElement(\n                    'h5',\n                    null,\n                    'Choose an align-type of the item'\n                ),\n                React.createElement(\n                    'div',\n                    null,\n                    React.createElement(\n                        _next.Radio.Group,\n                        {\n                            shape: 'button',\n                            value: this.state.itemDirection,\n                            onChange: this.onItemDirectionChange\n                        },\n                        React.createElement(\n                            _next.Radio,\n                            { value: ItemDirection.HORIZON },\n                            'Horizon'\n                        ),\n                        React.createElement(\n                            _next.Radio,\n                            {\n                                value: ItemDirection.VERTICAL,\n                                disabled: this.state.shape === Shape.BUTTON\n                            },\n                            'Vertical'\n                        )\n                    )\n                ),\n                React.createElement(\n                    'div',\n                    { className: 'rendered-container' },\n                    React.createElement(\n                        'h3',\n                        null,\n                        'Rendered Result'\n                    ),\n                    React.createElement(\n                        _next.Radio.Group,\n                        {\n                            shape: this.state.shape,\n                            itemDirection: this.state.itemDirection\n                        },\n                        React.createElement(\n                            _next.Radio,\n                            { value: 'react' },\n                            'React'\n                        ),\n                        React.createElement(\n                            _next.Radio,\n                            { value: 'vue' },\n                            'Vue'\n                        ),\n                        React.createElement(\n                            _next.Radio,\n                            { value: 'angular' },\n                            'Angular'\n                        )\n                    )\n                )\n            );\n        }\n    }]);\n\n    return RadioGroup;\n}(React.Component);\n\nReactDOM.render(React.createElement(RadioGroup, null), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Radio <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> Shape <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token constant\">NORMAL</span><span class=\"token operator\">:</span> <span class=\"token string\">'normal'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token constant\">BUTTON</span><span class=\"token operator\">:</span> <span class=\"token string\">'button'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> ItemDirection <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token constant\">HORIZON</span><span class=\"token operator\">:</span> <span class=\"token string\">'hoz'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token constant\">VERTICAL</span><span class=\"token operator\">:</span> <span class=\"token string\">'ver'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">RadioGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n    state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        shape<span class=\"token operator\">:</span> Shape<span class=\"token punctuation\">.</span><span class=\"token constant\">NORMAL</span><span class=\"token punctuation\">,</span>\n        itemDirection<span class=\"token operator\">:</span> ItemDirection<span class=\"token punctuation\">.</span><span class=\"token constant\">HORIZON</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function-variable function\">onShapeChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">shape</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> shape <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function-variable function\">onItemDirectionChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">itemDirection</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> itemDirection <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h5</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Choose a shape</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h5</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio.Group</span></span>\n                        <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span>\n                        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>shape<span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onShapeChange<span class=\"token punctuation\">}</span></span>\n                    <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>Shape<span class=\"token punctuation\">.</span><span class=\"token constant\">NORMAL</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Normal</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>Shape<span class=\"token punctuation\">.</span><span class=\"token constant\">BUTTON</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Button</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio.Group</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h5</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Choose an align-type of the item</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h5</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio.Group</span></span>\n                        <span class=\"token attr-name\">shape</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span>\n                        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>itemDirection<span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onItemDirectionChange<span class=\"token punctuation\">}</span></span>\n                    <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>ItemDirection<span class=\"token punctuation\">.</span><span class=\"token constant\">HORIZON</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Horizon</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span>\n                            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>ItemDirection<span class=\"token punctuation\">.</span><span class=\"token constant\">VERTICAL</span><span class=\"token punctuation\">}</span></span>\n                            <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>shape <span class=\"token operator\">===</span> Shape<span class=\"token punctuation\">.</span><span class=\"token constant\">BUTTON</span><span class=\"token punctuation\">}</span></span>\n                        <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Vertical</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio.Group</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>rendered-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Rendered Result</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio.Group</span></span>\n                        <span class=\"token attr-name\">shape</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>shape<span class=\"token punctuation\">}</span></span>\n                        <span class=\"token attr-name\">itemDirection</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>itemDirection<span class=\"token punctuation\">}</span></span>\n                    <span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>react<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">React</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Vue</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Radio</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>angular<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Angular</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Radio.Group</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n                </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">RadioGroup</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div><style type=\"text/css\">.rendered-container {\n    margin: 32px 0 0;\n    padding: 0 24px 24px;\n    border: 3px dashed #aaa;\n    border-radius: 11px;\n}</style><div class=\"highlight\"><pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">.rendered-container</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 32px 0 0<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> 0 24px 24px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> 3px dashed #aaa<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> 11px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre></div>"}