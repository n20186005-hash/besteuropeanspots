"use client";

import { useEffect, useState } from "react";
import { getTimezoneByCountry, countryToEnglishMap } from "@/lib/timezone-map";

interface WeatherData {
  currentTemp: number;
  currentCode: number;
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
    sunrise: string[];
    sunset: string[];
  };
}

export function WeatherTimeWidget({ city, country, englishName }: { city?: string; country: string; englishName?: string }) {
  const [time, setTime] = useState<Date | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const timezone = getTimezoneByCountry(country);

  // 时钟逻辑
  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 获取天气数据
  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true);
        // 1. 获取经纬度 (尝试多个组合直到找到为止)
        const englishCountry = countryToEnglishMap[country] || country;
        const queries = [
          city && englishCountry ? `${city} ${englishCountry}` : null,
          englishName && englishCountry ? `${englishName} ${englishCountry}` : null,
          englishName, // 使用英文名，比如 "Aalborghus Castle"
          city,
          englishCountry // 最后的兜底，只搜索国家（比如 "Denmark"）
        ].filter(Boolean);

        let geoData = null;
        for (const q of queries) {
          const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q as string)}&count=1&language=en&format=json`);
          geoData = await geoRes.json();
          if (geoData.results && geoData.results.length > 0) {
            break;
          }
        }

        if (!geoData || !geoData.results || geoData.results.length === 0) {
          throw new Error("Location not found");
        }

        const { latitude, longitude } = geoData.results[0];

        // 2. 获取天气 (当前 + 未来3天 + 日出日落)
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geoData.results[0].latitude}&longitude=${geoData.results[0].longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode,sunrise,sunset&timezone=${encodeURIComponent(timezone)}`
        );
        const weatherData = await weatherRes.json();

        setWeather({
          currentTemp: weatherData.current_weather.temperature,
          currentCode: weatherData.current_weather.weathercode,
          daily: weatherData.daily,
        });
      } catch (err) {
        console.error("Failed to fetch weather:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city, country, timezone]);

  // 天气图标映射
  const getWeatherIcon = (code: number, className = "w-6 h-6") => {
    // 简单 WMO 气象代码映射
    if (code === 0 || code === 1) {
      // 晴天 / 少云
      return (
        <svg className={`${className} text-yellow-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else if (code === 2 || code === 3 || code === 45 || code === 48) {
      // 多云 / 雾
      return (
        <svg className={`${className} text-gray-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    } else if (code >= 51 && code <= 67) {
      // 雨
      return (
        <svg className={`${className} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v2m-4-1v2m8-2v2M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
    } else if (code >= 71 && code <= 86) {
      // 雪
      return (
        <svg className={`${className} text-blue-300`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-9-9h18m-13.5-6.5l9 13m-9 0l9-13" />
        </svg>
      );
    } else {
      // 雷暴等
      return (
        <svg className={`${className} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
  };

  if (!time) return <div className="h-32 bg-gray-100 animate-pulse rounded-xl mb-8"></div>;

  const formattedTime = new Intl.DateTimeFormat("zh-CN", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(time);

  const formattedDate = new Intl.DateTimeFormat("zh-CN", {
    timeZone: timezone,
    month: "short",
    day: "numeric",
    weekday: "short",
  }).format(time);

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border border-indigo-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* 左侧：本地时间与日出日落 */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-indigo-800/80 font-medium mb-1">
            {city || country} 当地时间
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-indigo-900 font-mono tracking-tight">{formattedTime}</span>
            <span className="text-sm text-indigo-700">{formattedDate}</span>
          </div>
          {weather && weather.daily.sunrise && (
            <div className="flex items-center gap-3 mt-1 text-xs text-indigo-600/80">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v2m0 14v2m9-9h-2M5 12H3m14 7l-1.5-1.5M7.5 7.5L6 6m12 0l-1.5 1.5M7.5 16.5L6 18m6-9a3 3 0 110 6 3 3 0 010-6z" /></svg>
                {new Date(weather.daily.sunrise[0]).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: timezone })}
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                {new Date(weather.daily.sunset[0]).toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: timezone })}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 右侧：天气与预测 */}
      <div className="flex-1 w-full flex items-center justify-end">
        {loading ? (
          <div className="flex items-center gap-2 text-indigo-400">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm">正在获取气象信息...</span>
          </div>
        ) : error || !weather ? (
          <div className="text-sm text-gray-400">暂无气象数据</div>
        ) : (
          <div className="flex items-center gap-6 divide-x divide-indigo-200/50">
            
            {/* 当前天气 */}
            <div className="flex items-center gap-3">
              {getWeatherIcon(weather.currentCode, "w-10 h-10")}
              <div>
                <p className="text-xs text-indigo-800/70 mb-0.5">实时温度</p>
                <div className="text-2xl font-bold text-indigo-900">
                  {Math.round(weather.currentTemp)}°C
                </div>
              </div>
            </div>

            {/* 未来3天趋势 */}
            <div className="pl-6 flex gap-4">
              {weather.daily.time.slice(1, 4).map((dateStr, index) => {
                const maxT = Math.round(weather.daily.temperature_2m_max[index + 1]);
                const minT = Math.round(weather.daily.temperature_2m_min[index + 1]);
                const code = weather.daily.weathercode[index + 1];
                const dayName = new Date(dateStr).toLocaleDateString("zh-CN", { weekday: "short" });

                return (
                  <div key={dateStr} className="flex flex-col items-center justify-center">
                    <span className="text-[10px] text-indigo-700/80 mb-1">{dayName}</span>
                    {getWeatherIcon(code, "w-5 h-5 mb-1")}
                    <span className="text-xs font-medium text-indigo-900">
                      {minT}°~{maxT}°
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
