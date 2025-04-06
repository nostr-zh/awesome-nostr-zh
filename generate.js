const fs = require("fs");
const path = require("path");
const toml = require("@iarna/toml");

// 读取项目数据和README模板
const projectsContent = fs.readFileSync("./projects.toml", "utf-8");
const projectsData = toml.parse(projectsContent);
const readmeTemplate = fs.readFileSync("./README.template.md", "utf-8");
const readmeTemplateEN = fs.readFileSync("./README.template.en.md", "utf-8");

// 生成中文内容
function generateContent(categories) {
  return categories
    .map((category) => {
      const projects = category.projects
        ? category.projects
            .map((project) => {
              const tags = project.tags
                ? "`#" + project.tags.join("` `#") + "`"
                : "";

              let line = `- [${project.name}](${project.url})`;
              if (project.description) {
                line += ` - ${project.description}。`;
              }
              if (tags) {
                line += ` ${tags}`;
              }
              return line;
            })
            .join("\n")
        : "";

      return `## ${category.name}\n\n${projects}`;
    })
    .join("\n\n");
}

// 生成英文内容
function generateContentEN(categories) {
  return categories
    .map((category) => {
      const projects = category.projects
        ? category.projects
            .map((project) => {
              const tagsEn = project.tags_en
                ? "`#" + project.tags.join("` `#") + "`"
                : "";

              let line = `- [${project.name_en}](${project.url})`;
              if (project.description_en) {
                line += ` - ${project.description_en}.`;
              }
              if (tagsEn) {
                line += ` ${tagsEn}`;
              }
              return line;
            })
            .join("\n")
        : "";

      return `## ${category.name_en}\n\n${projects}`;
    })
    .join("\n\n");
}

// 生成完整的README内容
function generateReadme() {
  // 生成中文README（作为默认README）
  const content = generateContent(projectsData.categories);
  let readmeContent = readmeTemplate.replace("{{content}}", content);
  readmeContent = readmeContent.replace(/\/\/ filepath:.*\n/, "");
  readmeContent = readmeContent.replace(/<!-- filepath:.*? -->/, "");
  // 将中文版保存为 README.md（默认）
  fs.writeFileSync("./README.md", readmeContent, "utf-8");

  // 生成英文README
  const contentEN = generateContentEN(projectsData.categories);
  let readmeContentEN = readmeTemplateEN.replace("{{content}}", contentEN);
  readmeContentEN = readmeContentEN.replace(/\/\/ filepath:.*\n/, "");
  readmeContentEN = readmeContentEN.replace(/<!-- filepath:.*? -->/, "");
  fs.writeFileSync("./README.en.md", readmeContentEN, "utf-8");

  console.log("README.md 和 README.en.md 生成完成！");
}

generateReadme();
