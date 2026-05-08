import fs from 'fs/promises';
import path from 'path';
import { cache } from 'react';

// 使用 React cache 避免在单次请求中重复读取文件
export const getPageData = cache(async (category: string, slug: string) => {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', category, `${slug}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading data for ${category}/${slug}:`, error);
    return null;
  }
});

// 获取该栏目下的所有 slugs（用于 generateStaticParams）
export const getAllSlugsByCategory = cache(async (category: string) => {
  try {
    const dirPath = path.join(process.cwd(), 'src', 'data', category);
    const files = await fs.readdir(dirPath);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error(`Error reading slugs for category ${category}:`, error);
    return [];
  }
});
