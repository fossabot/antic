import * as React from "react";
import { Link } from "react-router-dom";

const Demo = () => (
  <div>
    <div>
      <h3>小项目</h3>
      <div>
        <ul>
          <li>
            <Link to="/things">物品管理</Link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h3>小工具</h3>
      <ul>
        <li>
          <Link to="/diff">文本对比</Link>
        </li>
        <li>
          <Link to="/mediawiki-to-markdown">MediaWiki 转 Markdown</Link>
        </li>
        <li>
          <Link to="/base64">Base64</Link>
        </li>
        <li>
          <Link to="/music">音乐播放器</Link>
        </li>
        <li>
          <Link to="/moon">
            <span role="img">🥮</span> 博饼
          </Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <a href="/demos/jqueryselectors" target="_blank">
            jQuery 选择器在线测试
          </a>
        </li>
        <li>
          <Link to="/demos/calculator">
            <span role="img">🌡</span> 摄氏度、华氏度转换（React 官方 Example）
          </Link>
        </li>
        <li>
          <Link to="/api/time">⌚ ️时间、时间戳</Link>
        </li>
        <li>
          <Link to="/nav">🧭 网址导航</Link>
        </li>
      </ul>
    </div>
    <div>
      <h3>学习</h3>
      <ul>
        <li>
          <a href="/codes/react-test.html" target="_blank">
            React 单文件测试
          </a>
        </li>
        <li>
          <a href="/demos/tailwind" target="_blank">
            Tailwind CSS 学习
          </a>
        </li>
        <li>
          <Link to="/demos/font">Typography 字体展示</Link>
        </li>
      </ul>
    </div>
    <div>
      <h3>Canvas</h3>
    </div>
    <div>
      <ul>
        <li>
          <a href="/demos/canvas/threejs_load_images.html" target="_blank">
            Three.js 加载图片
          </a>
        </li>
        <li>
          <a href="/demos/canvas/3d.html" target="_blank">
            Emoji 3D(Three.js)
          </a>
        </li>
        <li>
          <a href="/demos/canvas/like.html" target="_blank">
            喜欢的（Three.js）
          </a>
        </li>
        <li>
          <a href="/demos/canvas/cherry.html" target="_blank">
            <span role="img" aria-label="cherry">
              🌸
            </span>{" "}
            樱花
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3>音视频</h3>
    </div>
    <div>
      <ul>
        <li>
          <Link to="/music">音频测试</Link>
        </li>
        <li>
          <a href="/examples/mv.html" target="_blank">
            MV 测试
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h3>自用工具（弃用）</h3>
      <ul>
        <li>
          <Link to="/demos/parking">停车（爬虫)</Link>
        </li>
        <li>
          <Link to="/weibo">微博热搜榜</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Demo;
