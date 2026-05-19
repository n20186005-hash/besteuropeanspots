"use client";

import { useState, useEffect } from "react";
import { getCountryPracticalInfo } from "@/lib/country-info";

export function PracticalInfoWidget({ country }: { country: string }) {
  const info = getCountryPracticalInfo(country);
  
  // 汇率状态
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [targetCurrency, setTargetCurrency] = useState<string>(""); // 默认未选择
  const [amount, setAmount] = useState<string>("100");
  const [isFetching, setIsFetching] = useState(false);
  
  // 小费计算器状态
  const [billAmount, setBillAmount] = useState<string>("");
  const [customTipPercent, setCustomTipPercent] = useState<number>(info.tipping.percentage);

  useEffect(() => {
    // 当国家切换时，重置为该国的默认建议小费比例
    setCustomTipPercent(info.tipping.percentage);
  }, [info.tipping.percentage]);

  useEffect(() => {
    // 只有在用户选择了目标货币，且尚未获取过汇率时，才去调 API
    if (targetCurrency && !rates && !isFetching) {
      async function fetchExchangeRates() {
        setIsFetching(true);
        try {
          // 获取以 USD 为基准的所有汇率
          const res = await fetch('https://open.er-api.com/v6/latest/USD');
          const data = await res.json();
          if (data && data.rates) {
            setRates(data.rates);
          }
        } catch (err) {
          console.error("Failed to fetch exchange rates", err);
        } finally {
          setIsFetching(false);
        }
      }
      
      fetchExchangeRates();
    }
  }, [targetCurrency, rates, isFetching]);

  // 常用的基础货币列表
  const commonCurrencies = [
    { code: "CNY", name: "人民币" },
    { code: "USD", name: "美元" },
    { code: "EUR", name: "欧元" },
    { code: "GBP", name: "英镑" },
    { code: "HKD", name: "港币" },
    { code: "TWD", name: "新台币" },
    { code: "JPY", name: "日元" },
    { code: "KRW", name: "韩元" }
  ];

  // 计算转换后的金额
  let convertedAmount = "--";
  let displayRate = "--";
  
  if (rates && targetCurrency && amount && !isNaN(parseFloat(amount))) {
    // 如果是相同的货币
    if (info.currencyCode === targetCurrency) {
      convertedAmount = parseFloat(amount).toFixed(2);
      displayRate = "1.0000";
    } else {
      // 交叉汇率计算: (USD/To) / (USD/From) = From/To
      const rateFrom = rates[info.currencyCode];
      const rateTo = rates[targetCurrency];
      if (rateFrom && rateTo) {
        const actualRate = rateTo / rateFrom;
        convertedAmount = (parseFloat(amount) * actualRate).toFixed(2);
        displayRate = actualRate.toFixed(4);
      }
    }
  }

  // 计算小费金额
  const tipAmount = billAmount && !isNaN(parseFloat(billAmount))
    ? (parseFloat(billAmount) * (customTipPercent / 100)).toFixed(2)
    : "0.00";
  const totalAmount = billAmount && !isNaN(parseFloat(billAmount))
    ? (parseFloat(billAmount) + parseFloat(tipAmount)).toFixed(2)
    : "0.00";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-semibold text-gray-800">当地旅行实用指南</h3>
      </div>
      
      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* 1. 实时汇率转换 */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">实时汇率</h4>
          </div>
          
          <div className="space-y-4">
            {/* 左侧：源货币（锁定为当地货币） */}
            <div className="flex items-center gap-2">
              <div className="w-24 px-2 py-2 bg-gray-100 border border-gray-200 rounded-md text-gray-600 sm:text-xs font-medium text-center shadow-inner" title={info.currencyName}>
                {info.currencyCode}
              </div>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm px-3 py-2 border bg-white font-semibold text-gray-800"
                placeholder="输入金额"
              />
            </div>
            
            {/* 转换箭头 */}
            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-white border border-gray-100 rounded-full p-1 shadow-sm text-gray-300">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
            
            {/* 右侧：目标货币 */}
            <div className="flex items-center gap-2">
              <select 
                value={targetCurrency}
                onChange={(e) => setTargetCurrency(e.target.value)}
                className="w-28 border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-xs px-2 py-2 border bg-white font-medium text-gray-700"
              >
                <option value="" disabled>选择你的货币</option>
                {commonCurrencies.map(c => (
                  <option key={`target-${c.code}`} value={c.code}>{c.code} {c.name}</option>
                ))}
              </select>
              <div className={`block w-full rounded-md sm:text-lg px-3 py-1.5 border font-bold overflow-hidden text-ellipsis whitespace-nowrap ${targetCurrency ? 'bg-green-50 border-green-200 text-green-800' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                {!targetCurrency 
                  ? "--" 
                  : isFetching 
                    ? "获取中..." 
                    : convertedAmount}
              </div>
            </div>
            
            {/* 汇率说明 */}
            {rates && targetCurrency && (
              <p className="text-[10px] text-gray-400 text-center mt-2">
                1 {info.currencyCode} ≈ {displayRate} {targetCurrency}
              </p>
            )}
          </div>
        </div>

        {/* 2. 小费指南 */}
        <div className="p-6 bg-gray-50/50">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-amber-100 p-2 rounded-full text-amber-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">当地小费指南</h4>
          </div>
          
          <p className="text-xs text-gray-600 leading-relaxed mb-4 min-h-[3rem]">
            {info.tipping.description}
          </p>

          <div className="space-y-3 bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 whitespace-nowrap">账单金额</span>
              <input 
                type="number" 
                value={billAmount}
                onChange={(e) => setBillAmount(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-xs px-2 py-1.5 border"
                placeholder="输入金额"
              />
            </div>
            
            {/* 小费比例选择器 */}
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-gray-500 whitespace-nowrap">选择比例</span>
              <div className="flex bg-gray-100 p-0.5 rounded-md w-full justify-between">
                {[0, 5, 10, 15].map((percent) => (
                  <button
                    key={percent}
                    onClick={() => setCustomTipPercent(percent)}
                    className={`flex-1 text-xs py-1 rounded transition-colors ${
                      customTipPercent === percent 
                        ? 'bg-white text-amber-600 shadow-sm font-semibold' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {percent}%
                    {percent === info.tipping.percentage && <span className="hidden sm:inline"> (推荐)</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-100 mt-2">
              <span className="text-xs text-gray-500">小费金额</span>
              <span className="text-sm font-semibold text-amber-600">+{tipAmount} {info.currencyCode}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-700">结账总额</span>
              <span className="text-sm font-bold text-gray-900">{totalAmount} {info.currencyCode}</span>
            </div>
          </div>
        </div>

        {/* 3. 插座与电压 */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">插座与电压</h4>
          </div>
          
          <div className="flex flex-col h-full gap-4">
            <div>
              <span className="text-xs text-gray-500 block mb-1">标准电压</span>
              <div className="font-medium text-gray-900 bg-gray-100 px-3 py-1.5 rounded inline-block">
                {info.voltage}
              </div>
            </div>
            
            <div>
              <span className="text-xs text-gray-500 block mb-2">适用插座类型</span>
              <div className="flex flex-wrap gap-2">
                {info.plugType.map(type => (
                  <div key={type} className="flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded text-sm text-blue-800 font-medium">
                    <span>Type {type}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-2">
                {info.plugType.includes('C') || info.plugType.includes('F') 
                  ? "注: 欧标双圆头插座，国内大部分电器需转换头。" 
                  : info.plugType.includes('G') 
                    ? "注: 英标三方头插座，国内电器必须使用转换头。"
                    : "注: 建议携带万能转换头。"}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
