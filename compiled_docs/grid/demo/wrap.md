{"title":"溢出后是否换行","meta":{"title":"溢出后是否换行","description":"\n<p>（不支持 IE9 浏览器）默认列在行中宽度溢出后不会换行，如果想自动换行，请为 <code>Row</code> 设置 <code>wrap</code> 为 true。</p>\n","order":"3"},"codes":{"jsx":"import { Grid } from '@alifd/next';\n\nconst { Row, Col } = Grid;\n\nReactDOM.render(\n    <div className=\"wrap-demo\">\n        <div className=\"demo-title\">No wrap</div>\n        <Row>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"8\">col-8</Col>\n        </Row>\n        <div className=\"demo-title\">Wrap</div>\n        <Row wrap>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"8\">col-8</Col>\n        </Row>\n    </div>, mountNode);\n","css":".wrap-demo .demo-title {\n    margin-left: 20px;\n}\n\n.wrap-demo .next-row {\n    margin: 10px 0;\n}\n\n.wrap-demo .next-col {\n    border:1px solid #CCC;\n    border-radius: 3px;\n    background-color:#ECECEC;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n}\n"},"body":"\n\n````jsx\nimport { Grid } from '@alifd/next';\n\nconst { Row, Col } = Grid;\n\nReactDOM.render(\n    <div className=\"wrap-demo\">\n        <div className=\"demo-title\">No wrap</div>\n        <Row>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"8\">col-8</Col>\n        </Row>\n        <div className=\"demo-title\">Wrap</div>\n        <Row wrap>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"6\">col-6</Col>\n            <Col span=\"8\">col-8</Col>\n        </Row>\n    </div>, mountNode);\n````\n\n````css\n.wrap-demo .demo-title {\n    margin-left: 20px;\n}\n\n.wrap-demo .next-row {\n    margin: 10px 0;\n}\n\n.wrap-demo .next-col {\n    border:1px solid #CCC;\n    border-radius: 3px;\n    background-color:#ECECEC;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n}\n````","html":"<script>(function(){\"use strict\";\n\nvar _next = require(\"@alifd/next\");\n\nvar Row = _next.Grid.Row,\n    Col = _next.Grid.Col;\n\n\nReactDOM.render(React.createElement(\n    \"div\",\n    { className: \"wrap-demo\" },\n    React.createElement(\n        \"div\",\n        { className: \"demo-title\" },\n        \"No wrap\"\n    ),\n    React.createElement(\n        Row,\n        null,\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"8\" },\n            \"col-8\"\n        )\n    ),\n    React.createElement(\n        \"div\",\n        { className: \"demo-title\" },\n        \"Wrap\"\n    ),\n    React.createElement(\n        Row,\n        { wrap: true },\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"6\" },\n            \"col-6\"\n        ),\n        React.createElement(\n            Col,\n            { span: \"8\" },\n            \"col-8\"\n        )\n    )\n), mountNode);})()</script><div class=\"highlight\"><pre class=\"language-jsx\"><code class=\"language-jsx\"><span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Grid <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@alifd/next'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Row<span class=\"token punctuation\">,</span> Col <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Grid<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>wrap-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>demo-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">No wrap</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>demo-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">Wrap</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Row</span></span> <span class=\"token attr-name\">wrap</span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>6<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-6</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n            </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>8<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">col-8</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n        </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span><span class=\"token plain-text\">\n    </span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span></code></pre></div><style type=\"text/css\">.wrap-demo .demo-title {\n    margin-left: 20px;\n}\n\n.wrap-demo .next-row {\n    margin: 10px 0;\n}\n\n.wrap-demo .next-col {\n    border:1px solid #CCC;\n    border-radius: 3px;\n    background-color:#ECECEC;\n    height: 30px;\n    line-height: 30px;\n    text-align: center;\n}</style><div class=\"highlight\"><pre class=\"language-css\"><code class=\"language-css\"><span class=\"token selector\">.wrap-demo .demo-title</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin-left</span><span class=\"token punctuation\">:</span> 20px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">.wrap-demo .next-row</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> 10px 0<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">.wrap-demo .next-col</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span>1px solid #CCC<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> 3px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span>#ECECEC<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> 30px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">line-height</span><span class=\"token punctuation\">:</span> 30px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span></code></pre></div>"}