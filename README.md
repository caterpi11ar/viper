# idleness

基于 RSS + MCP 的自动化内容运营框架

## 核心架构

```
RSS源 → RSSHub抓取 → AI改写(Claude) → MCP发布(小红书等)
```

## 模块设计

| 模块 | 路径 | 功能 |
|------|------|------|
| RSS 抓取 | `src/rss/fetcher.ts` | 使用 RSSHub 抓取内容 |
| 内容处理 | `src/content/processor.ts` | 提取/改写内容 |
| 发布接口 | `src/publisher/` | 抽象发布接口，支持多平台扩展 |

## 使用方式

通过 Claude Code MCP 调用，实现一键抓取并发布到自媒体平台。

## 相关文档
