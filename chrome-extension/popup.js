let logs = [];
let stats = { success: 0, fail: 0 };
let progress = [];

// 初始化加载进度
chrome.storage.local.get(['pluginLogs', 'pluginStats', 'pluginProgress'], (result) => {
  if (result.pluginLogs) logs = result.pluginLogs;
  if (result.pluginStats) stats = result.pluginStats;
  if (result.pluginProgress) progress = result.pluginProgress;
  updateLogUI();
});

function saveProgress() {
  chrome.storage.local.set({
    pluginLogs: logs,
    pluginStats: stats,
    pluginProgress: progress
  });
}

function addLog(msg, type = 'info') {
  const time = new Date().toLocaleTimeString('zh-CN', { hour12: false });
  logs.push({ time, msg, type });
  if (type === 'success') stats.success++;
  if (type === 'error') stats.fail++;
  saveProgress();
  updateLogUI();
}

function updateLogUI() {
  const panel = document.getElementById('logPanel');
  panel.innerHTML = logs.map(l => {
    let cssClass = 'log-info';
    if (l.type === 'success') cssClass = '';
    if (l.type === 'error') cssClass = 'log-error';
    return `<div class="${cssClass}">[${l.time}] ${l.msg}</div>`;
  }).join('');
  panel.scrollTop = panel.scrollHeight;
  document.getElementById('statusText').innerHTML = `进度已自动保存 | <span class="badge-success">成功: ${stats.success}</span> | <span class="badge-error">失败: ${stats.fail}</span>`;
}

document.getElementById('searchBtn').addEventListener('click', async () => {
  const country = document.getElementById('countryInput').value.trim();
  const condition = document.getElementById('conditionInput').value.trim();
  const noApi = document.getElementById('noApiCheck').checked;

  if (!country) return addLog('请输入国家名称！', 'error');

  addLog(`开始搜索国家: ${country} | 条件: ${condition || '无'}...`);
  
  try {
    if (noApi) {
      // 无API模式：调用维基百科公开接口（不需要API Key，允许跨域）
      const query = `${country} ${condition} 旅游景点`;
      const url = `https://zh.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;
      
      addLog('正在抓取维基百科公开数据...');
      const res = await fetch(url);
      if (!res.ok) throw new Error('网络请求失败');
      const data = await res.json();
      
      if (data.query && data.query.search.length > 0) {
        data.query.search.slice(0, 5).forEach(item => {
          const title = item.title;
          const snippet = item.snippet.replace(/<[^>]+>/g, '') + '...';
          addLog(`获取成功: ${title}`, 'success');
          progress.push({ country, name: title, snippet });
        });
        saveProgress();
      } else {
        addLog(`未找到符合条件的景点`, 'error');
      }
    } else {
      addLog('API模式尚未配置，请勾选无API模式', 'error');
    }
  } catch (err) {
    addLog(`获取异常: ${err.message}`, 'error');
  }
});

document.getElementById('clearBtn').addEventListener('click', () => {
  if (confirm('确定要清空所有日志和已保存的进度吗？')) {
    logs = [];
    stats = { success: 0, fail: 0 };
    progress = [];
    saveProgress();
    updateLogUI();
    addLog('已清空进度', 'info');
  }
});

document.getElementById('copyBtn').addEventListener('click', () => {
  if (progress.length === 0) return addLog('没有结果可复制', 'error');
  const text = progress.map(p => `${p.country}\t${p.name}\t${p.snippet}`).join('\n');
  navigator.clipboard.writeText(text).then(() => addLog('结果已复制到剪贴板', 'success'));
});

document.getElementById('exportTxtBtn').addEventListener('click', () => {
  if (progress.length === 0) return addLog('没有结果可导出', 'error');
  const text = progress.map(p => `国家: ${p.country}\n景点: ${p.name}\n简介: ${p.snippet}\n---`).join('\n');
  downloadFile(text, 'spots_results.txt', 'text/plain');
});

document.getElementById('exportCsvBtn').addEventListener('click', () => {
  if (progress.length === 0) return addLog('没有结果可导出', 'error');
  const csv = '\uFEFF' + '国家,景点名称,简介\n' + progress.map(p => `"${p.country}","${p.name}","${p.snippet.replace(/"/g, '""')}"`).join('\n');
  downloadFile(csv, 'spots_results.csv', 'text/csv');
});

function downloadFile(content, filename, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
  addLog(`导出 ${filename} 成功`, 'success');
}