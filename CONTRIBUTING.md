# 贡献指南 | Contribution Guidelines

感谢您考虑为 awesome-nostr-zh 做出贡献！请阅读以下指南，了解如何添加或更新项目信息。

Thank you for considering contributing to awesome-nostr-zh! Please read the following guidelines to learn how to add or update project information.

## 添加新项目 | Adding a New Project

要添加新项目，请按照以下步骤操作：

1. Fork 这个仓库
2. 在 `projects.toml` 文件中找到合适的分类，或创建新的分类
3. 按照现有格式添加您的项目信息（中文和英文），项目按照字母顺序排列
4. 提交 Pull Request

To add a new project, please follow these steps:

1. Fork this repository
2. Find the appropriate category in the `projects.toml` file, or create a new one
3. Add your project information in the existing format (both Chinese and English), sorted alphabetically
4. Submit a Pull Request

## TOML 格式指南 | TOML Format Guide

以下是添加新项目时需要遵循的 TOML 格式：

Here's the TOML format to follow when adding a new project:

```toml
[[categories.projects]]
name = "项目名称"                # 中文名称 | Project Name
name_en = "Project Name"        # 英文名称 | Project Name in English
url = "https://project-url.com" # 项目链接 | Project URL
description = "项目描述"         # 中文描述（可选） | Project Description (optional)
description_en = "Project description" # 英文描述（可选） | Project Description in English (optional)
tags = ["标签1", "标签2"]         # 中文标签（可选） | Chinese Tags (optional)
tags_en = ["tag1", "tag2"]      # 英文标签（可选） | English Tags (optional)
```

## 创建新分类 | Creating a New Category

如果您认为需要创建新的分类，请按照以下格式添加：

If you think a new category is needed, please add it in the following format:

```toml
[[categories]]
name = "新分类名称"                # 中文分类名称 | New Category Name
name_en = "New Category Name"    # 英文分类名称  | New Category Name in English
```

## 项目标准 | Project Criteria

所有添加到列表的项目必须满足以下标准：

1. 与 Nostr 协议相关
2. 由中文开发者开发或中文社区运营
3. 活跃且维护良好，或对社区有重要价值
4. 提供中英文双语描述

All projects added to the list must meet the following criteria:

1. Related to the Nostr protocol
2. Developed by Chinese developers or operated by the Chinese community
3. Active and well-maintained, or of significant value to the community
4. Provide bilingual descriptions in Chinese and English
